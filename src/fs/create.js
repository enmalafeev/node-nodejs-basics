import { writeFile } from 'fs/promises';

const create = async () => {
    try {
        await writeFile('src/fs/files/fresh.txt', 'I am fresh and young', { flag: 'ax' });
    } catch (err) {
        console.error('FS operation failed');
    }
};

await create();