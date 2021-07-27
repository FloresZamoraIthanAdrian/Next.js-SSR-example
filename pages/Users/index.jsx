import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Head from "next/dist/next-server/lib/head";

import Navbar from "../../Components/Navbar"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    display: 'inline',
    float: 'left',
    margin: 16
  },
});

export default function Users({ users }) {

  const classes = useStyles();

  return (
    <div>

      <Head>
        <title>Users - Inicio</title>
      </Head>

      <Navbar />

      <div className="m-4">
        <h1>Users Page</h1>
      </div>

      <div className="m-4">

        {
          !users ? "Cargando..." :
            users.map(user => {
              return <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt= ""
                    height="140"
                    image={user.avatar}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      User ID: {user.id}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Primer nombre: {user.first_name}
                      <br/>
                      Apellido: {user.last_name}
                      <br/>
                      Correo: {user.email}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            })
        }

      </div>

    </div>
  )
}

export async function getServerSideProps() {

  const res = await fetch(`https://reqres.in/api/users`);
  const users = await res.json();

  return { props: { users: users.data }, notFound: false };

}

