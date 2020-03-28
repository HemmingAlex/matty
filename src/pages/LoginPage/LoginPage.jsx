
import React, { useEffect } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import LockOutlined from "@material-ui/icons/LockOutlined";
// React icons
import {FaFacebook, FaTwitter, FaGooglePlusG } from 'react-icons/fa';
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";


import firebase from "gatsby-plugin-firebase";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

import image from "assets/img/bg7.jpg";

// import Log from "../../fire/login/login.js";

//extra
// import Firebase from "../../Fire/index.js";
//ahyyooo


class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      email: "",
      password: ""
    };
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }


// holding the value
emailChangeHandler = (e) => {
this.setState({
  email: e.target.value
})
}

passwordChangeHandler = (e) => {
  this.setState({
    password: e.target.value
  })
}

// submiting the form data to firebase

submitFomData = (e) => {

    alert(`${this.state.password} food ${this.state.email}`);
    e.preventDefault();

    firebase
    .auth()
    .createUserWithEmailAndPassword(this.state.email, this.state.password)
    .catch(function(error) 
    {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      console.log(errorCode, errorMessage)
      // ...
    });

}


///firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {




// this.email= ;
// this.password
//   }
  // firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {

    // firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // ...
    // });

  render() {
    const { classes, ...rest } = this.props;
    return (

      <div>
        <Header
          absolute
          color="transparent"
          brand="Material Kit React"
          rightLinks={<HeaderLinks />}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >

          {/* <Log/> */}
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form}                    onSubmit={this.submitFomData}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>Login (only email works)</h4>
                     
                    </CardHeader>

                    
                    <CardBody>
                      <CustomInput
                        labelText="First Name..."
                        id="first"
                         formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Email..."
                        id="email"
                        // vlaue={this.state.email}
                        // onChange={this.emailChangeHandler}
                        //"input porops, reallY?"

                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "email",
                          vlaue: this.state.email,
                          onChange: this.emailChangeHandler,
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Password"
                        id="pass"                    
                      formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "password",
                          value: this.state.password,
                          onChange: this.passwordChangeHandler,
                          endAdornment: (
                            <InputAdornment position="end">
                              <LockOutlined/>
                            </InputAdornment>
                          )
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button simple color="primary" size="lg" type="submit">
                        Get started or login
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          {/* {/* <Log/> */}

          {/* <Firebase/> */}
 */}

          <Footer whiteFont />
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(LoginPage);
