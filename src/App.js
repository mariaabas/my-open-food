import logo from './logo.svg';
import React from 'react';
import './App.css';
import { makeStyles, Container, Grid} from '@material-ui/core';
import BarCode from './components/BarCode.js';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
  container: {
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    minHeight: '100vh',
    flexDirection: 'column'
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
{/*      {<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>}
      </header> }*/}
{        <Container className={classes.container}>
              <BarCode />
          </Container> }

    </div>
  );
}

export default App;
