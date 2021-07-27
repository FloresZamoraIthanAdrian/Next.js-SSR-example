import { useRouter } from "next/dist/client/router";
import Head from "next/dist/next-server/lib/head";

import Navbar from "../../Components/Navbar";

export default function post({ post }) {

    const router = useRouter();

    return (
        <div>
            <Head>
                <title>Post #{router.query.post} </title>
            </Head>
            <Navbar />
            <div className="m-4">
                <div className="m-4">
                    <h2 className="m-2">Title: {post.title} </h2>
                    <p className="m-2">Post ID: {post.id}</p>
                    <p className="m-2">User ID: {post.userId}</p>
                    <p className="m-2">{post.body}</p>
                </div>

            </div>



        </div>
    )
}

export async function getServerSideProps({ params }) {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.post}`);
    const post = await res.json();

    return { props: { post }, notFound: false }

}
