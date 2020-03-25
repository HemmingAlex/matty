import React from "react";




import Space  from "../../../assets/TasteBurger.jpg";
//hay

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Small from "components/Typography/Small.jsx";
import Danger from "components/Typography/Danger.jsx";
import Warning from "components/Typography/Warning.jsx";
import Success from "components/Typography/Success.jsx";
import Info from "components/Typography/Info.jsx";
import Primary from "components/Typography/Primary.jsx";
import Muted from "components/Typography/Muted.jsx";
import Quote from "components/Typography/Quote.jsx";
import typographyStyle from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.jsx";
import image from "assets/img/faces/avatar.jpg";
class SectionTypography extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>

           
              <GridItem xs={12} sm={2} >
                <h4>Circle Raised</h4>
                <img
                  src={Space}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRoundedCircle +
                    " " +
                    classes.imgFluid
                  }
                />
              </GridItem>
              
        


      </div>
    );
  }
}

export default withStyles(typographyStyle)(SectionTypography);
