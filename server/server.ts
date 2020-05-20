import * as fs from 'fs';
import * as path from 'path';

const projectRoot: string = path.join(__dirname, '..');
const chirpStore: string = path.join(projectRoot, 'chirps.json');

const chirps: { id: number, username: string, github: string, name: string, datetime: number, chirpText: string }[] = [
    {
        "id": 1,
        "username": "atlc",
        "github": "https://github.com/atlc",
        "name": "Andrew Cartwright",
        "datetime": 1590005884,
        "chirpText": "Hello, hello, hello?"
    },
    {
        "id": 2,
        "username": "atlc",
        "github": "https://github.com/atlc",
        "name": "Andrew Cartwright",
        "datetime": 1590005974,
        "chirpText": "Is there anybody in there?"
    },
    {
        "id": 3,
        "username": "atlc",
        "github": "https://github.com/atlc",
        "name": "Andrew Cartwright",
        "datetime": 1590006053,
        "chirpText": "Just nod if you can hear me"
    },
    {
        "id": 4,
        "username": "atlc",
        "github": "https://github.com/atlc",
        "name": "Andrew Cartwright",
        "datetime": 1590006272,
        "chirpText": "Is there anyone at home?"
    },
    {
        "id": 5,
        "username": "atlc",
        "github": "https://github.com/atlc",
        "name": "Andrew Cartwright",
        "datetime": 1590006949,
        "chirpText": "Of all the creatures in the sea, my favorite is the bass \n It climbs up all the rocks and trees \n And slides down on its hands and knees \n But why does the shark have teeth? \n The shark has teeth to eat, I see \n And why does the whale have feet? \n Well it, I don't know"
    }
]

fs.writeFileSync(chirpStore, JSON.stringify(chirps));

let readableChirps: string = fs.readFileSync(chirpStore).toString();

console.log(JSON.parse(readableChirps));