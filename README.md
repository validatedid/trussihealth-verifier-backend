# TRUSSIHEALTH VERIFIER BACKEND

This repository contains the backend API for TruSSIHealth Verifier. It is developed with NestJS.
Follow the instructions belows to run it locally.

## Install

```bash
$ npm install
```


## Prepare env variables

Create `.env` file in the root directory and set the values provided in .env.example:
```
PORT=3050
BASE_PATH=/trussihealth-verifier
FRONTEND_BASE_URL=http://localhost:3000

# VIDconnect
OPENID_URL=https://labs.vidchain.net
OPENID_CLIENT_SECRET=
OPENID_CLIENT_ID=

# TrussiHealth API
OPENID_BASIC_AUTH=

# VIDchain API
VIDCHAIN_URL=
VIDCHAIN_API_KEY=
VIDCHAIN_ISS=
```

Notice that several values require having proper credentials to access TrussiHealth API, VIDconnect and VIDchain API. 
In case you do not have them yet, please contact [VIDchain support](mailto:support@vidchain.org).

## Run the app

```bash
$ npm run start
```
