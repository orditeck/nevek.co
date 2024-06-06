#!/usr/bin/env bash

source .env

echo "Delete old build if it exists"
rm -rf dist prev_dist

echo "Clone gh-pages"
git clone https://github.com/orditeck/k11e.git --branch gh-pages prev_dist
cd prev_dist
git rm -rf .
git clean -fxd
cd ..

echo "Build"
yarn build
mv dist/* prev_dist
rm -rf dist
cd prev_dist

echo "Add GitHub related stuff"
touch .nojekyll CNAME
echo "${GITHUB_CNAME}" >> CNAME
cp index.html 404.html

echo "Add, commit & push"
git add --all
git commit -m "Release at $(date)"
git push

echo "Clean up"
cd ..
rm -rf prev_dist
