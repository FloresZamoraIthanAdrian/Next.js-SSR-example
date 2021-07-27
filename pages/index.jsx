import Head from "next/head";

import Navbar from "../Components/Navbar"

export default function index() {
    return (
        <div>
            <Head>
                <title>Aprendiendo con next</title>
            </Head>
            <Navbar />

            <div className="m-4">
                <h1>Home Page</h1>
                <p className = "fs-4">Aprendiendo NextJS :D</p>
            </div>

        </div>
    )
}
