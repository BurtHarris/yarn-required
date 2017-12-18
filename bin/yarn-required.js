#!/usr/bin/env node
const process = require('process');
const npmlog = require('npmlog')
const exepath = process.env.npm_execpath;

if (exepath && exepath.includes('yarn')) return 0;

npmlog.error("error - this script must be run from within yarn!");
if (exepath) npmlog.info('npm_execpath: ', exepath);
process.exit(1);