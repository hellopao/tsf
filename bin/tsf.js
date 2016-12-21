#!/usr/bin/env node
"use strict";

var fs = require('fs'),
	path = require('path');

var config = `{
    "compileOnSave": true,
    "compilerOptions": {
        "target": "es2015",
        "module": "es2015",
        "sourceMap": true,
        "watch": true,
        "moduleResolution": "node",
        "jsx": "react",
        "allowSyntheticDefaultImports": true
    },
    "exclude": [
        "node_modules"
    ]
}
`
var file = path.join(process.cwd(),'tsconfig.json');

fs.writeFileSync(file,config);