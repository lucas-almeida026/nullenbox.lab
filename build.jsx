import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { writeFileSync } from 'node:fs'
import Page from './src/templates/main.jsx'

const html = renderToStaticMarkup(
    Page({ title: 'Page Title2', child: <div>Test</div> })
)

writeFileSync('output.html', `<!DOCTYPE html>${html}`)
