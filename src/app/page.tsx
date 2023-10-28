"use client";

import MyCardGrid from "@/components/cardGrid.components";
import { useEffect, useState } from "react";
import { PhotosType } from "../types/PhotosType";
import { PostType } from "../types/PostType";
import MyCard from "@/components/card.component";

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
    }

    useEffect(() => {
        getDataFetching();
    }, []);

    return (
        <>
            <h1>Data Fecthing</h1>
            <MyCardGrid posts={posts} photos={photos}>
                <MyCard />
            </MyCardGrid>
        </>
    );
}
