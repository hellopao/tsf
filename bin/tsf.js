#!/usr/bin/env node
"use strict";

var fs = require('fs'),
	path = require('path');

let config = {
    "compilerOptions": {
        "module": "commonjs",
        "removeComments": true,
		"target": "ES5",
		"experimentalAsyncFunctions": true,
        "sourceMap": true
    },
    "exclude": [
        "node_modules"
    ]
};

let file = path.join(process.cwd(),'tsconfig.json');

fs.writeFile(file,JSON.stringify(config));