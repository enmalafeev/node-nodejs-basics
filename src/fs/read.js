import { readFile } from 'fs/promises';

const read = async () => {
    const path = 'src/fs/files/fileToRead.txt';
    try {
        const fileContent = await readFile(path, { encoding: 'utf8', flag: 'r' });
        console.log(fileContent);
    } catch (err) {
        console.error('FS operation failed');
    }
};

await read();