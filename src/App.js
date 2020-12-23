import React from 'react';
import './App.css';
import { Grid }  from '@material-ui/core';
import BarCode from './components/BarCode.js';
import CardFood from "./components/food/CardFood";


function App() {

  const [ showCardFood, setShowCardFood ] = React.useState(false)
  const [foodInformation, setFoodInformation] = React.useState('');

  function handleCallback(food) {
    setShowCardFood(true)
    setFoodInformation(food)
  }

  return (
    <div>
  { <Grid  container spacing={3} direction="row" alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
    {
      <Grid item xs={3}>
        <BarCode onFoodInformation = {(food) => handleCallback(food)}/>
      </Grid>
    }
    { showCardFood && <Grid> <CardFood food={foodInformation}/> </Grid>
  }
        </Grid>
  }
    </div>
  );
}

export default App;
