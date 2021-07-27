import { useEffect, useState } from "react";
import Link from "next/link";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Head from "next/dist/next-server/lib/head"
import Navbar from "../../Components/Navbar"

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 300,
        margin: 16,
        display: 'inline',
        float: 'left'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function Posts({ posts }) {

    const classes = useStyles();

    return (
        <div>
            <Head>
                <title>Posts - Inicio</title>
            </Head>
            <Navbar />
            <div className="m-4">
                <h1>Posts page O-O</h1>
            </div>
            <div className="m-4">

                {
                    !posts ? "Cargando..." :
                        posts.map(post => {
                            return <div key={post.id}>
                                <Card className={classes.root} variant="outlined">
                                    <CardContent>
                                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                                            Post ID: {post.id}
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                            {post.title}
                                        </Typography>
                                        <Typography className={classes.pos} color="textSecondary">
                                            User ID: {post.userId}
                                        </Typography>
                                        <Typography variant="body2" component="p">
                                            {post.body}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Link href={'/Posts/[post]'} as={`/Posts/${post.id}`} >
                                            <Button color={"secondary"} variant="outlined">More information</Button>
                                        </Link>
                                    </CardActions>
                                </Card>
                            </div>
                        })
                }
            </div>

        </div>
    )
}

export async function getServerSideProps() {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const posts = await res.json();
    return { props: { posts }, notFound: false }

}

