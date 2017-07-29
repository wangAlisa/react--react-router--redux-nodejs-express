import React, {Component} from 'react';
import config from './config.json';

export default class Greeter extends Component {
	render() {
		return (<div>	{config.greetText} </div>)
	}
}
