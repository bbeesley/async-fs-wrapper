import * as fs from '../main';

describe('async-fs-wrapper', () => {
    describe('asyncReadFile', () => {
        it('reads in a file', async () => {
            const pack = (await fs.asyncReadFile('./package.json')).toString();
            expect(JSON.parse(pack).name).toEqual('async-fs-wrapper');
        });
    });
    describe('asyncWriteFile', () => {
        it('writes a file', async () => {
            await fs.asyncWriteFile('./asyncWriteFile.test.output', 'foo');
            const res = await fs.asyncReadFile('./asyncWriteFile.test.output');
            expect(res.toString()).toEqual('foo');
        });
    });
    describe('asyncReaddir', () => {
        it('reads a dir', async () => {
            const res = await fs.asyncReaddir('./');
            expect(res.includes('package.json')).toBeTruthy();
        });
    });
    describe('asyncCopyFile', () => {
        it('copies a file', async () => {
            const res = await fs.asyncCopyFile('./package.json', './asyncCopyFile.test.output');
            const pack = (await fs.asyncReadFile('./asyncCopyFile.test.output')).toString();
            expect(JSON.parse(pack).name).toEqual('async-fs-wrapper');
        });
    });
});
