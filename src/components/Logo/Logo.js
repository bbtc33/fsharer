import React from 'react';

const Logo = () => {
	return (
		<logo>
		<p className='f-6 mt4 mb0' style={{display:'flex', flexWrap:'wrap', justifyContent:'flex-start'}}>fsharer</p>
		<p style={{display:'flex', flexWrap:'wrap', justifyContent:'flex-start'}}>simple temporary filesharing</p>
		<ul className='tl'>
			<li>Files limited to 500MB</li>
			<li>Files will be deleted after 12 hours</li>
			<li>Do not upload any illegal content</li>
		</ul>
		</logo>
	)
}

export default Logo;
