import React from 'react';
import { Container, AppBar } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';

import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import ExportTable from './components/ExportTable/Exportf';
import Auth from './components/Auth/Auth';
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import useStyles from './components/Navbar/styles.js';
import customerrequest from './images/csrequest.png';
import CsHeader from './images/headingTextImage.png';
import Particles from 'react-particles-js';


const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const classes = useStyles();
  return (
    <BrowserRouter>
    <Header />
      <Container maxWidth="xl">
      
      
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Link to="/" className={classes.brandContainer}>
          <img component={Link} to="/" src={CsHeader} alt="icon" height="45px" />
          <img className={classes.image} src={customerrequest} alt="icon" height="45px" width="50px" />
        </Link>
      </AppBar>
      
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/posts" />} />
          <Route path="/posts" exact component={Home} />
          <Route path="/posts/search" exact component={Home} />
          <Route path="/posts/export" exact component={ExportTable} />
          <Route path="/posts/:id" exact component={PostDetails} />
          <Route path={['/creators/:name', '/tags/:name']} component={CreatorOrTag} />
          <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
        </Switch>
        
        
      </Container>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
