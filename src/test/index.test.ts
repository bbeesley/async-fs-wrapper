import * as fs from '../main';

describe('async-fs-wrapper', () => {
  describe('readFile', () => {
    it('reads in a file', async () => {
      const pack = (await fs.readFile('./package.json')).toString();
      expect(JSON.parse(pack).name).toEqual('async-fs-wrapper');
    });
    it('throws if the file does not exist', async () => {
      let err;
      try {
        await fs.readFile('./pack.json');
      } catch (e) {
        err = e;
      }
      expect(err).toBeDefined();
    });
  });
  describe('writeFile', () => {
    it('writes a file', async () => {
      await fs.writeFile('./asyncWriteFile.test.output', 'foo');
      const res = await fs.readFile('./asyncWriteFile.test.output');
      expect(res.toString()).toEqual('foo');
    });
    it('throws if the path is not set', async () => {
      let err;
      try {
        await fs.writeFile(null, 'foo');
      } catch (e) {
        err = e;
      }
      expect(err).toBeDefined();
    });
  });
  describe('unlink', () => {
    it('removes a file', async () => {
      await fs.writeFile('./asyncWriteFile.test.output', 'foo');
      let error;
      try {
        await fs.readFile('./asyncWriteFile.test.output');
      } catch (e) {
        error = e;
      }
      expect(error).toBeUndefined();
      await fs.unlink('./asyncWriteFile.test.output');
      try {
        await fs.readFile('./asyncWriteFile.test.output');
      } catch (e) {
        error = e;
      }
      expect(error).not.toBeUndefined();
    });
    it('throws if the path is not set', async () => {
      let err;
      try {
        await fs.unlink(null);
      } catch (e) {
        err = e;
      }
      expect(err).toBeDefined();
    });
  });
  describe('readdir', () => {
    it('reads a dir', async () => {
      const res = await fs.readdir('./');
      expect(res.includes('package.json')).toBeTruthy();
    });
    it('throws if the path does not exist', async () => {
      let err;
      try {
        await fs.readdir('foo');
      } catch (e) {
        err = e;
      }
      expect(err).toBeDefined();
    });
  });
  describe('copyFile', () => {
    it('copies a file using string paths', async () => {
      await fs.copyFile('./package.json', './asyncCopyFile.test.output');
      const pack = (
        await fs.readFile('./asyncCopyFile.test.output')
      ).toString();
      expect(JSON.parse(pack).name).toEqual('async-fs-wrapper');
    });
    it('copies a file using buffer paths', async () => {
      await fs.copyFile(
        Buffer.from('./package.json'),
        Buffer.from('./asyncCopyFileBuffer.test.output')
      );
      const pack = (
        await fs.readFile('./asyncCopyFileBuffer.test.output')
      ).toString();
      expect(JSON.parse(pack).name).toEqual('async-fs-wrapper');
    });
  });
  describe('mkdir', () => {
    it('creates a directory', async () => {
      await fs.mkdir('./foo.test.output');
      const res = await fs.readdir('./foo.test.output');
      expect(Array.isArray(res)).toBeTruthy();
    });
    it('throws if the path exists', async () => {
      let err;
      try {
        await fs.mkdir('./foo.test.output');
      } catch (e) {
        err = e;
      }
      expect(err).toBeDefined();
    });
  });
  describe('rmdir', () => {
    it('removes a directory', async () => {
      await fs.mkdir('./asyncMkDir.test.output');
      let res = await fs.readdir('./');
      expect(res.includes('asyncMkDir.test.output')).toBeTruthy();
      await fs.rmdir('./asyncMkDir.test.output');
      res = await fs.readdir('./');
      expect(res.includes('asyncMkDir.test.output')).toBeFalsy();
    });
    it('throws if the path does not exist', async () => {
      let err;
      try {
        await fs.rmdir('./asyncMkDir.foo.test.output');
      } catch (e) {
        err = e;
      }
      expect(err).toBeDefined();
    });
  });
  describe('access', () => {
    it('tests a file is accessible', async () => {
      let err;
      try {
        await fs.access('./package.json');
      } catch (e) {
        err = e;
      }
      expect(err).toBeUndefined();
    });
    it('throws if the file does not exist', async () => {
      let err;
      try {
        await fs.access('./packages.json');
      } catch (e) {
        err = e;
      }
      expect(err).toBeDefined();
    });
  });
});
