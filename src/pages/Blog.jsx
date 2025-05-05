import React from "react";
import Page from "../templates/main";

export default function Blog() {
    return (
        <Page titleTag="Blog" className="bg-surface text-on-surface font-msans w-full min-h-screen flex justify-center items-center">
            <main className="container mx-auto max-w-screen-xl px-4 flex flex-col items-center items-start md:items-center">
                <h1 className="font-bebas text-6xl text-on-surface">Blog is under construction</h1>
                <p className="text-2xl">Check back later for updates!</p>
            </main>
        </Page>
    )
}