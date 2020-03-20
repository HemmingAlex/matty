import React, { Component } from 'react';
import { render } from 'react-dom';


import Gallery from 'react-grid-gallery';


import Thanks from "../../assets/Bristol.jpg";
import Fin from "../../assets/BigSauce.jpg";
import Burger from "../../assets/burger.jpg";
import Cooking from "../../assets/Cooking.jpg";
import Curious from "../../assets/Curious.jpg";
import CustomerBack from "../../assets/CustomerBack.jpg";
import DoubleChange from "../../assets/DoubleChange.jpg";
import Eating from "../../assets/Eating.jpg";
import Exchange from "../../assets/Exchange.jpg";
import FoodEater from "../../assets/FoodEater.jpg";
import Front2 from "../../assets/Front2.jpg";
import Menue from "../../assets/Menue.jpg";
import OpenBurger from "../../assets/OpenBurger.jpg";
import Precision from "../../assets/Precision.jpg";
import Sauce from "../../assets/Sauce.jpg";
import Sauce3 from "../../assets/Sauces3.jpg";
import Service from "../../assets/Service.jpg";
import Setup from "../../assets/Setup.jpg";
import Sleepy from "../../assets/Sleepy.jpg";
import TasteBurger from "../../assets/TasteBurger.jpg";
import Toplessburger from "../../assets/Toplessburger.jpg";




const IMAGES =
[{
        src: Thanks,
        thumbnail: Thanks,
        thumbnailWidth: 174,
        thumbnailHeight: 174,
},{
    src: Fin,
    thumbnail: Fin,
    thumbnailWidth: 174,
    thumbnailHeight: 174,
},{
    src: Burger,
    thumbnail: Burger,
    thumbnailWidth: 174,
    thumbnailHeight: 174,
}
,{
    src: Cooking,
    thumbnail: Cooking,
    thumbnailWidth: 174,
    thumbnailHeight: 174,
},{
    src: Curious,
    thumbnail: Curious,
    thumbnailWidth: 174,
    thumbnailHeight: 174,
},{
    src: CustomerBack,
    thumbnail: CustomerBack,
    thumbnailWidth: 174,
    thumbnailHeight: 174,
},{
    src: DoubleChange,
    thumbnail: DoubleChange,
    thumbnailWidth: 174,
    thumbnailHeight: 174,
},{
    src: Eating,
    thumbnail: Eating,
    thumbnailWidth: 174,
    thumbnailHeight: 174,
},{
    src: Exchange,
    thumbnail: Exchange,
    thumbnailWidth: 174,
    thumbnailHeight: 174,
},{
    src: FoodEater,
    thumbnail: FoodEater,
    thumbnailWidth: 174,
    thumbnailHeight: 174,
},{
    src: Front2,
    thumbnail: Front2,
    thumbnailWidth: 174,
    thumbnailHeight: 174,
},{
    src: Menue,
    thumbnail: Menue,
    thumbnailWidth: 174,
    thumbnailHeight: 174,
},{
    src: OpenBurger,
    thumbnail: OpenBurger,
    thumbnailWidth: 174,
    thumbnailHeight: 174,
},{
    src: Precision,
    thumbnail: Precision,
    thumbnailWidth: 174,
    thumbnailHeight: 174,
},{
    src: Sauce,
    thumbnail: Sauce,
    thumbnailWidth: 174,
    thumbnailHeight: 174,
},{
    src: Sauce3,
    thumbnail: Sauce3,
    thumbnailWidth: 174,
    thumbnailHeight: 174,
},{
    src: Service,
    thumbnail: Service,
    thumbnailWidth: 174,
    thumbnailHeight: 174,
},{
    src: Setup,
    thumbnail: Setup,
    thumbnailWidth: 174,
    thumbnailHeight: 174,
},{
    src: Sleepy,
    thumbnail: Sleepy,
    thumbnailWidth: 174,
    thumbnailHeight: 174,
},{
    src: TasteBurger,
    thumbnail: TasteBurger,
    thumbnailWidth: 174,
    thumbnailHeight: 174,
},{
    src: Toplessburger,
    thumbnail: Toplessburger,
    thumbnailWidth: 174,
    thumbnailHeight: 174,
}]

class Gallary extends Component {


     


    render() {
        
        return (
            <div >
<br/>

<br/><br/>
<br/>

<hr/>
<div>  
    <h1 >Gallery</h1>
    <br/>
    

    <Gallery images={IMAGES}/>
</div>
<br/>

            </div>
        )
    }
}

export default Gallary
