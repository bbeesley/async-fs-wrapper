import { readFile, writeFile, readdir, copyFile } from 'fs';

type Path = string | Buffer;

/**
 * Reads a file asynchronously
 * @param {(string | Buffer)}  pointer Path to the file to be read
 * @returns {Promise<Buffer>}  Resolves to the content of the file
 */
export const asyncReadFile = (pointer: Path): Promise<Buffer> =>
  new Promise((resolve, reject) =>
    readFile(pointer, (err, data) => (err ? reject(err) : resolve(data)))
  );

/**
 * Writes a file asynchronously
 * @param {(string|Buffer)}  pointer Path to the file to be written
 * @param {(string|Buffer|Uint8Array)}  content Content to write to the file
 * @returns {Promise<void>}                  Resolves with true if the write was successful
 */
export const asyncWriteFile = (pointer: Path, content: any): Promise<void> =>
  new Promise((resolve, reject) =>
    writeFile(pointer, content, err => (err ? reject(err) : resolve()))
  );

/**
 * Reads a directory asynchronously
 * @param {(string|Buffer)}     path    The directory to list the contents of
 * @returns {Promise<string[]>}  Array of filenames
 */
export const asyncReaddir = (path: Path): Promise<string[]> =>
  new Promise((resolve, reject) =>
    readdir(path, (err, files) => (err ? reject(err) : resolve(files)))
  );

/**
 * Copy a file asynchronously
 * @param {(string|Buffer)} from    The src file
 * @param {(string|Buffer)} to      The dest file
 * @returns {Promise<void>}          Resolves with true if the copy is successful
 */
export const asyncCopyFile = (from: Path, to: Path): Promise<void> =>
  new Promise((resolve, reject) =>
    copyFile(from, to, err => (err ? reject(err) : resolve()))
  );

/**
 * Copy all files in one directory to another directory
 * @param {(string|Buffer)}  from    Input directory
 * @param {(string|Buffer)}  to      Output directory
 * @returns {Promise<void>} Resolves when the op is complete
 */
export const asyncCopyAllFilesInDir = async (
  from: Path,
  to: Path
): Promise<void> => {
  if (Buffer.isBuffer(from)) from = from.toString();
  if (Buffer.isBuffer(to)) to = to.toString();
  const inputDir = from.replace(/\/$/, '');
  const outputDir = to.replace(/\/$/, '');
  const rawFileNames = await asyncReaddir(inputDir);
  await Promise.all(
    rawFileNames.map(filename =>
      asyncCopyFile(`${inputDir}/${filename}`, `${outputDir}/${filename}`)
    )
  );
};
