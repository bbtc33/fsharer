import React, {Component} from 'react';
import 'tachyons';
import NavBar from './components/NavBar/NavBar'
import Logo from './components/Logo/Logo'
import FileUploader from './components/FileUploader/FileUploader'
import About from './components/About/About'
import FileLink from './components/FileLink/FileLink'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import baseUrl from './config'


class App extends Component {

	constructor(){
		super();
		this.state = {
			file: false,
			link: 'test',
		}
	}

	toggleFile = () => {
		this.setState({file: !this.state.file})
	}

	setLink = (input) => {
		console.log(input)
		console.log(baseUrl)
		this.setState({link: baseUrl + input}, () => {
			this.toggleFile()
		})
	}

	render (){
		return(
			<BrowserRouter>
			<div className='App pr3 pl3'>
			<NavBar />
			<Logo />
			<Routes>
				<Route path="/" element = {
					!this.state.file?
					<FileUploader
						toggleFile = {this.toggleFile}
						setLink = {this.setLink}
					/>:
					<FileLink
						link={this.state.link}
						setLink={this.setLink}
						toggleFile={this.toggleFile}
					/>
				}></Route>
				<Route path="/about" element = {<About />}></Route>
			</Routes>
			</div>
			</BrowserRouter>
		);
	}
}


export default App;
