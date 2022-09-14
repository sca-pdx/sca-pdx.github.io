import {Article} from "./article.js";

const articles = [
    new Article({
        id: 'historyOfSCAInPortland',
        title: 'History of the SCA in Portland',
        subtitle: 'How did the current middle ages get started here?',
        contentPath: '/articles/content/historyOfSCAInPortland.html'
    }),
    new Article({
        id: 'firstPractice',
        title: 'Attending your first practice',
        subtitle: 'What to bring and what to expect',
        contentPath: '/articles/content/firstPractice.md'
    }),
    new Article({
        id: 'threeMountains',
        title: 'The Barony of Three Mountains',
        subtitle: 'Welcome to Portland',
        contentPath: '/articles/content/threeMountains.md'
    }),
    new Article({
        id: 'dragonsMist',
        title: 'The Barony of Dragon\'s Mist',
        subtitle: 'Portland to the Sea',
        contentPath: '/articles/content/dragonsMist.md'
    }),
    new Article({
        id: 'stromgard',
        title: 'The Barony of Stromgard',
        subtitle: 'Southwest Washington',
        contentPath: '/articles/content/stromgard.md'
    }),
];

export const ALL_ARTICLES = articles.reduce((acc, a) => {
    acc[a.getLink().id] = a;
    return acc;
}, {});