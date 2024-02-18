import React, { createContext, useEffect } from 'react';

const ModalContext = createContext();

const Backdrop = () => {
	return (
		<ModalContext.Consumer>
			{value => (
				value.isModalOpen && <div className='overlay' onClick={value.closeeOffModal} />
			)}
			
		</ModalContext.Consumer>
	);
};

const Header = ({children}) => {
	return (
		<ModalContext.Consumer>
			{value => (
				<div className='modal-header' style={value.textParams.HEADER}>
					{children}
				</div>
			)}
		</ModalContext.Consumer>
	);
};

const Body = ({children}) => {
	return (
		<ModalContext.Consumer>
			{value => (
				<div className='modal-body'>
					{children}
				</div>)}
		</ModalContext.Consumer>
	);
};

const Footer = ({children}) => {
	return (
		<div className='modal-footer'>
			{children}
		</div>
	);
};

const Modal = ({ children, isModalOpen, toggleModal, isClosableModal = true, isOverflowHidden = true, textParams={} }) => {
	
	const closeeOffModal = () => {
		isModalOpen && isClosableModal && toggleModal()
		console.log('clicked out side the modal');
	}

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
		<ModalContext.Provider
			value={{ isModalOpen, closeeOffModal, isClosableModal, isOverflowHidden, textParams }}>
			{isModalOpen &&
				(<div className='modal'>
					{children}
				</div>)}
		</ModalContext.Provider>
	);
};

Modal.Backdrop = Backdrop;
Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;