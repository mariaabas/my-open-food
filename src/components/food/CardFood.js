import React from "react";
import { makeStyles, Card, CardContent, Typography, CardMedia, CardActions, Collapse, IconButton} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BasicFoodInformation from "./BasicFoodInformation";
import ComplementFoodInformation from "./ComplementFoodInformation";
import clsx from 'clsx';

const useStyle = makeStyles((theme) => ({
    root: {
        maxWidth: 500
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        marginTop:'30'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));

function CardFood(props) {

    const classes = useStyle();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media}
                       image={props.food.imgUrl}
            />
            <CardContent>
                <BasicFoodInformation foodInformation = {props.food} />
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <ComplementFoodInformation foodInformation = {props.food} />
                </CardContent>
            </Collapse>
        </Card>
    )
}

export default CardFood;