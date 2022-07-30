import React from 'react';

const FileLink = ({link}) => {
	return (
		<div>
		<p>Your Link:</p>
		<p className = 'link underline blue hover-orange'>{link}</p>
		</div>
	)
}

export default FileLink;
