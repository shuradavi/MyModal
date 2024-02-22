import React from 'react';
import { Body, Header, Footer } from '../Modal/Modal';
				
const Drawer = ({ children, isDrawerOpen}) => {
	return (
		<>
			{isDrawerOpen &&
				<div className='drawer'>
					{children}
				</div>
			}
		</>
	);
};
Drawer.Header = Header;
Drawer.Body = Body;
Drawer.Footer = Footer;

export default Drawer;