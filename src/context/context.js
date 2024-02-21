import { createContext, useContext } from "react"

export const ModalContext = createContext();

export const useModalContext = () => {
	const modal = useContext(ModalContext);

	if (!modal) {
		throw new Error('useModalContext must be used in ModalContext.Provider')
	}
	return modal;
}