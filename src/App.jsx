import React, { useState } from 'react';
import './App.css';
import { Modal } from './component/Modal/Modal';
import { DrawerContext, ModalContext } from './context/context';

const App = () => {
	const [modal, setModal] = useState(false)
	const [drawer, setDrawer] = useState(false)

	const toggleModal = () => {
		console.log('clicked toggle');
		setModal(!modal)
	}
	const toggleDrawer = () => {
		console.log('clicked toggle drawer');
		setDrawer(!drawer)
	}

	return (
		<div className='App'>
			<button style={{marginBottom: '15px'}} onClick={toggleModal}>Open</button>
			<ModalContext.Provider value={modal}>
				<DrawerContext.Provider value={drawer}>
					<Modal toggleModal={toggleModal}>
						<Modal.Backdrop props={toggleModal}/>
						<div className='modal-container'>
							<Modal.Header>Быстрые ставки + большие выигрыши</Modal.Header>
							<Modal.Body props={toggleDrawer}>Зарегистрироваться и получить фрибет</Modal.Body>
							<Modal.Body>Пригласить друга</Modal.Body>
							<Modal.Footer>Ваши оценки</Modal.Footer>
						</div>
					</Modal>
				</DrawerContext.Provider>	
			</ModalContext.Provider>
		</div>
	);
};

export default App;