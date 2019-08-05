#!/usr/bin/env bash

source .env

echo "Delete old export/clone if it exists"
rm -rf previous_out
rm -rf out

echo "Clone current gh-pages branch to out directory"
git clone git@github.com:orditeck/nevek.co.git --branch gh-pages previous_out

echo "Build"
npm run build

echo "Export"
npm run export

echo "Prepare git in new export's folder"
mkdir out/.git
cp -R previous_out/.git out

echo "Remove previously cloned gh-pages, we're done with it"
rm -rf previous_out

echo "Start preparing with the new export"
cd out

echo "Add GitHub related stuff"
touch .nojekyll
touch CNAME
echo "${GITHUB_CNAME}" >> CNAME
cp index.html 404.html

echo "Add, commit & push"
git add --all
git commit -m "Release at $(date)"
git push

echo "Delete export"
cd ..
rm -rf out

echo "Purge Cloudflare cache"
curl -X DELETE "https://api.cloudflare.com/client/v4/zones/${CLOUDFLARE_ZONE}/purge_cache" \
     -H "X-Auth-Email: ${CLOUDFLARE_AUTH_EMAIL}" \
     -H "X-Auth-Key: ${CLOUDFLARE_AUTH_KEY}" \
     -H "Content-Type: application/json" \
     --data '{"purge_everything":true}'
