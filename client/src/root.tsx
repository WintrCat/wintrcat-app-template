import { Outlet, Scripts, ScrollRestoration } from "react-router";

function App() {
    return <html>
        <head>
            <title>The Best App</title>

            <link rel="icon" href="/favicon.ico"/>
        </head>

        <body>
            <Outlet/>

            <ScrollRestoration/>
            <Scripts/>
        </body>
    </html>;
}

export default App;