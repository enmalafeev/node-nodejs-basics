import { cp, mkdir } from 'fs/promises';

const copy = async () => {
    const fromPath = 'src/fs/files';
    const toPath = 'src/fs/files_copy';
    try {
        await mkdir(toPath);
        await cp(fromPath, toPath, { errorOnExist: true, recursive: true });
    } catch (err) {
        console.error('FS operation failed');
    }
};

await copy();