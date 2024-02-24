export const Backdrop = ({ props, isClosableModal = true }) => {
	if (isClosableModal) {
		return <div className='overlay' onClick={props}/>
	} else {
		return <div className='overlay'/>
	}
};

export const Header = ({ children }) => {
	return <div className='header-container'>{children}</div>
};

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