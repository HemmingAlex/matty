import React, {useEffect, useState} from 'react';
import firebase, {firestore} from "gatsby-plugin-firebase"


//function for reading firestore data

function HandleRead() {
    const [menue, setMenue] = useState([])


    //when mounted and updated (snapshot)

    useEffect(() => {
        firebase
        .firestore()
        .collection('Menue')
        .onSnapshot((snapshot) => {
            const newMenue = snapshot.docs.map((doc) =>({
                    id: doc.id,
                    ...doc.data()
                }))

                setMenue(newMenue)
             })
       },[]  )

        return menue 
    }
    

// function component start
    
const Add = () => {

    const menue = HandleRead();


    return (
        <div>
          

                {menue.map((output) =>
                
                <div key={output.id}>
                    <h1> Menue</h1>

<div> {output.Lnews}</div>

                </div>
                )}

        </div>
    )
}

export default Add