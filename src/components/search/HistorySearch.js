import React from "react";
import {GridList, GridListTile, GridListTileBar } from "@material-ui/core";
import { useStylesHistorySearch} from "./styles";


function HistorySearch(props) {

    const classes = useStylesHistorySearch();

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