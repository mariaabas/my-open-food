import React from 'react'
import { FormGroup, makeStyles, InputAdornment, IconButton, OutlinedInput, InputLabel } from "@material-ui/core";
import axios from "axios";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
        marginLeft: theme.spacing(5)
    },
}));

function BarCode(props) {

    const classes = useStyles();
    const url = " https://world.openfoodfacts.org/api/v0/product/"
    const [ codiDeBarres, setCodiDeBarres ] = React.useState('');
    const validation = codiDeBarres === /^[0-9\b]+$/;

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
        <FormGroup fullWidth className={classes.margin} row={true}>
            <InputLabel>Bar code</InputLabel>
            <OutlinedInput fullWidth id="bar-code"
                       label="BarCode"
                       variant="outlined"
                       value={codiDeBarres}
                       onChange={(code) => setCodiDeBarres(code.target.value)}
                       error={validation}
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
            ></OutlinedInput>
        </FormGroup>
    )
}

export default BarCode;