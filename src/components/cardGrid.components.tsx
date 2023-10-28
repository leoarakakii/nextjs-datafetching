import { PhotosType } from "@/types/PhotosType";
import { PostType } from "@/types/PostType";
import { Grid } from "@mui/material";
import MyCard from "./card.component";
import React from "react";

type Props = {
    posts: PostType[];
	photos: PhotosType[];
	children: any
};

export default function MyCardGrid(props: Props) {

	return (
        <>
            <Grid container>
                {props.posts.map((post, index) => {
                    return React.cloneElement(props.children as React.ReactElement, {
                        index,
                        title: post.title,
                        description: post.body,
                        thumbnailUrl: props.photos[index].thumbnailUrl,
                        photoAlt: props.photos[index].title,
                        key: index,
                    });
                })}
            </Grid>
        </>
    );
}