import React from 'react';
import Iframe from 'react-iframe';


import F from "../land.module.scss";



function facebook() {
    return (
        <div className={F.fb} >
            <Iframe url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fchris.yates.79%2Fposts%2F10102216328134382&width=500" 
        width="500px"
        height="179px"
 
        display="initial"
        position="relative"/>

  {/* <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fw
        ww.facebook.com%2Fchris.yates.79%2Fposts%2F10102216328134382&width=500" 
        
        width="500" height="179" style="border:none;overflow:hidden" scrolling="no" 
        frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe> */}
     
     <br/>
     <br/>
     <Iframe url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fclare.copping%2Fposts%2F10158069703067048&width=500"
            position="relative"
            width="500px"
         

            height="179px"
            styles={{border:"none", overflow: "hidden" }}/>

<br/>
<br/>..


     <Iframe url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fworley.hev%2Fposts%2F10155800019336367%3A1&width=500"
            position="relative"
            width="500px"

            height="379px"
            styles={{border:"none", overflow: "hidden", minWidth: "500px", }}/>


<br/>
<br/>..

<Iframe url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fchloecookson69%2Fposts%2F559792167755339%3A0&width=500"
            position="relative"
            width="500px"
   
            height="379px"
            styles={{border:"none", overflow: "hidden", margin: "auto" }}
            />

<br/>
<br/>
<br/>
<br/>
<br/>..

            

     
        </div>
    )
}

export default facebook
