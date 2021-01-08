#!/usr/bin/env node

import main from '../index.js';

console.log(main(Number(process.argv[process.argv.length - 1])));
