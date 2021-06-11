import NavHeader from "./js/components/navHeader.js";
import NavFooter from "./js/components/navFooter.js";
import CarouselBlock from "./js/components/carouselBlock.js";
import FeaturedLinks from "./js/components/featuredLinks.js";
import FeaturetteLinks from "./js/components/featuretteLinks.js";
import {ALL_ARTICLES} from "./articles/allArticles.js";

let carousel = new CarouselBlock([
    {
        img: 'https://photos.smugmug.com/photos/i-sSMnt4g/10/083a03dc/XL/i-sSMnt4g-XL.jpg',
        title: 'Upcoming Events',
        subtitle: 'See what events and activities are coming up soon in the Portland metro area.',
        callToAction: '<a class="btn btn-lg btn-primary" href="#">Events</a>'
    },
    {
        title: 'Learn about the SCA',
        subtitle: 'Read through some getting started articles to help you get started with your adventure in the Society for Creative Anachronism',
        callToAction: '<a class="btn btn-lg btn-primary" href="#">Learn More!</a>'
    }
]);

let featuredLinks = new FeaturedLinks([
    {
        title: 'Three Mountains',
        img: '/img/three-mtns.gif',
        subtitle: 'Portland, Oregon and encompassing all of Multnomah and Clackamas counties.',
        callToAction: '<a class="btn btn-lg btn-primary" href="http://baronyofthreemountains.org/" target="_blank">Learn More!</a>'
    },
    {
        title: 'Dragon\'s Mist',
        img: '/img/DragonsMistBranchof.gif',
        subtitle: 'Washington and Clatsop counties in Oregon.',
        callToAction: '<a class="btn btn-lg btn-primary" href="https://dragonsmist.antir.sca.org/" target="_blank">Learn More!</a>'
    },
    {
        title: 'Stromgard',
        img: '/img/StromgardBranchof.gif',
        subtitle: 'Southwest Washington including Clark and Skamania counties',
        callToAction: '<a class="btn btn-lg btn-primary" href="https://www.stromgard.org/" target="_blank">Learn More!</a>'
    }
]);

let featuretteLinks = new FeaturetteLinks(
    [
        ALL_ARTICLES['historyOfSCAInPortland'].getLink(),
        ALL_ARTICLES['firstPractice'].getLink(),
    {
        title: 'First featurette heading. <span class="text-muted">It’ll blow your mind.</span>',
        subtitle: 'Some great placeholder content for the first featurette here. Imagine some exciting prose here.'
    },
    {
        title: 'Oh yeah, it’s that good. <span class="text-muted">See for yourself.</span>',
        subtitle: 'Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.'
    },
    {
        title: 'And lastly, this one. <span class="text-muted">Checkmate.</span>',
        subtitle: 'And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.'
    }
]);

document.querySelector('main').prepend(carousel);
document.querySelector('main div.marketing').prepend(featuredLinks);
document.querySelector('main div.marketing').append(featuretteLinks);