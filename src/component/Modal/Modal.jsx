import React, { useEffect } from 'react';
import { ModalContext } from '../../context/context';
import { ModalFooter, ModalContent, ModalBody, ModalHeader, Backdrop, DrawerContent,  DrawerBody, Footer, DrawerHeader, DrawerOpenButton } from '../../constructor/constructor';

export const Modal = ({ children, modal, onCloseHandler, isDrawerOpen, isClosableModal = true, isOverflowHidden = true }) => {	
	
	const escapeFunc = (event) => {
		
		if ((event.key === 'Escape') && (modal) && (!isDrawerOpen)) {
			onCloseHandler()
		};
	};

	useEffect(() => {
		window.addEventListener('keydown', escapeFunc);

		if (modal && isOverflowHidden) {
			document.body.classList.add('active-modal')
		}

		return () => {
			window.removeEventListener('keydown', escapeFunc);
			document.body.classList.remove('active-modal')
		}
	}, [isDrawerOpen])
	
	return (
		<ModalContext.Provider value={{ modal, onCloseHandler, isClosableModal }}>
			<div>
				{children}
			</div>
		</ModalContext.Provider>
	)
};

export const Drawer = ({ children, drawer, onCloseHandler }) => {

	const escapeFunc = (event) => {
		if ((event.key === 'Escape') && (drawer)) {
			onCloseHandler()
		};
	};

	useEffect(() => {
		window.addEventListener('keydown', escapeFunc);

		return () => {
			window.removeEventListener('keydown', escapeFunc);
		}
	}, [])
	return (
		// <DrawerContext.Provider value={{drawer, onCloseHandler}}>
			<div className='modalDrawer'>{children}</div>
		// </DrawerContext.Provider>
	)
}
Modal.Drawer = Drawer;
Modal.Drawer.Content = DrawerContent;
Modal.Drawer.Header = DrawerHeader;
Modal.Drawer.Body = DrawerBody;
Modal.Drawer.Footer = Footer;

Modal.Backdrop = Backdrop;
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
Modal.Content = ModalContent;
Modal.DrawerOpenButton = DrawerOpenButton;

	
