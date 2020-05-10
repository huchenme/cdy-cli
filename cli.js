#!/usr/bin/env node

'use strict';
const { exec } = require('child_process');
const updateNotifier = require('update-notifier');
const chalk = require('chalk');
const pkg = require('./package.json');

const args = process.argv.slice(2);
let folder = args[0];
let command = args.slice(1).join(' ');

updateNotifier({ pkg }).notify();

try {
  process.chdir(folder);
  console.log(
    `Executing ${chalk.blue(command)} in ${chalk.blue(folder)} folder...\n`
  );
  exec(command, (error, stdout, stderr) => {
    if (stdout) {
      process.stdout.write(stdout);
    }
    if (stderr) {
      process.stderr.write(`❌ ${chalk.red(stderr)}`);
    }
  });
} catch (err) {
  console.error(`❌ folder ${chalk.red(folder)} does not exists`);
}
