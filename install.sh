#!/usr/bin/env bash

rm -rf vendor node_modules tmp
npm install
bower install
git checkout -f  vendor
rm .gitkeep
