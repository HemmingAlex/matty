
	import React, { Component } from "react";
	import { TimelineLite, CSSPlugin } from "gsap/all";
	import Iframe from 'react-iframe';
	import F from "../land.module.scss";

	import Button from "components/CustomButtons/Button.jsx";
	
	class MultipleElements extends Component {
	
		constructor(props){
			super(props);
			// logo container
			this.commentContainer = null;
			// logo tween
			this.Comments = null;
		}
	
	
		componentDidMount(){
			// create logo tween
			
			this.Comments = new TimelineLite({ paused:true })
			
			// .to(this.commentContainer, 2, { x: 300 })
			// .to(this.commentContainer, 1, { rotation: 360, transformOrigin: "center" })
			.fromTo(this.commentContainer, {opacity: 0}, {opacity: 1, duration: 1});

		}
	
	
		render(){
			return <div className="container">
				<div className="row">
	
					<div className="col-12 mt-3">
						<hr/>
					</div>
	
					<div className="col-12">
						<div className="mb-2 btn-group">
							<Button
							color="info"
								className="btn gsap-btn"
								onClick={() => this.Comments.play()}
							>Look at how good people think we are </Button>
							{/* <button
								className="btn gsap-btn"
								onClick={() => this.Comments.pause()}
							>Pause</button> */}
						
							{/* <button
								className="btn gsap-btn"
								onClick={() => this.Comments.restart()}
							>Restart</button> */}
						</div>
						<hr />
					</div>
	
					<div className={`${F.fb} col-12 mt-3`} ref={ this_ => this.commentContainer = this_ }>


					<Iframe url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fchris.yates.79%2Fposts%2F10102216328134382&width=500" 
        width="500px"
        height="179px"
 
        display="initial"
        position="relative"/>

  
     <Iframe url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fclare.copping%2Fposts%2F10158069703067048&width=500"
            position="relative"
            width="500px"
         

            height="179px"
            styles={{border:"none", overflow: "hidden" }}/>




     <Iframe url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fworley.hev%2Fposts%2F10155800019336367%3A1&width=500"
            position="relative"
            width="500px"

            height="379px"
            styles={{border:"none", overflow: "hidden", minWidth: "500px", }}/>




<Iframe url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fchloecookson69%2Fposts%2F559792167755339%3A0&width=500"
            position="relative"
            width="500px"
   
            height="379px"
            styles={
                {border:"none", overflow: "hidden"}
            }
            />
				<Button color="warning"
								className="btn gsap-btn"
								onClick={() => this.Comments.reverse()}
							>or not</Button>

					</div >
	
				</div>
			</div>;
		}
		
	}
	

	

export default MultipleElements;
