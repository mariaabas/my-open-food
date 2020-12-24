import React from 'react'
import { makeStyles, InputAdornment, IconButton, OutlinedInput } from "@material-ui/core";
import axios from "axios";
import SearchIcon from "@material-ui/icons/Search";
import {fade} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
        marginLeft: theme.spacing(2)
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(2, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

function BarCode(props) {

    const searchPlaceholder = "Search bar code"
    const classes = useStyles();
    const url = " https://world.openfoodfacts.org/api/v0/product/"
    const [ codiDeBarres, setCodiDeBarres ] = React.useState('');

    function cridaApi(code) {
        axios.get(url + code +'.json')
            .then(response => {
                if (response.data.status != 1) {
                    props.errorNoCode(true)
                } else {
                    props.errorNoCode(false)
                    var food = {
                        imgUrl: response.data.product.image_front_url,
                        productName: response.data.product.product_name,
                        productBrand: response.data.product.brand_owner,
                        ingredients: response.data.product.ingredients_text,
                        nutrients: [
                            { name: "Energy value", value: response.data.product.nutriments["energy-kcal_100g"], target: "kcal"},
                            { name: "Fat", value: response.data.product.nutriments.fat_100g, target: "g"},
                            { name: "Saturated fat", value: response.data.product.nutriments["saturated-fat"], target: "g" },
                            { name: "Carbohydrates", value: response.data.product.nutriments.carbohydrates_100g, target: "g" },
                            { name: "Sugars", value: response.data.product.nutriments.sugars_100g, target: "g"},
                            { name: "Fiber", value: response.data.product.nutriments.fiber_100g, target: "g" },
                            { name: "Proteins", value: response.data.product.nutriments.proteins_100g, target: "g" },
                            { name: "Salt", value: response.data.product.nutriments.salt_100g, target: "g" },
                        ]
                    }
                    props.onFoodInformation(food)
                }

            })
            .catch((error) => console.log(error))
    }

    return (

        <div className={classes.search}>
            <OutlinedInput
                id="bar-code"
                value={codiDeBarres}
                onChange={(code) => setCodiDeBarres(code.target.value)}
                placeholder={searchPlaceholder}
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => cridaApi(codiDeBarres)}
                                >
                                    <SearchIcon />
                            </IconButton>

                        </InputAdornment>
                }
            />
        </div>
    )
}

export default BarCode;