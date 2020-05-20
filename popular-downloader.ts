import * as fs from 'fs';
import * as path from 'path';
import * as rp from 'request-promise';

const downloadsDir: string = path.join(__dirname, 'downloads');
const validMediaFiletypes: string[] = ['.jpg', '.jpeg', '.png', '.gif'];


rp('https://reddit.com/r/popular.json')
    .then((data: Buffer) => {
        let posts = JSON.parse(data.toString()).data.children;
        posts.forEach(post => {
            let url = post.data.url;
            let filename = path.join(downloadsDir, `${post.data.name}${path.extname(url)}`);
            if (isMediaFile(url)) downloadFile(url, filename);
        });
    })
    .catch((err: Error) => console.log(err));


const isMediaFile = (url: string): boolean => validMediaFiletypes.includes(path.extname(url));
const downloadFile = (url: string, filename: string): void => rp(url).pipe(fs.createWriteStream(filename));