#!/usr/bin/env bash

# Make sure we're in a good state.
git checkout master
git pull origin master
rm -rf dist
ember build --environment production

# Move to the "release" branch and make everything work.
git checkout gh-pages
git pull origin gh-pages
ls -1 | grep -v -E '^dist$' | xargs rm -rf
mv dist/* ./
mv dist/.* ./
rmdir dist

# Add everything and push it.
git commit -am "Update."
git push origin gh-pages
git checkout master
git pull origin master
./install.sh