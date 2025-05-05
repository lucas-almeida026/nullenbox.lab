
import { renderToStaticMarkup } from 'react-dom/server'
import fs from 'node:fs/promises'

const outputFolder = './';
const pages = await fs.readdir('./src/pages')
const blogPosts = await fs.readdir('./src/posts')

for (const page of pages) {
    const { default: Page } = await import(`./src/pages/${page}`)
    const html = renderToStaticMarkup(
        Page()
    )
    await fs.writeFile(`${outputFolder}/${snakeCaseFromPascalCase(page).replace('.jsx', '.html')}`, `<!DOCTYPE html>${html}`)
}

// for (const post of blogPosts) {
//     const { default: BlogPage } = await import(`./src/posts/${post}`)
//     const html = renderToStaticMarkup(
//         BlogPage()
//     )
//     await fs.writeFile(`${outputFolder}/blog/${snakeCaseFromPascalCase(post).replace('.jsx', '.html')}`, `<!DOCTYPE html>${html}`)
// }

function snakeCaseFromPascalCase(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

// const html = renderToStaticMarkup(BlogPage({ postName: 'Test', children: `<div>test</div>`, className: 'test' }))
// await fs.writeFile(`${outputFolder}/blog/test.html`, `<!DOCTYPE html>${html}`)