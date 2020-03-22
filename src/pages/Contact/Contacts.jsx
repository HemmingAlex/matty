import React, { Component } from 'react';

import Map from "../LandingPage/SimpleMap.jsx";
import Ex from "../LandingPage/Example.jsx";


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
          color="dark"
          routes={dashboardRoutes}
          brand="Buckland Burgers"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "warning"
          }}
          {...rest}
        />
                
<br/>
<br/>
<br/>
<br/>
<br/>
<h1> Where to find us</h1>
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
    
    <Ex/>
<br/>
<br/>
<br/><h2>Contact</h2>
<br/>
<br/>
Stephen Brand
<br/>
<br/>
bucklandburgers@gmail.com
<br/>
<br/>
07572 416745

<br/>
<br/>
Designed By Maverick Media
<br/>


facebook comments:

<div class="fb-post" data-href="https://www.facebook.com/chris.yates.79/posts/10102216328134382" data-width="500" data-show-text="true"><blockquote cite="https://developers.facebook.com/chris.yates.79/posts/10102216328134382" class="fb-xfbml-parse-ignore"><p>We used Buckland for a corporate event in Bristol, the food was delicious and the service great. We were all impressed and would certainly recommend! Thanks</p>Posted by <a href="#" role="button">Chris Yates</a> on&nbsp;<a href="https://developers.facebook.com/chris.yates.79/posts/10102216328134382">Thursday, 13 February 2020</a></blockquote></div>



            <Footer/>
        </div>
        )
    }
}

export default withStyles(landingPageStyle)(Contacts);