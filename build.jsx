import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import fs from 'node:fs/promises'

const outputFolder = './';
const pages = await fs.readdir('./src/pages')

for (const page of pages) {
    const { default: Page } = await import(`./src/pages/${page}`)
    const html = renderToStaticMarkup(
        Page({ title: 'Page Title2', child: <div>Test</div> })
    )
    await fs.writeFile(`${outputFolder}/${snakeCaseFromPascalCase(page).replace('.jsx', '.html')}`, `<!DOCTYPE html>${html}`)
}

function snakeCaseFromPascalCase(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}
