import React, { Component } from 'react';

import Map from "../LandingPage/SimpleMap.jsx";
import Ex from "../LandingPage/burger bits/Example.jsx";


//style
import F from "../LandingPage/land.module.scss";


//route
import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";
import withStyles from "@material-ui/core/styles/withStyles";


//core
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

const dashboardRoutes = [];


class Contacts extends Component {
    render() {

        const { classes, ...rest } = this.props;

        return (
            <div> 
                <Header
          color="warning"
          routes={dashboardRoutes}
          brand="Buckland Burgers"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 90400,
            color: "warning"
          }}
          {...rest}
        />
                
<br/>
<br/>
<br/><h1> Stephen Brand</h1>
<br/>bucklandburgers@gmail.com

<br/>07572 416745

<br/>
<br/>


<h2> Where to find us</h2>
<br/>
<br/>

Harbourside Market
<br/>
<br/>
Expect to find us at South West markets, day events, 
<br/>
festivals and also private parties 
<br/>
from wedding street food to corporate catering.
<br/>

<br/>
<br/>
<br/>
                 <container>
        <Map className={F.map}/></container>
<br/>
<br/>
<br/>
<br/>
<br/>

<br/>
<br/>
<br/>
<br/>

<br/>
<br/>
<br/>






            <Footer/>
        </div>
        )
    }
}

export default withStyles(landingPageStyle)(Contacts);