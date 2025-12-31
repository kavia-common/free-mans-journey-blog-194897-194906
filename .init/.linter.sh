#!/bin/bash
cd /home/kavia/workspace/code-generation/free-mans-journey-blog-194897-194906/frontend_react
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

