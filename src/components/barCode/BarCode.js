import React from 'react'
import { InputAdornment, IconButton, OutlinedInput } from "@material-ui/core";
import axios from "axios";
import SearchIcon from "@material-ui/icons/Search";
import { useStylesBarCode } from "./styles";


function BarCode(props) {

    const searchPlaceholder = "Search bar code"
    const classes = useStylesBarCode();
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