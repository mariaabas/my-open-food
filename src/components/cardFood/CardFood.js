import React from "react";
import { Card, CardContent, CardMedia, CardActions, Collapse, IconButton} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BasicFoodInformation from "../basicFoodInformation/BasicFoodInformation";
import ComplementFoodInformation from "../complementInformation/ComplementFoodInformation";
import clsx from 'clsx';
import { useStyleCardFood} from "./styles";


function CardFood(props) {

    const classes = useStyleCardFood();
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