import * as fs from '../main';

describe('async-fs-wrapper', () => {
  describe('asyncReadFile', () => {
    it('reads in a file', async () => {
      const pack = (await fs.asyncReadFile('./package.json')).toString();
      expect(JSON.parse(pack).name).toEqual('async-fs-wrapper');
    });
    it('throws if the file does not exist', async () => {
      let err;
      try {
        await fs.asyncReadFile('./pack.json');
      } catch (e) {
        err = e;
      }
      expect(err).toBeDefined();
    });
  });
  describe('asyncWriteFile', () => {
    it('writes a file', async () => {
      await fs.asyncWriteFile('./asyncWriteFile.test.output', 'foo');
      const res = await fs.asyncReadFile('./asyncWriteFile.test.output');
      expect(res.toString()).toEqual('foo');
    });
    it('throws if the path is not set', async () => {
      let err;
      try {
        await fs.asyncWriteFile(null, 'foo');
      } catch (e) {
        err = e;
      }
      expect(err).toBeDefined();
    });
  });
  describe('asyncReaddir', () => {
    it('reads a dir', async () => {
      const res = await fs.asyncReaddir('./');
      expect(res.includes('package.json')).toBeTruthy();
    });
    it('throws if the path does not exist', async () => {
      let err;
      try {
        await fs.asyncReaddir('foo');
      } catch (e) {
        err = e;
      }
      expect(err).toBeDefined();
    });
  });
  describe('asyncCopyFile', () => {
    it('copies a file using string paths', async () => {
      await fs.asyncCopyFile('./package.json', './asyncCopyFile.test.output');
      const pack = (
        await fs.asyncReadFile('./asyncCopyFile.test.output')
      ).toString();
      expect(JSON.parse(pack).name).toEqual('async-fs-wrapper');
    });
    it('copies a file using buffer paths', async () => {
      await fs.asyncCopyFile(
        Buffer.from('./package.json'),
        Buffer.from('./asyncCopyFileBuffer.test.output')
      );
      const pack = (
        await fs.asyncReadFile('./asyncCopyFileBuffer.test.output')
      ).toString();
      expect(JSON.parse(pack).name).toEqual('async-fs-wrapper');
    });
  });
  describe('asyncMkDir', () => {
    it('creates a directory', async () => {
      await fs.asyncMkDir('./foo.test.output');
      const res = await fs.asyncReaddir('./foo.test.output');
      expect(Array.isArray(res)).toBeTruthy();
    });
    it('throws if the path exists', async () => {
      let err;
      try {
        await fs.asyncMkDir('./foo.test.output');
      } catch (e) {
        err = e;
      }
      expect(err).toBeDefined();
    });
  });
  describe('asyncRmDir', () => {
    it('removes a directory', async () => {
      await fs.asyncMkDir('./asyncMkDir.test.output');
      let res = await fs.asyncReaddir('./');
      expect(res.includes('asyncMkDir.test.output')).toBeTruthy();
      await fs.asyncRmDir('./asyncMkDir.test.output');
      res = await fs.asyncReaddir('./');
      expect(res.includes('asyncMkDir.test.output')).toBeFalsy();
    });
    it('throws if the path does not exist', async () => {
      let err;
      try {
        await fs.asyncRmDir('./asyncMkDir.foo.test.output');
      } catch (e) {
        err = e;
      }
      expect(err).toBeDefined();
    });
  });
});
