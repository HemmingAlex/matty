import firebase, { firestore } from 'firebase';
import React, {useEffect, Component} from 'react';

import {Link} from 'gatsby';


// let setDoc = db.collection('menue').doc('burger').set();

var db = firebase.firestore();




// to test and see if it works
let poop =" oooo weee"; 





//the get or read if you will, possibly fetch



//end of test



// ..................





//class component start
export class Set extends Component {

    
    
 
    constructor(props) {
        super(props)        
  // Local signed-in state.
        this.state = {
            title1: "",
            word1: '',
            title2: "",
            word2: '',
            title3: "",
            word3: '',
            title4: "",
            word4: '',


    isSignedIn: false, 
    email: "",
    password: ""
    
  };
    }


    //aparantly this is broken. how i have no idea. (state undefined?)
signIn = event => {
    event.preventDefault();
    firebase
    .auth()
    .signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) 
    {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      console.log(errorCode, errorMessage)
      // ...
    });
}



     // Listen to the Firebase Auth state and set the local state.
     //seems pointless in the long run
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => this.setState({isSignedIn: !!user})
    );
  }
  
  // Make sure we un-register Firebase observers when the component unmounts. (no idea why)
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }


  //email and password change from input
      handlePChange = event => {
                this.setState({
                    password: event.target.value
                })
          
          }
        
        handleEChange = event => {
            this.setState({
                email: event.target.value
            })
      
      
        }
        




// state change (holds the values)

  TitleOneChange = (event) => {
    this.setState({
      title1: event.target.value
    })
    }
    
    WordOneChange = (event) => {
        this.setState({
          word1: event.target.value
        })
        }
        
        TitleTwoChange = (event) => {
            this.setState({
              title2: event.target.value
            })
            }
            
            WordTwoChange = (event) => {
                this.setState({
                  word2: event.target.value
                })
                }
                
                TitleThreeChange = (event) => {
                    this.setState({
                      title3: event.target.value
                    })
                    }
                    
                    wordThreeChange = (event) => {
                        this.setState({
                          word3: event.target.value
                        })
                        }
                        
                        TitleFourChange = (event) => {
                            this.setState({
                              title4: event.target.value
                            })
                            }
                            
                            WordFourChange = (event) => {
                                this.setState({
                                  word4: event.target.value
                                })
                                }
                                
                                                                                                                    



//uploads values to database

    submit = event => {
    alert(` uploaded to database, such as:   
     
     ${this.state.word1} `)
     event.preventDefault()
     
                 db.collection("menue").doc("title1").set({  
               One: `${this.state.title1}`
              });

              db.collection("menue").doc("word1").set({  
                One: `${this.state.word1}`
               });

               db.collection("menue").doc("title2").set({  
                One: `${this.state.title2}`
               });

               db.collection("menue").doc("word2").set({  
                One: `${this.state.word2}`
               });

               db.collection("menue").doc("title3").set({  
                One: `${this.state.title3}`
               });

               db.collection("menue").doc("word3").set({  
                One: `${this.state.word3}`
               });

               db.collection("menue").doc("title4").set({  
                One: `${this.state.title3}`
               });

               db.collection("menue").doc("word4").set({  
                One: `${this.state.word3}`
               });
            }

            
      
    
    render()  {
        
        if (!this.state.isSignedIn) {
        return (
          <div>
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
<form onSubmit={this.signIn}>
    <h2> If you have not made an account please go here => (may not work if account making turned off)<Link to="/login-page" >(x)</Link> </h2>
              <input type="text" value={this.state.email}
               onChange={this.handleEChange} placeholder="email"/>

          <input type="text" value={this.state.password} 
          onChange={this.handlePChange} placeholder="password"/>

  <button  type="submit"> sign in</button></form>

   {firebase.auth().currentUser}

  
          </div>
        );
      }
  
  
      return (


        <div>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
          <h1>HI</h1>
          <p>Welcome =! You are now/ currently signed-in!</p>


     
  
          <a onClick={() => firebase.auth().signOut()}>Sign-out (click this to sign out)</a>
          <br/>
          <br/>
          <br/>
          <br/>
  
  
  
  <form onSubmit={this.submit}>
          <label >Menue on homepage</label>
  
  
  
          <hr/>
  
  
first menue item name (large font)
  <br/>
          <textarea rows="1" cols="30"
    value= {this.state.title1}
    onChange= {this.TitleOneChange}/>
  <br/>
first item description (small font)
  <br/>
  <textarea rows="4" cols="50"
    value= {this.state.word1}
    onChange= {this.WordOneChange}/>
  <br/>

second item name
  <br/>
     <textarea rows="1" cols="30"
    value= {this.state.title2}
    onChange= {this.TitleTwoChange}/>
  <br/>

second item description

  <br/>
<textarea rows="4" cols="50"
    value= {this.state.word2}
    onChange= {this.WordTwoChange}/>
  <br/>
  
  third item name
  <br/>
          <textarea rows="1" cols="30"
    value= {this.state.title3}
    onChange= {this.TitleThreeChange}/>
  <br/>
  
third item description
  <br/>
  <textarea rows="4" cols="50"
    value= {this.state.word3}
    onChange= {this.wordThreeChange}/>
  <br/>

fourth item name
  <br/>
          <textarea rows="1" cols="30"
    value= {this.state.title4}
    onChange= {this.TitleFourChange}/>
  <br/>
  
fourth item description
  <br/>
  <textarea rows="4" cols="50"
    value= {this.state.word4}
    onChange= {this.WordFourChange}/>
  <br/>


        <button type="submit"> Submit </button>
  
        </form>
        </div>
      );
    }
  
}


export default Set;




