import React, {Component} from 'react';
import 'tachyons';
import NavBar from './components/NavBar/NavBar'
import Logo from './components/Logo/Logo'
import FileUploader from './components/FileUploader/FileUploader'
import About from './components/About/About'
import FileLink from './components/FileLink/FileLink'
import './App.css';



class App extends Component {

	constructor(){
		super();
		this.state = {
			route: 'upload',
			file: false,
			link: 'test',
		}
	}

	changeRoute = (route) => {
		this.setState({route: route})
	}

	toggleFile = () => {
		this.setState({file: !this.state.file})
	}

	setLink = (input) => {
		console.log(input)
		this.setState({link: 'https://files.bbtc33.com/' + input}, () => {
			this.toggleFile()
		})
	}

	render (){
		return(
			<div className='App pr3 pl3'>
			<NavBar changeRoute={this.changeRoute}/>
			<Logo />
			{this.state.route === 'upload'?
				!this.state.file?

				<FileUploader
				toggleFile = {this.toggleFile}
				toggleText = {this.toggleText}
				setLink = {this.setLink}
				/>:

				<FileLink link={this.state.link}/>:
			<About />}
			</div>
		);
	}
}


export default App;
