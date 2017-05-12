#!/bin/bash

echo "Sketch Post Repo running"
echo "------------------------"

filename=$(echo $1 | cut -f 1 -d '.')

mkdir -p ./$(echo $filename)
unzip -o -a $1 -d ./$(echo $filename)

