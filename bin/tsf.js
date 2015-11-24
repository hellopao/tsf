#!/usr/bin/env node
"use strict";

var fs = require('fs'),
	path = require('path');

let config = {
    "compilerOptions": {
        "module": "commonjs",
        "removeComments": true,
		"target": "ES5",
        "sourceMap": true,
        "jsx": "react"
    },
    "exclude": [
        "node_modules"
    ]
};

let file = path.join(process.cwd(),'tsconfig.json');

fs.writeFile(file,JSON.stringify(config));