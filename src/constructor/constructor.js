import { ModalContext, useModalContext } from "../context/context";
import Button from "../component/Button/Button";


export const Backdrop = () => {
	const modalContext = useModalContext(ModalContext);
	if (modalContext.isClosableModal) {
		return <div className="backdrop" onClick={modalContext.onCloseHandler}/>
	} else return <div className="backdrop"/>
	
}
export const Content = ({ children }) => {
	return <>{children }</>
}
export const Header = ({ children }) => {
	return <>{children}</>
};
export const Body = ({ children }) => {
	return <>{children}</>
};
export const Footer = ({ children }) => {
	return (
		<div className="footer-container">
			{children}
		</div>
	)
};

export const ModalHeader = ({ children }) => {
	const context = useModalContext(ModalContext);
	return (
		<Header>
			<div className="modalHeader-wrapper">
				{children}
			</div>
		</Header>
	)
};

export const ModalBody = ({ children }) => {
	const context = useModalContext(ModalContext);
	return (
		<Body>
			<div className="modalBody-wrapper">
				{children}
			</div>
		</Body>)
};

export const ModalFooter = ({ children }) => {
	const context = useModalContext(ModalContext);
	return (
		<Footer>
			{children}
		</Footer>
	)
}

export const ModalContent = ({ children }) => {
	const context = useModalContext(ModalContext);
	return (
		<Content>
			<div className="modalContent-wrapper">
				<div className="modalContent">
					{children}
				</div>
			</div>
		</Content>
	)
}

export const DrawerContent = ({ children }) => {
	return (
		<Content>
			<div className="drawerContent-wrapper">
				<div className="drawerContent">
					{children}
				</div>
			</div>
		</Content>
	)
}

export const DrawerHeader = ({ children }) => {
	return (
		<Header>
			<div className="drawerHeader-wrapper">
				{children}
			</div>
		</Header>
	)
};

export const DrawerBody = ({ children }) => {
	return (
		<Body>
			<div className="drawerBody-wrapper">
				{children}
			</div>
		</Body>)
};

export const DrawerOpenButton = ({  text, onOpenDrawer }) => {
	return (
		<Button onOpen={onOpenDrawer}>{text}</Button>
	);
}
// export const DrawerHeader = ({ children }) => {
// 	const context = useDrawerContext(DrawerContext);
// 	return <Header>{children}</Header>
// }