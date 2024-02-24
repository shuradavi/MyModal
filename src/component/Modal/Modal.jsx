import React from 'react';
import {Drawer} from '../Drawer/Drawer';
import { ModalContext, useModalContext } from '../../context/context';
import { Backdrop, Header, Body, Footer } from '../../constructor/constructor';

export const Modal = ({ children, toggleModal, isOverflowHidden = true }) => {	
	const modal = useModalContext(ModalContext);

	window.addEventListener('keydown',
		(event) => {
			if ((event.key === 'Escape') && (modal)) {
				toggleModal()
			}
		})

	if (modal && isOverflowHidden) {
		document.body.classList.add('active-modal')
	} else {
		document.body.classList.remove('active-modal')
	}
	
	return (modal &&
		<div className='modal'>
			{children}
				<Drawer>
					<Drawer.Header>Header</Drawer.Header>
					<Drawer.Body>Body</Drawer.Body>
					<Drawer.Footer>Footer</Drawer.Footer>
				</Drawer>
		</div>
	)
};

	Modal.Backdrop = Backdrop;
	Modal.Header = Header;
	Modal.Body = Body;
	Modal.Footer = Footer;
