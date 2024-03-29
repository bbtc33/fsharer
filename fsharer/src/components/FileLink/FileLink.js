import React, {Component} from 'react';
import {QRCodeSVG} from 'qrcode.react';

class FileLink extends Component{
	reset = () => {
		this.props.setLink('test')
	}
	render(){
		return (
		<div style = {{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center', flexWrap:'wrap'}}>
		<p>Your Link:</p>
		<a href = {this.props.link} className = 'link underline blue hover-orange'>{this.props.link}</a>
		<QRCodeSVG value={this.props.link} bgColor = "#e7dcbc" className = 'pa3' />
		<button onClick={this.reset} className='ma3 f3 pa3 bg-white-60 grow br4 measure'>Upload New</button>
		</div>
		)
	}
}

export default FileLink;
