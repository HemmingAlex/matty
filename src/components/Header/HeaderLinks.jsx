/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "gatsby";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, NotListedLocation, LocalDining, Home, Camera } from "@material-ui/icons";

// React icons
import { FaTwitter, FaFacebook, FaInstagram, } from 'react-icons/fa';

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Bug from "./fix.module.scss";


import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      {/* <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Home"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={LocalDining}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              Home
            </Link>,
          
     
          
          ]}
        />
      </ListItem> */}

      <ListItem 
      className={classes.listItem}
      >
       
          
        <Link to="/"> <Button 
         
          color="transparent"
          className={`${Bug.button}${classes.navLink}`}
        > <Home className={classes.icons} />  Home</Button></Link>
        
      </ListItem>

      <ListItem 
      className={classes.listItem}
      >


       <Link to="/socialmedia"> <Button 
         
          color="transparent"
          className={`${Bug.button}${classes.navLink}`}
        >
          <Camera className={classes.icons} /> 
         Media
        </Button></Link>
      </ListItem>










      <ListItem 
      className={classes.listItem}
      >
       <Link to="/contacts"><Button 
         
          color="transparent"
          className={`${Bug.button}${classes.navLink}`}
        >
          <NotListedLocation className={classes.icons} /> 
        Location
        </Button></Link>
      </ListItem>

      
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/bucklandburgers?lang=en"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <FaTwitter/>
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/buckburgs/"
            target="_blank"
            className={classes.navLink}
          >
            <FaFacebook/>
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/bucklandburgers/?hl=en"
            target="_blank"
            className={classes.navLink}
          >
            <FaInstagram/>
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
