import React, { Component } from 'react'

import Menue from "../LandingPage/burger bits/menue.jsx";
import Facebook from "../LandingPage/burger bits/facebook.jsx";

import Ex from "../LandingPage/burger bits/Example.jsx";
import Map from "../LandingPage/SimpleMap.jsx";
import Space  from "../../assets/TasteBurger.jpg";
import MyGal from "../../components/Gallary/Gallary.jsx";

import S from "./Social.module.scss";
import classNames from "classnames";


import Peng from "../../assets/Peng.jpg";

//core
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";


import withStyles from "@material-ui/core/styles/withStyles";


const dashboardRoutes = [];


 class SocialMedia extends Component {
     constructor(props) {
         super(props);
    this.activate = this.activate.bind(this)
         this.state = {
              Reveal: true,
              change: "2",
         }
     }

     activate() {
        this.state.Reveal === true ? this.setState({Reveal : false}) : this.setState({Reveal: true});
    }


    render() {

       
        
        
        const { classes, ...rest } = this.props;

        return (
            <div className={S.background}>
                    <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Buckland Burgers"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 130,
            color: "rose"
          }}
          {...rest}
        />
  {/* <br/><img src={Peng} /> */}
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
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>

        <div className={classNames(classes.main, classes.mainRaised)}>
                
  <br/>
            <div className={classes.container}>
            <br/>

                   <row> <Ex/></row>
                   <row>  <br/>
<Button onClick={this.activate} color="info"> Facebbok comments/reviews</Button>

{this.state.Reveal === false ? <container>  <Facebook/></container>: <div></div>}
                   </row>
                   <row>



                   <container className={S.a}><MyGal margin={7}/></container></row>

    


                </div>
                
            </div>
            <Footer/></div>
        )
    }
}

export default withStyles(landingPageStyle)(SocialMedia);
