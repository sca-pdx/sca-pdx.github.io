import NavHeader from "../js/components/navHeader.js";
import FeaturetteLinks from "../js/components/featuretteLinks.js";
import {ALL_ARTICLES} from "./allArticles.js";

let allArticleLinks = Object.values(ALL_ARTICLES).map(a => a.getLink());

let params = new URLSearchParams(location.search);
if (params.get('id')) {
    // Load specific article
    let articleId = params.get('id');

} else {
    // Load article directory
    loadArticlesWithFilter();
}

function loadArticlesWithFilter() {
    let filtered = allArticleLinks;
    document.querySelector('#articleList').append(new FeaturetteLinks(filtered));
}