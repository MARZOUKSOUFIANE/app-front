import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Container from '@material-ui/core/Container';
import AppHeader from './containers/AppHeader';
import Copyight from './components/Copyight'
import classes from './App.module.css'
import AppSideBar from './containers/AppSideBar';
import MainLayout from './containers/MainLayout';
import './App.css';



function App() {
  return (
      <Router>
      <div className={classes.root}>

        <AppHeader />
        <AppSideBar/>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <MainLayout />
            <Copyight/>
          </Container>
        </main> 
      </div>
    </Router>
  );
}

export default App;
