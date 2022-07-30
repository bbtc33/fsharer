import React from 'react';

const FileUploader = () => {
	return (
		<div style = {{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center',}} className='mt5 mb7'>
		<button className='ma5 f3 pa3 bg-white-60 br4 measure grow'>Upload File</button>
		<textarea rows='3' cols='50' className='ma4 mb2 f6 measure' placeholder='Enter Text Here'/>
		<button className='ma4 f3 pa3 bg-white-60 grow br4 measure'>Upload Text</button>
		</div>
	)
}

export default FileUploader;
