import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";


import Iframe from 'react-iframe';

import {Link } from "gatsby";
// @material-ui/icons

// React icons
import { FaPlay } from 'react-icons/fa';

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";


import Nav from "../Components/Sections/SectionTypography";

// additional plugins/ components
import Menue from "./burger bits/menue.jsx";
import Space  from "../../assets/TasteBurger.jpg";

import F from "./land.module.scss";


// Sections for this page
// import ProductSection from "./Sections/ProductSection.jsx";
// import TeamSection from "./Sections/TeamSection.jsx";
// import WorkSection from "./Sections/WorkSection.jsx";

const dashboardRoutes = [];

class LandingPage extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {


      change: "2"
       
    }
  }
  
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className={F.background}>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand={<div>Buckland Burgers</div>}
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white",
          }}
          {...rest}
        />
  <br/>
  <br/>
  <br/>
  <br/>

        <Parallax>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>
                  </h1> 
                <h4> 
                </h4>
                <br/>

                {/* <Button
                  color="danger"
                  size="lg"
                  href="https://www.youtube.com/watch?v=FKWZbIhJafQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaPlay/>
                  Watch video
                </Button> */}
              </GridItem>
            </GridContainer>
          </div>
         
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
  <br/>
  <br/>
          <div className={F.flex}><br/> 
<img className={F.images} src={Space}></img>    

{/* <Nav className={F.nav}/> */}

               
                     <container className={F.margin}>
<h1 className={F.font}>Fresh Somerset Ingredients</h1>

<h3 className={F.font}>

<br/>


  Buckland Burgers is a gourmet burger company based in Bristol. <br/>

Founded in the summer of 2015 by Stephen Brand and his boyfriend <br/>

Levi Lovell. Originally an off shoot of a market based artisan <br/>

meat company based in Somerset called Buckland Venison.<br/>
 </h3>

</container>
 </div>
 <qr/> 
 <br />
<br />
<br />
<br />
<br />
<div className={F.font}>
  .................................................
      <Menue/>
      <br/>
      <br/>
      <br/>
  </div>          </div>
        </div>
        
  
   

        
   
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
