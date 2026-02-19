import {
    Outlet,
    Scripts,
    ScrollRestoration,
    Meta,
    Links
} from "react-router";

function App() {
    return <html>
        <head>
            <title>The Best App</title>

            <link rel="icon" href="/favicon.ico"/>

            <Meta/>
            <Links/>
        </head>

        <body>
            <Outlet/>

            <ScrollRestoration/>
            <Scripts/>
        </body>
    </html>;
}

export default App;