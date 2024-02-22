import React from 'react';
import { ModalContext, useModalContext } from '../../context/context';

const Backdrop = ({ props, isClosableModal = true }) => {
	if (isClosableModal) {
		return <div className='overlay' onClick={props}/>
	} else {
		return <div className='overlay'/>
	}
};

export const Header = ({ children }) => {
	return <div className='header-container'>{children}</div>
};

export const Body = ({ children }) => {
	return (
		<div className='body-container' style={{ cursor: 'pointer' }}>
			{children}
		</div>)
};

export const Footer = ({ children }) => {
	return (
		<div className='footer-container'>
			{children}
		</div>
	)
};

const Modal = ({ children, toggleModal, isOverflowHidden = true }) => {	
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
	
	return modal && <div className='modal'>{children}</div>
};

	Modal.Backdrop = Backdrop;
	Modal.Header = Header;
	Modal.Body = Body;
	Modal.Footer = Footer;

	export default Modal;