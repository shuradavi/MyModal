import React from 'react';
import {Drawer} from '../Drawer/Drawer';
import { ModalContext, useModalContext } from '../../context/context';
import { Backdrop, Header, Body, Footer } from '../../constructor/constructor';

export const Modal = ({modal, children, toggleModal, isOverflowHidden = true }) => {	

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
		<ModalContext.Provider value={modal}>
			<div className='modal'>
				{children}
			</div>
		</ModalContext.Provider>
	)
};

	Modal.Backdrop = Backdrop;
	Modal.Header = Header;
	Modal.Body = Body;
	Modal.Footer = Footer;
	
