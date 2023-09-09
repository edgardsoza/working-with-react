import { Card } from "@mui/material";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

const Characters = () => {
    const [character, setCharacter] = useState([])

    useEffect(() => {
        axios("https://rickandmortyapi.com/api/character")
            .then(res => setCharacter(res.data.results))
    }, [])

    console.log(character)

    return (
        <>
        <Typography variant="h2" color="primary" align="center">
            Characters
        </Typography>
        <div style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            padding: "20px"
        }}>
        {
            character.map((character) => {
                return (
                    <Card key={character.id} sx={{ width: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={character.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {character.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {character.status}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
                )
            })
        }
        </div>
        </>
    )
}

export default Characters