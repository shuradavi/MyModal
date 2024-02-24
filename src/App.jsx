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
			<Modal modal={modal} toggleModal={toggleModal}>
				<Modal.Backdrop />
				<Modal.Content>
					<Modal.Header>Быстрые ставки + большие выигрыши</Modal.Header>
					<Modal.Body>Зарегистрироваться и получить фрибет</Modal.Body>
					<Modal.Footer>Ваши оценки</Modal.Footer>
					<Modal.Drawer drawer={drawer} toggleDrawer={toggleDrawer}>
						<Modal.Drawer.Content>
							<Modal.Drawer.Header></Modal.Drawer.Header>
							<Modal.Drawer.Body></Modal.Drawer.Body>
							<Modal.Drawer.Footer></Modal.Drawer.Footer>
						</Modal.Drawer.Content>
					</Modal.Drawer>
				</Modal.Content>
				
			</Modal>
		</div>
	);
};

export default App;