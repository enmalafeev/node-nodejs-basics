import { unlink } from 'fs/promises';

const remove = async () => {
    const pathToDelete = 'src/fs/files/fileToRemove.txt';
    try {
        await unlink(pathToDelete);
    } catch (err) {
        console.error('FS operation failed');
    }
};

await remove();