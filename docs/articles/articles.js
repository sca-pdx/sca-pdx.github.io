import NavHeader from "../js/components/navHeader.js";
import NavFooter from "../js/components/navFooter.js";
import FeaturetteLinks from "../js/components/featuretteLinks.js";
import {ALL_ARTICLES} from "./allArticles.js";

let allArticleLinks = Object.values(ALL_ARTICLES).map(a => a.getLink());

let params = new URLSearchParams(location.search);
if (params.get('id')) {
    // Load specific article
    let articleId = params.get('id');
    loadArticle(articleId);
} else {
    document.querySelector('main').innerHTML = `
        <div class="container marketing">
     <!--       <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <input type="text" class="form-control" id="inputTextSearch" placeholder="Filter albums">
            </div>-->
            <div id="articleList">
    
    
            </div>
        </div>    
    `;
    loadArticlesWithFilter();
}

function loadArticlesWithFilter() {
    let filtered = allArticleLinks;
    document.querySelector('#articleList').append(new FeaturetteLinks(filtered));
}

function loadArticle(articleId) {
    let articleMeta = ALL_ARTICLES[articleId];
    let article = document.createElement('article');
    document.querySelector('main').append(article);
    if (!articleMeta) {
        // TODO
    }

    fetch(articleMeta.contentPath).then(resp => resp.text()).then(text => {
        if (articleMeta.contentPath.endsWith('html')) {
            return text;
        } else if (articleMeta.contentPath.endsWith('md')) {
            return new showdown.Converter().makeHtml(text);
        }
    }).then(text => {
        article.innerHTML = text;
    })
}