import NavHeader from "../js/components/navHeader.js";
import NavFooter from "../js/components/navFooter.js";
import FeaturetteLinks from "../js/components/featuretteLinks.js";

fetch('/pages.json').then(resp => resp.json()).then(json => {
    let articlesJson = json.article;

    document.querySelector('#main-contents').innerHTML = `
        <div class="container marketing">
            <div id="articleList">
    
    
            </div>
        </div>    
    `;

    let filtered = articlesJson;
    document.querySelector('#articleList').append(new FeaturetteLinks(filtered));
});
