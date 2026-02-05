## WintrCat App Template

my random template for making websites<br>
this is mostly just for me but do whatever you want

### Tech Stack

- pnpm
- typescript
- react
- react router v7 *(for SSR)*
- express.js

### Usage

`git clone https://github.com/wintrcat/wintrcat-app-template .`

#### Scripts

- `pnpm -F client dev` - starts the frontend dev server with HMR and stuff
- `pnpm [-F <client/server>] build` - build something for production
- `pnpm [-F <client/server>] start` - start production frontend server or backend server

#### Environment Variables

Stored in `.env` in the root directory:

- `FRONTEND_ORIGIN` - e.g. `http://localhost:3000`. port defaults to 3000 if this is not set
- `BACKEND_ORIGIN` - e.g. `http://localhost:8080`. port defaults to 8080 if this is not set
- `THREADS` *(optional)* - number of threads to run server on. defaults to number of available cores