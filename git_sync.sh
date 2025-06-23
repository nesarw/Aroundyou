#!/bin/bash

echo "Pulling latest changes from remote main branch..."
git pull origin main

if [ $? -ne 0 ]; then
  echo "Error: git pull failed. Please resolve conflicts manually."
  exit 1
fi

echo "Pushing local changes to remote main branch..."
git push -u origin main

if [ $? -ne 0 ]; then
  echo "Error: git push failed. Please check the error above."
  exit 1
fi

echo "Sync complete!" 