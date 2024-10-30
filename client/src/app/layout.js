'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './carousel.css';
import './globals.css';
import Script from 'next/script';

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-bs-theme="light" suppressHydrationWarning>
        <head>
            <Script src="/color-modes.js" strategy="afterInteractive"  crossOrigin="anonymous" />
            <title>lee</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="theme-color" content="#712cf9" />
        </head>
        <body>{children}</body>
        </html>
    );
}
