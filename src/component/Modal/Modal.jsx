import React, { createContext, useState } from 'react';

const ModalContext = createContext();

const Backdrop = () => {
	return (
		<ModalContext.Consumer>
			{value => (
				value.isOpen && <div onClick={value.closeeOffModal} className='overlay'/>
			)}
			
		</ModalContext.Consumer>
	);
};

const Header = ({children}) => {
	return (
			<div>
				{children}
			</div>
	);
};

const Body = ({children}) => {
	return (
		<ModalContext.Consumer>
			{value => (<div>{children}</div>)}
		</ModalContext.Consumer>
	);
};

const Footer = ({children}) => {
	return (
		<div>
			{children}
		</div>
	);
};

const Modal = ({ children, isOpen, isClosableModal=true, isOverflowHidden=true, toggleModalStatus }) => {

	// const [isModalOpen, toggleModalStatus] = useState(isOpen);

	if (isOpen && isOverflowHidden) {
		document.body.classList.add('active-modal')
	} else {
		document.body.classList.remove('active-modal')
	}
	
	const closeeOffModal = () => {
		isOpen && isClosableModal && toggleModalStatus(false)
		console.log('clicked out side the modal');
	}

	

	return (
		<ModalContext.Provider
			value={{ isOpen, closeeOffModal, isClosableModal, isOverflowHidden }}>
			{isOpen &&
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