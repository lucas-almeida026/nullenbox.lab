import React from 'react'
import { mainStyles } from './main.style'

export default function Page({ title, titleTag, children, className }) {
    return (
        <html lang='en'>
            <head>
                <title>{title ? title : titleTag ? `Nullenbox - ${titleTag}` : 'Nullenbox'}</title>
                <meta charSet="UTF-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
                <link rel="shortcut icon" type="image/x-icon" href="./assets/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Merriweather+Sans:ital,wght@0,300..800;1,300..800&display=swap"
                    rel="stylesheet" />
                <style type="text/tailwindcss">{mainStyles}</style>
            </head>
            <body className={`bg-surface text-on-surface pt-24 font-msans text-lg ${className}`}>
                {children}
            </body>
        </html>
    )
}