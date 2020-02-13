[![CircleCI](https://circleci.com/gh/bbeesley/async-fs.svg?style=svg)](https://circleci.com/gh/bbeesley/async-fs) [![codecov](https://codecov.io/gh/bbeesley/async-fs/branch/master/graph/badge.svg)](https://codecov.io/gh/bbeesley/async-fs) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

# async-fs-wrapper

## description

Async wrappers for node's filesystem module

## api

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [readFile](#readfile)
    -   [Parameters](#parameters)
-   [writeFile](#writefile)
    -   [Parameters](#parameters-1)
-   [readdir](#readdir)
    -   [Parameters](#parameters-2)
-   [copyFile](#copyfile)
    -   [Parameters](#parameters-3)
-   [copyAllFilesInDir](#copyallfilesindir)
    -   [Parameters](#parameters-4)
-   [mkdir](#mkdir)
    -   [Parameters](#parameters-5)
-   [rmdir](#rmdir)
    -   [Parameters](#parameters-6)
-   [access](#access)
    -   [Parameters](#parameters-7)
-   [unlink](#unlink)
    -   [Parameters](#parameters-8)

### readFile

[src/main/index.ts:33-36](https://github.com/bbeesley/async-fs/blob/8758a2dd919f2c1be3697d5cefb438d23faf0f92/src/main/index.ts#L33-L36 "Source code on GitHub")

Reads a file asynchronously

#### Parameters

-   `pointer` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Buffer](https://nodejs.org/api/buffer.html))** Path to the file to be read
-   `options` **ReadFileOptions**  (optional, default `{}`)

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Buffer](https://nodejs.org/api/buffer.html)>** Resolves to the content of the file

### writeFile

[src/main/index.ts:54-55](https://github.com/bbeesley/async-fs/blob/8758a2dd919f2c1be3697d5cefb438d23faf0f92/src/main/index.ts#L54-L55 "Source code on GitHub")

Writes a file asynchronously

#### Parameters

-   `pointer` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Buffer](https://nodejs.org/api/buffer.html))** Path to the file to be written
-   `content` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Buffer](https://nodejs.org/api/buffer.html) \| [Uint8Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array))** Content to write to the file

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;void>** Resolves with true if the write was successful

### readdir

[src/main/index.ts:75-75](https://github.com/bbeesley/async-fs/blob/8758a2dd919f2c1be3697d5cefb438d23faf0f92/src/main/index.ts#L75-L75 "Source code on GitHub")

Reads a directory asynchronously

#### Parameters

-   `path` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Buffer](https://nodejs.org/api/buffer.html))** The directory to list the contents of
-   `options` **ReadDirOptions** Options opject to pass to readdir (optional, default `{}`)

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>>** Array of filenames

### copyFile

[src/main/index.ts:97-98](https://github.com/bbeesley/async-fs/blob/8758a2dd919f2c1be3697d5cefb438d23faf0f92/src/main/index.ts#L97-L98 "Source code on GitHub")

Copy a file asynchronously

#### Parameters

-   `from` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Buffer](https://nodejs.org/api/buffer.html))** The src file
-   `to` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Buffer](https://nodejs.org/api/buffer.html))** The dest file

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;void>** Resolves with true if the copy is successful

### copyAllFilesInDir

[src/main/index.ts:106-120](https://github.com/bbeesley/async-fs/blob/8758a2dd919f2c1be3697d5cefb438d23faf0f92/src/main/index.ts#L106-L120 "Source code on GitHub")

Copy all files in one directory to another directory

#### Parameters

-   `from` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Buffer](https://nodejs.org/api/buffer.html))** Input directory
-   `to` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Buffer](https://nodejs.org/api/buffer.html))** Output directory

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;void>** Resolves when the op is complete

### mkdir

[src/main/index.ts:127-128](https://github.com/bbeesley/async-fs/blob/8758a2dd919f2c1be3697d5cefb438d23faf0f92/src/main/index.ts#L127-L128 "Source code on GitHub")

Create a directory

#### Parameters

-   `pointer` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Buffer](https://nodejs.org/api/buffer.html))** Path to the directory to create

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;void>** Resolves when the op is complete

### rmdir

[src/main/index.ts:135-136](https://github.com/bbeesley/async-fs/blob/8758a2dd919f2c1be3697d5cefb438d23faf0f92/src/main/index.ts#L135-L136 "Source code on GitHub")

Remove a directory

#### Parameters

-   `pointer` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Buffer](https://nodejs.org/api/buffer.html))** Path to the directory to remove

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;void>** Resolves when the op is complete

### access

[src/main/index.ts:144-145](https://github.com/bbeesley/async-fs/blob/8758a2dd919f2c1be3697d5cefb438d23faf0f92/src/main/index.ts#L144-L145 "Source code on GitHub")

Tests a user's permissions for the file or directory specified by pointer.

#### Parameters

-   `pointer` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Buffer](https://nodejs.org/api/buffer.html))** Path to the file to test
-   `mode` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)?** File access mode (optional, default `0`)

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;void>** 

### unlink

[src/main/index.ts:152-153](https://github.com/bbeesley/async-fs/blob/8758a2dd919f2c1be3697d5cefb438d23faf0f92/src/main/index.ts#L152-L153 "Source code on GitHub")

Asynchronously removes a file or symbolic link.

#### Parameters

-   `pointer` **Path** Path to the file to remove

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;void>** 
