import NavHeader from "./js/components/navHeader.js";
import NavFooter from "./js/components/navFooter.js";
import CarouselBlock from "./js/components/carouselBlock.js";
import FeaturedLinks from "./js/components/featuredLinks.js";
import FeaturetteLinks from "./js/components/featuretteLinks.js";;

let carousel = new CarouselBlock([
    {
        img: 'https://photos.smugmug.com/photos/i-sSMnt4g/10/083a03dc/XL/i-sSMnt4g-XL.jpg',
        title: 'Upcoming Events',
        subtitle: 'See what events and activities are coming up soon in the Portland metro area.',
        callToAction: '<a class="btn btn-lg btn-primary" href="events/index.html">Events</a>'
    },
    {
        title: 'Learn about the SCA',
        subtitle: 'Read through some getting started articles to help you get started with your adventure in the Society for Creative Anachronism',
        callToAction: '<a class="btn btn-lg btn-primary" href="articles/index.html">Articles</a>'
    }
]);

let featuredLinks = new FeaturedLinks([
    {
        title: 'Three Mountains',
        img: '/img/three-mtns.gif',
        subtitle: 'Portland, Oregon and encompassing all of Multnomah and Clackamas counties.',
        callToAction: '<a class="btn btn-lg btn-primary" href="/articles/content/threeMountains.html" target="_blank">Learn More!</a>'
    },
    {
        title: 'Dragon\'s Mist',
        img: '/img/DragonsMistBranchof.gif',
        subtitle: 'Washington and Clatsop counties in Oregon.',
        callToAction: '<a class="btn btn-lg btn-primary" href="/articles/content/dragonsMist.html" target="_blank">Learn More!</a>'
    },
    {
        title: 'Stromgard',
        img: '/img/StromgardBranchof.gif',
        subtitle: 'Southwest Washington including Clark and Skamania counties',
        callToAction: '<a class="btn btn-lg btn-primary" href="/articles/content/stromgard.html" target="_blank">Learn More!</a>'
    }
]);

document.querySelector('main').prepend(carousel);
document.querySelector('main div.marketing').append(featuredLinks);