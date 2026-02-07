## WintrCat App Template

my random template for making websites<br>
this is mostly just for me but do whatever you want

### Tech Stack

- pnpm
- typescript
- react
- react router *(for SSR)*
- express.js *(with cluster)*

### Usage

`git clone https://github.com/wintrcat/wintrcat-app-template .`<br>
`rm -r .git`

#### Scripts

- `pnpm dev` - start frontend dev server with HMR and stuff
- `pnpm [-F <client/server>] build` - build for production
- `pnpm start` - start server

#### Environment Variables

Stored in `.env` in the root directory:

- `ORIGIN` - origin for production server e.g. `http://localhost:8080`
- `DEV_ORIGIN` - origin for dev server e.g. `http://localhost:3000`
- `THREADS` *(optional)* - number of threads to run server on. defaults to number of available cores