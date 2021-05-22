import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import BarCode from "../barCode/BarCode";
import { useStylesAppBarFood } from "./styles";

function AppBarFood(props) {

    const titleApp = "Search food by bar code"
    const classes = useStylesAppBarFood();

    function handleCallback(food) {
       props.handleCallbackAppBar(food)
    }

    function handleError(isShow) {
        props.handleErrorAppBar(isShow)
    }

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>{titleApp}</Typography>
                    <BarCode onFoodInformation = {(food) => handleCallback(food)}
                                 errorNoCode = {(isShow) => handleError(isShow)}/>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default AppBarFood;