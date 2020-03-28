import React, { Component, useEffect } from 'react';
import firebase from "gatsby-plugin-firebase";

var db = firebase.firestore();

//the promises
var title1 = db.collection("menue").doc("title1");
var word1 = db.collection("menue").doc("word1");

var title2 = db.collection("menue").doc("title2");
var word2 = db.collection("menue").doc("word2");
var title3 = db.collection("menue").doc("title3");
var word3 = db.collection("menue").doc("word3");
var title4 = db.collection("menue").doc("title4");
var word4 = db.collection("menue").doc("word4");

//https://stackoverflow.com/questions/48479717/how-do-i-render-firestore-data-in-react






 class newMenue extends Component {
     

 


     constructor(props) {
         super(props)
     
         this.state = {
              titleOne: "",
              wordOne: "",
              titleTwo: "",
              wordTwo:"",
              titleThree: "",
              wordThree: "",
              titleFour: "",
              wordFour: "",
         }
     }
     
 


    render() {


        


    title1.get().then((doc) => {
    
    this.setState({
        titleOne: doc.data()
    });
});
  
 word1.get()
  .then(doc => {
    if (!doc.exists) {
      console.log('No such document!');
    } else {
      console.log('Document data:', doc.data());
      this.setState({
          wordOne: doc.data()
      }) 
    }
  })
  .catch(err => {
    console.log('Error getting document', err);
  });
    
    title2.get().then((doc) =>{
        this.setState({

            titleTwo: doc.data()
        })
    });
    
    word2.get().then(doc => {
        this.setState({

            wordTwo: doc.data()
        })
    });
    
    title3.get().then((doc) => {
        this.setState({

            titleThree: doc.data()
        })
    });
    
    word3.get().then((doc) => {
        this.setState({

            wordThree: doc.data()
        })
    });
    
    title4.get().then((doc) => {
        this.setState({

            titleFour: doc.data()
        })
    });
    
    word4.get().then((doc) => {
        this.setState({

            wordFour: doc.data()
        })
    })


        return (
            <div>
              
 
                 <h2 >{this.state.titleOne.One}</h2>
                 <br/> 
                <h5
                // 
                 >{this.state.wordOne.One}</h5>
                
                <br/>
                <br/>
                <h2>{this.state.titleTwo.One}</h2>
                <br/>
                <h5>{this.state.wordTwo.One}</h5>
                <br/>
                <br/>
                <h2>{this.state.titleThree.One}</h2>
                <br/>
                <h5>{this.state.wordThree.One}</h5>
                <br/>
                <br/>
                <h2>{this.state.titleFour.One}</h2>
                <br/>
                <h5>{this.state.wordFour.One}</h5>
                
               <h2> 
Halloumi
 </h2>

            <br/>
<h5>4 Slices of grilled Cypriot Halloumi</h5>
        </div>
        )

        }
    }
    



    

export default newMenue
