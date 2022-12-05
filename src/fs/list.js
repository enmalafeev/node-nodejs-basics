import { readdir, access } from 'fs/promises';

const list = async () => {
    const path = 'src/fs/files';
    try {
        await access(path);
        const files = await readdir(path);
        console.log(files)
    } catch (err) {
        console.error('FS operation failed');
    }
};

await list();