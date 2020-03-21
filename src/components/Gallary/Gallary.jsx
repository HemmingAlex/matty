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
        thumbnailWidth: 341,
        thumbnailHeight: 341,
},{
    src: Fin,
    thumbnail: Fin,
    thumbnailWidth: 341,
    thumbnailHeight: 341,
},{
    src: Burger,
    thumbnail: Burger,
    thumbnailWidth: 341,
    thumbnailHeight: 341,
}
,{
    src: Cooking,
    thumbnail: Cooking,
    thumbnailWidth: 341,
    thumbnailHeight: 341,
},{
    src: Curious,
    thumbnail: Curious,
    thumbnailWidth: 341,
    thumbnailHeight: 341,
},{
    src: CustomerBack,
    thumbnail: CustomerBack,
    thumbnailWidth: 341,
    thumbnailHeight: 341,
},{
    src: DoubleChange,
    thumbnail: DoubleChange,
    thumbnailWidth: 341,
    thumbnailHeight: 341,
},{
    src: Eating,
    thumbnail: Eating,
    thumbnailWidth: 341,
    thumbnailHeight: 341,
},{
    src: Exchange,
    thumbnail: Exchange,
    thumbnailWidth: 341,
    thumbnailHeight: 341,
},{
    src: FoodEater,
    thumbnail: FoodEater,
    thumbnailWidth: 341,
    thumbnailHeight: 341,
},{
    src: Front2,
    thumbnail: Front2,
    thumbnailWidth: 341,
    thumbnailHeight: 341,
},{
    src: Menue,
    thumbnail: Menue,
    thumbnailWidth: 341,
    thumbnailHeight: 341,
},{
    src: OpenBurger,
    thumbnail: OpenBurger,
    thumbnailWidth: 341,
    thumbnailHeight: 341,
},{
    src: Precision,
    thumbnail: Precision,
    thumbnailWidth: 341,
    thumbnailHeight: 341,
},{
    src: Sauce,
    thumbnail: Sauce,
    thumbnailWidth: 341,
    thumbnailHeight: 341,
},{
    src: Sauce3,
    thumbnail: Sauce3,
    thumbnailWidth: 341,
    thumbnailHeight: 341,
},{
    src: Service,
    thumbnail: Service,
    thumbnailWidth: 341,
    thumbnailHeight: 341,
},{
    src: Setup,
    thumbnail: Setup,
    thumbnailWidth: 341,
    thumbnailHeight: 341,
},{
    src: Sleepy,
    thumbnail: Sleepy,
    thumbnailWidth: 341,
    thumbnailHeight: 341,
},{
    src: TasteBurger,
    thumbnail: TasteBurger,
    thumbnailWidth: 341,
    thumbnailHeight: 341,
},{
    src: Toplessburger,
    thumbnail: Toplessburger,
    thumbnailWidth: 341,
    thumbnailHeight: 341,
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
    

    <Gallery images={IMAGES} margin={10} rowHeight={374} />
</div>
<br/>

            </div>
        )
    }
}

export default Gallary
