import React from 'react';
import Page from '../templates/main';
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Index() {
    return (
        <Page title='Nullenbox Lab'>
            <Header />
            <main className="w-full py-6">
                <div className="container mx-auto h-full max-w-screen-xl px-4">
                    <div className="w-full flex flex-col sm:flex-row items-center justify-center py-4">
                        <h2 className="font-bebas text-4xl text-center">Make It Work, Make It Right, Make It Fast</h2>
                        <span className="italic">&nbsp;&nbsp;&nbsp;&mdash;&nbsp;&nbsp;&nbsp;Kent Beck</span>
                    </div>
                    <div className="w-full my-12">
                        <h2 className="font-bebas text-3xl">ABOUT ME</h2>
                        <p>I'm Nullenbox. To me, programming is like solving a giant puzzle, and I love
                            that.
                            But that is only
                            half of what makes programming so satisfying to me, the other half is building tools that help other
                            people do great work.</p><br />
                        <p>This is my digital desk — a place for my projects, writings, and experiments.
                            You are much welcome!
                            😊
                        </p>
                    </div>
                    <div className="w-full mt-20 mb-12">
                        <h2 className="font-bebas text-3xl">NOW WORKIN ON...</h2>
                        <ul>
                            <li><b>BEL (Binary Edge List) file extention</b>: a toy program to learn more about TCP, binary
                                files and
                                graph databases
                            </li>
                            <li>
                                <b>Ln3</b>: a compiler for a toy programming language that I am designing
                            </li>
                        </ul>
                        <span className="text-sm text-on-surface/70 italic">Ps.: Links for these projects will be available
                            soon!</span>
                    </div>
                    <div className="w-full mt-20 mb-12">
                        <h2 className="font-bebas text-3xl">CURRENT INTERESTS</h2>
                        <ul className="ml-6 list-disc">
                            <li>
                                Programming
                                <ul className="ml-12 list-disc">
                                    <li>Compilers</li>
                                    <li>The Rust programming language</li>
                                    <li>Type-driven development</li>
                                    <li>Functional programming languages</li>
                                    <li>Recommendation systems</li>
                                </ul>
                            </li>
                            <li>Linguistics
                                <ul className="ml-12 list-disc">
                                    <li>Conlangs</li>
                                    <li>Evolution of words with same roots across different languages</li>
                                </ul>
                            </li>
                            <li>Math
                                <ul className="ml-12 list-disc">
                                    <li>Post Quantum Cryptography</li>
                                    <li>Zero Knowledge Proofs</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
            <Footer />
        </Page>
    )
}