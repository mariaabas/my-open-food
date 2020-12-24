import React from 'react';
import './App.css';
import { Grid , AppBar, Toolbar }  from '@material-ui/core';
import CardFood from "./components/food/CardFood";
import HistorySearch from "./components/search/HistorySearch";
import {Alert, AlertTitle} from "@material-ui/lab";
import AppBarFood from "./components/appBar/AppBarFood";



function App() {

  const errorMessage = "No code or invalid code";
  const errorTitle = "Error"
  const [showError, setShowError ] = React.useState(false)
  const [ showCardFood, setShowCardFood ] = React.useState(false)
  const [ showHistorySearch, setShowHistorySearch ] = React.useState(false)
  const [foodInformation, setFoodInformation] = React.useState('')
  const [ foodsHistoryDetails, setFoodsHistoryDetails] = React.useState([]);


  function handleCallback(food) {
    setShowCardFood(true)
    setShowHistorySearch(true)
    setFoodInformation(food)
    var foodDetail = {
      imgUrl: food.imgUrl,
      name: food.productName
    }
    console.log(foodDetail.imgUrl + " " + foodDetail.name)
    foodsHistoryDetails.push(foodDetail)
  }

  function handleError(isShow) {
    setShowError(isShow)
  }
  return (
    <div>

      <AppBarFood handleCallbackAppBar = {(food) => handleCallback(food)}
                  handleErrorAppBar = {(isShow) => handleError(isShow)}></AppBarFood>
        { showError && <Alert severity="error">
          <AlertTitle>{errorTitle}</AlertTitle>
          {errorMessage}
        </Alert>
        }
      {<Grid container spacing={1} direction="column" alignItems="center" justify="center" style={{marginTop: 30}}>
        {showCardFood && <Grid> <CardFood food={foodInformation}/> </Grid>}
      </Grid>
      }

      {
        showHistorySearch &&
        <Grid direction="row" alignItems="right" justify="center" style={{ marginTop: 30 }}>
          <HistorySearch foodsDetails={foodsHistoryDetails}/>
        </Grid>
      }

    </div>
  );
}

export default App;
