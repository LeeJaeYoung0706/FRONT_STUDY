> We have migrated the primary [`nextauthjs/next-auth-example`](https://github.com/nextauthjs/next-auth-example) repository to **TypeScript** and will be using that as our primary example repository going forward. **This repository is deprecated**.

<p align="center">
   <br/>
   <a href="https://next-auth.js.org" target="_blank"><img width="150px" src="https://next-auth.js.org/img/logo/logo-sm.png" /></a>
   <h3 align="center">NextAuth.js Typescript  <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" width="40" height="24" alt="TypeScript logo"/> Example App</h3>
   <p align="center">
   Open Source. Full Stack. Own Your Data.
   </p>
   <p align="center" style="align: center;">
      <a href="https://npm.im/next-auth">
        <img alt="npm" src="https://img.shields.io/npm/v/next-auth?color=green&label=next-auth">
      </a>
      <a href="https://bundlephobia.com/result?p=next-auth-typescript-example">
        <img src="https://img.shields.io/bundlephobia/minzip/next-auth?label=next-auth" alt="Bundle Size"/>
      </a>
      <a href="https://www.npmtrends.com/next-auth">
        <img src="https://img.shields.io/npm/dm/next-auth?label=next-auth%20downloads" alt="Downloads" />
      </a>
   </p>
</p>

## Overview

This is an example of how to use the [NextAuth.js](https://next-auth.js.org) library to add authentication to a [Next.js](https://nextjs.org) application with Typescript.

Check out the TypeScript [documentation](https://next-auth.js.org/getting-started/typescript).

This example application can be found under [`next-auth-typescript-example.vercel.app`](https://next-auth-typescript-example.vercel.app)

### About NextAuth.js

NextAuth.js is an easy to implement, full-stack (client/server) open source authentication library designed for [Next.js](https://nextjs.org) and [Serverless](https://vercel.com).

Go to [next-auth.js.org](https://next-auth.js.org) for more information and documentation.

> _NextAuth.js is not associated with Vercel or Next.js._

## Getting Started

### 1. Clone the repository and install dependancies

```
git clone https://github.com/nextauthjs/next-auth-typescript-example.git
cd next-auth-typescript-example
npm install
```

### 2. Configure your local environment

Copy the .env.local.example file in this directory to .env.local (which will be ignored by Git):

```
cp .env.local.example .env.local
```

Add details for one or more providers (e.g. Google, Twitter, GitHub, Email, etc).

#### Database

A database is needed to persist user accounts and to support email sign in. However, you can still use NextAuth.js for authentication without a database by using OAuth for authentication. If you do not specify a database, [JSON Web Tokens](https://jwt.io/introduction) will be enabled by default.

You **can** skip configuring a database and come back to it later if you want.

For more information about setting up a database, please check out the following links:

- Docs: [next-auth.js.org/adapters/overview](https://next-auth.js.org/adapters/overview)
- Adapters Repo: [nextauthjs/adapters](https://github.com/nextauthjs/adapters)

### 3. Configure Authentication Providers

- Review and update options in `pages/api/auth/[...nextauth].js` as needed.

- When setting up OAuth, in the developer admin page for each of your OAuth services, you should configure the callback URL to use a callback path of `{server}/api/auth/callback/{provider}`.

  e.g. For Google OAuth you would use: `http://localhost:3000/api/auth/callback/google`

  A list of configured providers and their callback URLs is available from the endpoint `/api/auth/providers`. You can find more information at https://next-auth.js.org/configuration/providers/oauth

- You can also choose to specify an **SMTP server** for passwordless sign in via email.

### 4. Start the application

To run your site locally, use:

```
npm run dev
```

To run it it production mode, use:

```
npm build
npm start
```

### 5. Preparing for Production

You must set the `NEXTAUTH_URL` environment variable with the URL of your site, before deploying to production.

e.g. in your `.env.local` file - `NEXTAUTH_URL=https://example.com`

To do this with Vercel, you can use the [Vercel project dashboard](https://vercel.com/dashboard) or their cli with the `vc env` command:

```
vc env add NEXTAUTH_URL production
```

Do not forget to set the environment variables for the Client ID and Client Secret values for all your configured authentication providers in your hosting providers dashboard, i.e. with Vercel as described above.

## Acknowledgements

<a href="https://vercel.com?utm_source=nextauthjs&utm_campaign=oss">
<img width="170px" src="https://raw.githubusercontent.com/nextauthjs/next-auth/canary/www/static/img/powered-by-vercel.svg" alt="Powered By Vercel" />
</a>
<p align="left">Thanks to Vercel sponsoring this project by allowing it to be deployed for free for the entire NextAuth.js Team</p>

## License

ISC
