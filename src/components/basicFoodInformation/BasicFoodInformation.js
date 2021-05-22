import React from "react";
import {InputLabel, FormGroup, Typography } from "@material-ui/core";

function BasicFoodInformation(props) {

    const productNameLabel = "Product Name";
    const brandLabel = "Brand"

    return (
        <form>
            <FormGroup spacing={5}>
                <InputLabel>{productNameLabel}</InputLabel>
                <Typography> {props.foodInformation.productName} </Typography>
            </FormGroup>
            <FormGroup >
                <InputLabel>{brandLabel}</InputLabel>
                <Typography>{props.foodInformation.productBrand}</Typography>
            </FormGroup>
        </form>
    )

}

export default BasicFoodInformation;