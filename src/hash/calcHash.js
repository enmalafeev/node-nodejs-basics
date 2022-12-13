import { createHash } from 'node:crypto';
import { readFile } from 'fs/promises';

const calculateHash = async () => {
    try {
        const path = 'src/hash/files/fileToCalculateHashFor.txt';
        const content = await readFile(path, { encoding: 'utf8', flag: 'r' });
        const hash = createHash('sha256').update(content).digest('hex');
        console.log(hash);
    } catch (err) {
        console.error(err);
    }
};

await calculateHash();