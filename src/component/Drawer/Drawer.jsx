import React from 'react';
import { Header, Body, Footer } from '../../constructor/constructor';
import { useDrawerContext, DrawerContext } from '../../context/context';
				
export const Drawer = ({children}) => {
	const drawer = useDrawerContext(DrawerContext);
	
	return (drawer && <div className='drawer'>{children}</div>);
};

Drawer.Header = Header;
Drawer.Body = Body;
Drawer.Footer = Footer;
