import {Parser, HtmlRenderer} from 'commonmark';
import fs from 'fs/promises';
import path from 'path';
import {JSDOM} from "jsdom";

const headerHTML = await fs.readFile('./parts/header.html');
const footerHTML = await fs.readFile('./parts/footer.html');

async function searchDir(startPath, filter, callback) {
    var files = await fs.readdir(startPath);
    for (var i = 0; i < files.length; i++) {
        var filename = path.join(startPath, files[i]);
        var stat = await fs.lstat(filename);
        if (stat.isDirectory()) {
            await searchDir(filename, filter, callback); //recurse
        } else if (filename.endsWith(filter)) {
            await callback(startPath + '/' + files[i]);
        }
    }
}

function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}

const requiredFields = ['description', 'title', 'subtitle', 'published', 'tags', '']


function getId(filePath) {
    let parts = filePath.split('/');
    return parts[parts.length - 1].split('.')[0];
}

function generatePageData(reader, writer, text, file) {
    let result = writer.render(text);
    let dom = new JSDOM(result, "text/xml");

    let jsonConfig = dom.window.document.querySelector('script[type="application/json"]');
    if (jsonConfig) {
        let page = JSON.parse(jsonConfig.innerHTML)
        page.pageType = file.indexOf('/events/') > -1 ? 'event' : (file.indexOf('/articles/') > -1 ? 'article' : 'unknown');
        page.id = file.substring(file.indexOf('/')).replace('.md', '.html');
        return page;
    } else {
        return {
            id: file.substring(file.indexOf('/')).replace('.md', '.html'),
            pageType: file.indexOf('/events/') > -1 ? 'event' : (file.indexOf('/articles/') > -1 ? 'article' : 'unknown')
        };
    }

}

function createHTML(reader, writer, text, file) {
    let result = headerHTML + writer.render(text) + footerHTML;
    let dom = new JSDOM(result, "text/xml");

    let style = dom.window.document.createElement('link');
    let count = 0;
    style.rel = 'stylesheet';
    style.href = file.split('/').filter(p => count++ < 2).map(p => '../').join('') + 'css/page.css';
    console.log(file + '  ' + style.href);
    dom.window.document.head.append(style);
    return dom.serialize();
}

let command = process.argv[2];

if (command === 'build') {
    let reader = new Parser();
    let writer = new HtmlRenderer();



    let pages = {
        "article":[],
        "event":[],
        "unknown":[]
    };

    searchDir('./content', '.md', async function(file) {
        return fs.readFile(file, {encoding: 'UTF-8'}).then(text => {
            let parsed = reader.parse(text);
            let pageData = generatePageData(reader, writer, parsed, file);
            let updatedHTML = createHTML(reader, writer, parsed, file);

            pages[pageData.pageType].push(pageData);
            let fileName = file.split('/');
            fileName = fileName[fileName.length - 1].split('.')[0];
            let htmlLocation = `/${pageData.pageType}s/content/${fileName}.html`;
            pageData.html = htmlLocation;
            pageData.id = pageData.html;
            return fs.writeFile('./docs' + htmlLocation, updatedHTML);
        })
    }).then(() => {
        fs.writeFile('./docs/pages.json', JSON.stringify(pages, null, 4))
    });

   /* await fs.rm('./docs/node_modules', {recursive: true});
    await fs.cp('./node_modules', './docs/node_modules', {recursive: true});*/


    var parsed = reader.parse("Hello *world*"); // parsed is a 'Node' tree
// transform parsed if you like...
    var result = writer.render(parsed);
}
