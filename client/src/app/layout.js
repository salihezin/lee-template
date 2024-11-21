'use client';

import React from "react";
import BodyInner from "../techsoft/templates/BodyInner";

export default function RootLayout({children}) {

    return (
        <html>
        <head>
            <title>LEE</title>
            <meta name="format-detection" content="telephone=no"/>
            <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta charSet="utf-8"/>
            <link href={"/techSoft/favicon.ico"} rel="icon"/>
            <link rel="stylesheet" href={"//fonts.googleapis.com/css?family=Lato:400,700%7CSpace+Mono"}/>
            <link rel="stylesheet" href={"/techSoft/css/bootstrap.css"}/>
            <link rel="stylesheet" href={"/techSoft/css/fonts.css"}/>
            <link rel="stylesheet" href={"/techSoft/css/style.css"}/>
        </head>
        <body>
        {children}
        </body>
        </html>

);
}

