#!/bin/bash
1
if [ ! -d "node_modules" ]; then
  echo "First run, npm install..."
  npm install
  echo "Save package.json checksum"
  sum package.json > package.json.sum
fi

grep "`sum package.json`" package.json.sum
if test $? -ne 0
then
  echo "package.json has changed, run npm install..."
  npm install
  echo "Save new package.json checksum"
  sum package.json > package.json.sum
else
  echo "No changes in package.json"
fi

sails lift
