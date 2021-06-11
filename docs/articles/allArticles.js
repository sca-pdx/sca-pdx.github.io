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
    })
];

export const ALL_ARTICLES = articles.reduce((acc, a) => {
    acc[a.getLink().id] = a;
    return acc;
}, {});