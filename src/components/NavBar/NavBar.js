import React from 'react';

const NavBar = ({changeRoute, route}) => {
	return (
		<nav style = {{display:'flex', justifyContent: 'flex-end',}}>

		<button className='f6 black bg-light-gray pa3 pointer b br-pill ma1 mt3 '
		onClick={() => {changeRoute('upload');}}
		>Upload</button>

		<button className='f6 black bg-light-gray pa3 pointer b br-pill ma1 mt3 '
		onClick={() => {changeRoute('about');}}
		>About</button>

		</nav>
	)
}

export default NavBar;
