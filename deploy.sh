#!/usr/bin/env bash

# Make sure we're in a good state.
rm -rf dist
ember build --environment production
git add .
git commit -am "update dist"

# Move to the "release" branch and make everything work.
git checkout gh-pages
git pull origin gh-pages
git merge master
ls -1 | grep -v -E '^dist$' | xargs rm -rf
mv dist/* ./
mv dist/.* ./
rmdir dist

# Add everything and push it.
git commit -am "Update."
git push origin gh-pages
git checkout master
./install.sh