import React from "react";
import {FormGroup, InputLabel, Typography, Grid, TableContainer, TableCell, Paper, Table, TableHead, TableRow, TableBody} from "@material-ui/core";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import AssignmentIcon from '@material-ui/icons/Assignment';


function ComplementFoodInformation(props) {

    const listIngredientsLabel = "Ingredients"
    const nutritionalInformationLabel = "Nutritional Information"
    const tableRowNameNutrient = "Nutrient"
    const tableRowNameValue = "Value"


    return (
        <form>
            <Grid container spacing={5} direction="row">
                <Grid item xs={12}>
                    <FormGroup row={true}>
                        <ShoppingBasketIcon/>
                        <InputLabel> {listIngredientsLabel}</InputLabel>
                    </FormGroup>
                    <Typography> {props.foodInformation.ingredients} </Typography>
                </Grid>
                <Grid item xs={12}>
                    <FormGroup row={true}>
                        <AssignmentIcon/>
                        <InputLabel>{nutritionalInformationLabel}</InputLabel>
                    </FormGroup>
                    <TableContainer component={Paper}>
                        <Table size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">{tableRowNameNutrient}</TableCell>
                                    <TableCell align="right">{tableRowNameValue}</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {props.foodInformation.nutrients.map((nutrient) => (
                                    <TableRow key={nutrient.name}>
                                        <TableCell component="th" scope="row">{nutrient.name}</TableCell>
                                        <TableCell align="right">{nutrient.value + nutrient.target}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </form>
    )
}

export default ComplementFoodInformation;