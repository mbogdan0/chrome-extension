#!/bin/bash

rm -rf ./prod-build
mkdir -p prod-build/frontend

cd frontend
npm run prod
cd ..

cp -R ./frontend/dist ./prod-build/frontend
cp -R ./extension ./prod-build
cp ./manifest.json ./prod-build


zip -r prod-build{.zip,}
rm -rf ./prod-build
