#!/usr/bin/env node
"use strict";

var fs = require('fs'),
	path = require('path');

var config = `{
    "compilerOptions": {
        "module": "commonjs",
        "removeComments": true,
        "target": "es2015",
        "sourceMap": true,
        "jsx": "react"
    },
    "exclude": [
        "node_modules"
    ]
}
`
var file = path.join(process.cwd(),'tsconfig.json');

fs.writeFile(file,config);