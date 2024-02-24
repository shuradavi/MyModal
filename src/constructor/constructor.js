import { useContext } from "react";
import { DrawerContext, ModalContext } from "../context/context";
import { Drawer } from "../component/Drawer/Drawer";

export const Backdrop = ({ props, isClosableModal = true }) => {
	if (isClosableModal) {
		return <div className='overlay' onClick={props}/>
	} else {
		return <div className='overlay'/>
	}
};

export const Header = ({ children, onCloseHandler }) => {
	return <div className='header-container'>{children}</div>
};


const ModalHeader = ({children}) => {
	const context = useContext(ModalContext);
	return <Header props={context}>{children}</Header>
}

const overlayHeader = ({children}) => {
	const context = useContext(DrawerContext);
	return <Header props={context}>{children}</Header>
}

export const Body = ({props, children}) => {
	return (
		<div onClick={props} className='body-container' style={{ cursor: 'pointer' }}>
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
