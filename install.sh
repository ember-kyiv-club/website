#!/usr/bin/env bash
rm .gitkeep
rm crossdomain.xml
rm index.html
rm robots.txt
rm -rf vendor node_modules tmp
npm install
bower install
git checkout -f  vendor

