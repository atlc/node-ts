import * as fs from 'fs';
import * as path from 'path';
import * as rp from 'request-promise';

const articleStore: string = path.join(__dirname, 'popular-articles.json');
let articles: {title: string, url: string, author: string}[] = [];

rp('https://reddit.com/r/popular.json')
    .then((data: Buffer) => {
        let posts = JSON.parse(data.toString()).data.children;
        posts.forEach(p => articles.push({ "title": p.data.title, "url": p.data.url, "author": p.data.author}));
    })
    .then(() => fs.writeFileSync(articleStore, JSON.stringify(articles)))
    .catch((err: Error) => console.log(err));