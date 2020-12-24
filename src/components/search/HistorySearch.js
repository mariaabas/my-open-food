import React from "react";
import {GridList, GridListTile, GridListTileBar, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

function HistorySearch(props) {

    const classes = useStyles();

    return (
        <div>
        <GridList className={classes.gridList} cols={9.5}>
            {props.foodsDetails.map((food) => (
                <GridListTile key={food.name}>
                    <img src={food.imgUrl} alt={food.name} />
                    <GridListTileBar
                        title={food.name}/>
                </GridListTile>
            ))}
        </GridList>
        </div>
    )
}

export default HistorySearch;