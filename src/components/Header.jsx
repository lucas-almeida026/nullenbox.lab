import React from 'react';

export default function Header() {
    return (
        <header className="width-full h-24 bg-primary
        flex items-center justify-between fixed top-0 left-0 right-0 z-10 sc
        shadow-md">
            <div className="container mx-auto h-full max-w-screen-xl px-4
            flex items-center justify-center sm:justify-between">
                <div className="flex items-center w-min-content">
                    <div className="w-20 h-20 flex items-center overflow-hidden">
                        <img className="w-full" src="./assets/nullenbox-logo.png" alt="" />
                    </div>
                    <h1 className="font-bebas text-5xl text-on-surface">
                        Nullenbox
                    </h1>
                </div>
                <nav className="hidden items-center sm:flex">
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
            </div>
        </header>
    )
}