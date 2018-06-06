import React, {Component} from 'react';
import WeatherDisplay from "./components/WeatherDisplay";
import styled from 'styled-components';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			value: true,
			workers: [
				{name: 'Коля', surname: 'Иванов', age: 30},
				{name: 'Вася', surname: 'Петров', age: 40},
				{name: 'Петя', surname: 'Сидоров', age: 50}
			]
		}
		
	}
	line = (event) =>{ 
		event.target.name == 0 ? this.setState({value: !this.state.value}) : '';
	};
	render(){	
		const {workers, sum} = this.state;
		let list= workers.map((item, index)=>{
			return <div key={index}>
						<p>{item.name} {item.surname} {item.age}</p>
						<input type="checkbox" onChange={this.line} name={index} checked={this.state.value}/>
					</div>
		});
		return(
			<div className="app" >
				<WeatherDisplay />
					<div>
						{list}
					</div>
			</div>
		);
	}
}

export default App;