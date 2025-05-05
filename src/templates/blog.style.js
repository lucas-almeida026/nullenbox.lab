export const blogStyle = `
@theme {
  --color-primary: #7935b8;
  --color-secondary: #e0732f;
  --color-contrast: #3d5940;
  --color-surface: #222;
  --color-on-surface: #f0f0f0;
}

@layer utilities {
    .font-bebas {
        font-family: 'Bebas Neue', cursive;
    }
    .font-msans {
        font-family: 'Merriweather Sans', sans-serif;
        font-optical-sizing: auto;
    }
}

main h1 {
	font-size: 2.5em;
	font-weight: 900;
	margin-top: 8px;
	margin-bottom: 8px;
	text-align: center;
	color: var(--color-on-surface);
}

main h2 {
	font-size: 2em;
	font-weight: 800;
	margin-top: 32px;
	margin-bottom: 6px;
	color: var(--color-on-surface);
}

main h3,
main h4,
main h5,
main h6 {
	font-weight: 600;
	margin-top: 28px;
	margin-bottom: 4px;
	color: var(--color-on-surface);
}

main h3 {
	font-size: 1.7em;
}

main h4 {
	font-size: 1.5em;
}

main h5 {
	font-size: 1.35em;
}

main h6 {
	font-size: 1.25em;
}

main p {
	margin: 18px 0;
	line-height: 1.6;
}

main p,
main span,
main li,
main td,
main th {
	font-size: 1.1em;
    color: #ddd;
}

main a {
	font-size: 1.1em;
    text-decoration: underline;
}

main ul {
    list-style-type: disc;
    margin-left: 24px;
}

main ol {
    list-style-type: decimal;
    margin-left: 24px;
}

main li {
	margin-left: 36px;
}

main hr {
	margin-bottom: 24px;
	margin-top: 12px;
}

main table {
	width: 100%;
	border-collapse: collapse;
	margin: 20px 0;
	font-size: 1em;
	text-align: left;
	background-color: var(--table-bg-color);
	border: 1px solid var(--color-secondary);
}

main th,
main td {
	padding: 12px 15px;
	border: 1px solid var(--color-secondary);
}

main th {
	background-color: var(--table-bg-color);
	color: var(--color-on-surface);
	font-weight: bold;
}

main tr:nth-child(odd) {
	background-color: var(--table-row-alt-color);
}

main tr:hover {
	background-color: var(--table-row-hover-color);
}

main code {
	font-size: 1em !important;
	font-family: 'Courier New', Courier, monospace;
	padding: 2px 4px;
	border-radius: 3px;
}

main pre,
main code {
	tab-size: 4;
	-moz-tab-size: 4;
	-o-tab-size: 4;
}

.hljs {
	display: block;
	overflow-x: auto;
	padding: 0.5em;
	background: #282a36;
	color: #f8f8f2;
}

.hljs-built_in {
	color: #b57614;
}

.hljs-section,
.hljs-link {
	color: #458588;
}

.hljs-keyword {
	color: #d65d0e;
}

.hljs,
.hljs-tag,
.hljs-name,
.hljs-punctuation,
.hljs-subst,
.hljs-variable.language_ {
	color: #f8f8f2 !important;
}

.hljs-title,
.hljs-attr,
.hljs-selector-tag,
.hljs-meta-keyword,
.hljs-operator,
.hljs-name.function_ {
	font-style: italic;
	color: #689d6a;
}

.hljs-string,
.hljs-meta,
.hljs-type,
.hljs-symbol,
.hljs-bullet,
.hljs-addition,
.hljs-variable,
.hljs-template-tag,
.hljs-template-variable {
	color: #98871a;
}

.hljs-comment,
.hljs-quote,
.hljs-deletion {
	color: #458588;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-literal,
.hljs-title,
.hljs-section,
.hljs-doctag,
.hljs-type,
.hljs-strong {
	font-weight: bold;
}

.hljs-literal,
.hljs-number {
	color: #8f3f71;
}

.hljs-emphasis {
	font-style: italic;
}

a {
	text-decoration: underline;
}`