import React from 'react'
import { TextField, Button, FormGroup} from "@material-ui/core";
import axios from "axios";


function BarCode(props) {

    const url = " https://world.openfoodfacts.org/api/v0/product/"
    const textButton = 'Search';
    const [ codiDeBarres, setCodiDeBarres ] = React.useState('');
    const validation = codiDeBarres === /^[0-9\b]+$/;

    function cridaApi(code) {
        axios.get(url + code +'.json')
            .then(response => {
                var food = {
                    imgUrl: response.data.product.image_front_url,
                    productName: response.data.product.product_name,
                    productBrand: response.data.product.brand_owner,
                    ingredients: response.data.product.ingredients_text,
                    nutrients: [
                        // { name: "Energy value", value: response.data.product.nutriments.energy_kcal_100g, target: "kcal"},
                        { name: "Fat", value: response.data.product.nutriments.fat_100g, target: "g"},
                        // { name: "Saturated fat", value: response.data.product.nutriments.saturated-fat, target: "g" },
                        { name: "Carbohydrates", value: response.data.product.nutriments.carbohydrates_100g, target: "g" },
                        { name: "Sugars", value: response.data.product.nutriments.sugars_100g, target: "g"},
                        { name: "Fiber", value: response.data.product.nutriments.fiber_100g, target: "g" },
                        { name: "Proteins", value: response.data.product.nutriments.proteins_100g, target: "g" },
                        { name: "Salt", value: response.data.product.nutriments.salt_100g, target: "g" },
                    ]
                }
                props.onFoodInformation(food)
            })
            .catch((error) => console.log(error))
    }

    return (
        <FormGroup row={true}>
            <TextField id="bar-code"
                       label="BarCode"
                       variant="outlined"
                       value={codiDeBarres}
                       onChange={(code) => setCodiDeBarres(code.target.value)}
                       error={validation}
            ></TextField>
            <Button variant="contained" color="primary" onClick={() => cridaApi(codiDeBarres)}>{textButton}</Button>
        </FormGroup>
    )
}

export default BarCode;