"use client";

import {Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {type} from "os";
import {useEffect, useState} from "react";

type PostType = {
    userId: number;
    id: number;
    title: string;
    body: string;
};
type PhotosType = {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
};

export default function Home() {
    const [posts, setPosts] = useState<PostType[]>([]);
    const [photos, setPhotos] = useState<PhotosType[]>([]);

    async function getDataFetching() {
        const postRequest = fetch("https://jsonplaceholder.typicode.com/posts");
        const photosRequest = fetch("https://jsonplaceholder.typicode.com/photos");

        const [postResponse, photosResponse] = await Promise.all([postRequest, photosRequest]);
        const postJson = await postResponse.json();
        const photosJson = await photosResponse.json();
        setPosts(postJson);
        setPhotos(photosJson);
        // return;
    }

    useEffect(() => {
        getDataFetching();
    }, []);

    function cardLayout(post: PostType, index: number) {
        return (
            <>
                <Grid item xs={12} sm={6} md={3} key={index} sx={{}}>
                    <Card sx={{height: "100%", padding: "2px"}}>
                        <CardActionArea sx={{height: "100%", padding: "5px"}}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={photos[index].thumbnailUrl}
                                alt={photos[index].title}
                            />
                            <CardContent sx={{height: "100%"}}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {post.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {post.body}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </>
        );
    }

    return (
        <>
            <h1>Data Fecthing</h1>
            <Grid container>
                {posts.map((post, index) => {
                    return cardLayout(post, index);
                })}
            </Grid>
        </>
    );
}
