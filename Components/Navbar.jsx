import React from 'react';
import Link from 'next/link';
import Head from 'next/dist/next-server/lib/head';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function Navbar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper className={classes.root}>

            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/lux/bootstrap.min.css" integrity="sha384-9+PGKSqjRdkeAU7Eu4nkJU8RFaH8ace8HGXnkiKMP9I9Te0GJ4/km3L1Z8tXigpG" crossorigin="anonymous" />
            </Head>

            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="secondary"
                centered
            >
                <Link href="/" >
                    <Tab label="Home" />
                </Link>

                <Link href="/Posts" >
                    <Tab label="Posts" />
                </Link>

                <Link href="/Users" >
                    <Tab label="Users" />
                </Link>

            </Tabs>
        </Paper>
    );
}

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});