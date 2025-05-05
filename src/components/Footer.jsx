import React from 'react';

export default function Footer() {
    return (
        <footer className="w-full py-12">
            <div className="container mx-auto max-w-screen-xl px-8 flex flex-col md:flex-row items-center justify-between">
                <nav className="flex items-center sm:flex">
                    <ul className="flex items-center gap-4">
                        <li className="font-msans text-lg">
                            <a href="./blog.html">Blog</a>
                        </li>
                        <li className="font-msans text-lg">
                            <a href="./reading-list.html">Reading</a>
                        </li>
                        <li className="font-msans text-lg">
                            <a href="./projects.html">Projects</a>
                        </li>
                    </ul>
                </nav>
                <span className="text-sm text-on-surface/70 italic">No JS frameworks were harmed in the making of this
                    website <span className="not-italic">😜</span></span>
            </div>
        </footer>
    )
}