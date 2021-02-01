## For local host (still makes queries to database)
1. clone repo
2. npm install or yarn
3. npm/yarn start (after all the amplify stuff)

## Installing amplify
1. npm install -g @aws-amplify/cli
2. amplify configure 
2.5 actually create user in aws console given from amplify configure, will be given api key and secret api key
3. amplify init
3.5 amplify add api, make schema and let it autogenerate
4. amplify push 
4.5 should see endpoint and API Key. Edit it into index.js if you want. Can now get aws-export.js from AWS console Appsync - download Config and put it into src/
5. amplify hosting add
6. amplify publish

Deployed here: https://dev.dito2k147se1f.amplifyapp.com/

## What is this
This project is a simple CRUD app with React, Apollo, GraphQL for a buildops coding challenge. You can see the demo deployed there. If the site crashes after inserting data, it is likely the API key has expired after 7 days and I would need to make a new one. Contact me, and I should be able to fix it.
