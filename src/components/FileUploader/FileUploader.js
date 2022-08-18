import React, {Component} from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://files.bbtc33.com';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';

class FileUploader extends Component {
	constructor() {
		super();
		this.state = {
			chosenFile: null,
			formData: new FormData(),
		};
	}

	fileSelect = event => {
		this.setState({ chosenFile: event.target.files[0]})
	}

	textSelect = event => {
		this.setState({ chosenFile: event.target.value})
	}


	fileUpload = () => {

		this.state.formData.append(
			"chosenFile",
			this.state.chosenFile,
			this.state.chosenFile.name,
		);

		axios.post("/upload", this.state.formData)
			.then((resObject) => {
				this.props.setLink(resObject.data.link)
			})
	};

	textUpload = () => {
		this.state.formData.append(
			"chosenFile",
			this.state.chosenFile
		);

		axios.post("/uploadtext", this.state.formData)
			.then((resObject) => {
				this.props.setLink(resObject.data.link)
			})
	};


	render(){
		return (
			<div style = {{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center', flexWrap:'wrap'}} className='mt6 mb7'>
			<input type = "file" className='ma3 f3 pa3 measure' onChange={this.fileSelect} />
			<button onClick={this.fileUpload} className='ma3 mb5 f3 pa3 bg-white-60 br4 measure grow'>Upload File</button>
			<textarea rows='3' cols='50' style={{alignSelf:'center'}} className='ma3 f6 measure' placeholder='Enter Text Here' onChange={this.textSelect}/>
			<button onClick={this.textUpload} className='ma3 f3 pa3 bg-white-60 grow br4 measure'>Upload Text</button>
			</div>
		)
	}
}

export default FileUploader;
