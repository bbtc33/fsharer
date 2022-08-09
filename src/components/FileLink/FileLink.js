import React from 'react';

const FileLink = ({link}) => {
	return (
		<div>
		<p>Your Link:</p>
		<a href = {link} className = 'link underline blue hover-orange'>{link}</a>
		</div>
	)
}

export default FileLink;
