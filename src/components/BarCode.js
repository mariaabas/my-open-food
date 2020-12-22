import React from 'react'
import { TextField, Grid, Button } from "@material-ui/core";
import Search from '@material-ui/icons/Search';
import axios from "axios";


function BarCode() {

    const url = " https://world.openfoodfacts.org/api/v0/product/"
    const textButton = 'Search';
    const textError = 'Only numbers'
    const [ codiDeBarres, setCodiDeBarres ] = React.useState('');
    const error = codiDeBarres === /^[0-9\b]+$/;

    function cridaApi(code) {
        axios.get(url + code +'.json')
            .then(resposta => console.log(resposta))
            .catch((error) => console.log(error))
    }

    return (
        <Grid>
            <TextField id="bar-code"
                       label="BarCode"
                       variant="outlined"
                       value={codiDeBarres}
                       onChange={(code) => setCodiDeBarres(code.target.value)}
                       helperText={textError}
                       error={error}
            ></TextField>
        <Button variant="contained" color="primary" onClick={() => cridaApi(codiDeBarres)}>{textButton}</Button>
        </Grid>
    )
}

export default BarCode;