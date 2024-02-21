import React, { createContext, useContext } from 'react';
// import Drawer from '../Drawer/Drawer';

const Backdrop = () => {
	return <div onClick={toggleModal} className='overlay'/>
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

const Modal = ({ children, toggleModal, showDrawer, isClosableModal = true, isOverflowHidden = true }) => {

	const modal = useContext(ModalContext);

	const ModalContext = createContext(isModalOpen);

	const closeOffModal = () => {
		modal && setModal(!isModalOpen)
		console.log('It\'s close off modal');
	}

	// const closeeOffModal = () => {
	// 	isModalOpen && isClosableModal && toggleModal()
	// 	console.log('clicked out side the modal');
	// }

	window.addEventListener('keydown',
		(event) => {
			if ((event.key === 'Escape') && (isModalOpen)) {
				toggleModal()
			}
		})

	if (isModalOpen && isOverflowHidden) {
		document.body.classList.add('active-modal')
	} else {
		document.body.classList.remove('active-modal')
	}
	

	return (
		isModalOpen &&
		<ModalContext.Provider value={isM}>
			<div className='modal'>{children}</div>
		</ModalContext.Provider>
		
	)
};

	Modal.Backdrop = Backdrop;
	Modal.Header = Header;
	Modal.Body = Body;
	Modal.Footer = Footer;

	export default Modal;