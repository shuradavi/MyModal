import React from 'react';

const Button = ({children, onOpen}) => {
	return (
		<button onClick={onOpen} className='c-btn'>
			{children}
		</button>
	);
};

export default Button;