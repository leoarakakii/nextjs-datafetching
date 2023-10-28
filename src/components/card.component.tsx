import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from "@mui/material";

type Props = {
	index?: number;
	title?: string;
	description?: string
	thumbnailUrl?: string;
	photoAlt?: string;
}

export default function MyCard(props: Props) {
	return (
        <Grid item xs={12} sm={6} md={3} key={props.index} sx={{}}>
            <Card sx={{height: "100%", padding: "2px"}}>
                <CardActionArea sx={{height: "100%", padding: "5px"}}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={props.thumbnailUrl}
                        alt={props.photoAlt}
                    />
                    <CardContent sx={{height: "100%"}}>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}