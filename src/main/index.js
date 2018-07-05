import { readFile, writeFile, readdir, copyFile } from 'fs';

/**
 * Reads a file asynchronously
 * @param {(string|Buffer|URL|number)}  pointer Path to the file to be read
 * @returns {Promise<(string|Buffer)>}  Resolves to the content of the file
 */
export const asyncReadFile = (pointer) =>
    new Promise((resolve, reject) =>
        readFile(pointer, (err, data) => (err ? reject(err) : resolve(data))));

/**
 * Writes a file asynchronously
 * @param {(string|Buffer|URL|number)}  pointer Path to the file to be written
 * @param {(string|Buffer|Uint8Array)}  content Content to write to the file
 * @returns {Promise<boolean>}                  Resolves with true if the write was successful
 */
export const asyncWriteFile = (pointer, content) =>
    new Promise((resolve, reject) =>
        writeFile(pointer, content, (err) => (err ? reject(err) : resolve(true))));

/**
 * Reads a directory asynchronously
 * @param {(string|Buffer|URL)}     path    The directory to list the contents of
 * @returns {Promise<(string[]|Buffer[])>}  Array of filenames
 */
export const asyncReaddir = (path) =>
    new Promise((resolve, reject) =>
        readdir(path, (err, files) => (err ? reject(err) : resolve(files))));

/**
 * Copy a file asynchronously
 * @param {(string|Buffer|URL)} from    The src file
 * @param {(string|Buffer|URL)} to      The dest file
 * @returns {Promise<boolean>}          Resolves with true if the copy is successful
 */
export const asyncCopyFile = (from, to) =>
    new Promise((resolve, reject) =>
        copyFile(from, to, (err) => (err ? reject(err) : resolve(true))));
