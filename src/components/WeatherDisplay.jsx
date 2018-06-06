import React, {Component} from 'react';

class WeatherDisplay extends Component{
	constructor(props){
		super(props);
		this.state = {
			count: 0
		  };
	}render() {
		  const {count} = this.state;
		return(
			<div>

			</div>
		);
	  }
}



export default WeatherDisplay;