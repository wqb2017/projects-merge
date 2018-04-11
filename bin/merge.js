#!/usr/bin/env node
var path = require('path')

var projectsPath = path.resolve(process.argv[2])
process.argv.splice(2, 1)
process.env.projectsPath = projectsPath

process.argv.push('--gulpfile', path.resolve(__dirname, '../gulpfile.js'))

require('gulp/bin/gulp')
