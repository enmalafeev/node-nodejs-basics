import { rename as fsRename, access } from 'fs/promises';

const rename = async () => {
    const oldPath = 'src/fs/files/wrongFilename.txt';
    const newPath = 'src/fs/files/properFilename.md';
    try {
        await Promise.allSettled([access(oldPath), access(newPath)]);
        await fsRename(oldPath, newPath);
    } catch (err) {
        console.error('FS operation failed');
    }
};

await rename();