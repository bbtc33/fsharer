import React from 'react';

const TextLink = ({link}) => {
	return (
		<div>
		<p>Your Link:</p>
		<p className = 'link underline blue hover-orange'>{link}</p>
		</div>
	)
}

export default TextLink;
