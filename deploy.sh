#!/usr/bin/env bash

source .env

echo "Delete old build if it exists"
rm -rf dist previous_build

echo "Clone gh-pages inside previous_build"
git clone https://github.com/orditeck/nevek.co.git --branch gh-pages previous_build

echo "Only keep .git, move it inside build, remove previous_build"
mkdir dist/.git
cp -R previous_build/.git dist
rm -rf previous_build

echo "Build"
yarn build
cd dist

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
rm -rf dist
