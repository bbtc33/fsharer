import React, {Component} from 'react';
import 'tachyons';
import NavBar from './components/NavBar/NavBar'
import Logo from './components/Logo/Logo'
import FileUploader from './components/FileUploader/FileUploader'
import About from './components/About/About'
import FileLink from './components/FileLink/FileLink'
import TextLink from './components/TextLink/TextLink'
import './App.css';



class App extends Component {

	constructor(){
		super();
		this.state = {
			route: 'upload',
			text: false,
			file: false,
			link: 'test',
		}
		this.changeRoute=this.changeRoute.bind(this);
	}

	changeRoute = (route) => {
		this.setState({route: route});
	}

	render (){
		return(
			<div className='App pr3 pl3'>
			<NavBar changeRoute={this.changeRoute} route = {this.state.route}/>
			<Logo />
			{this.state.route === 'upload'?
				!this.state.text?
					this.state.file?
					<FileLink link={this.state.link}/>:
					<FileUploader />:
				<TextLink link={this.state.link}/>:
			<About />}
			</div>
		);
	}
}


export default App;
