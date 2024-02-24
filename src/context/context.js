import { createContext, useContext } from "react"

export const ModalContext = createContext(null);

export const useModalContext = () => {
	const modal = useContext(ModalContext);
	if (modal === null) {
		throw new Error('useModalContext must be used in ModalContext.Provider')
	}
	return modal;
}

export const DrawerContext = createContext(null);

export const useDrawerContext = () => {
	const drawer = useContext(DrawerContext);
	if (drawer === null) {
		throw new Error('useDrawerContext must be used in DrawerContext.Provider')
	}
	return drawer
}

// export const DrawerContainerContext = createContext(null);

// export const useDrawerContainerContext = () => {
// 	const drawer = useContext(DrawerContainerContext);
// 	if (drawer === null) {
// 		throw new Error('useDrawerContainerContext must be used in ModalContext.Provider')
// 	}
// }