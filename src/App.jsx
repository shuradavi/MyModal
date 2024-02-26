import React, { useState } from 'react';
import './App.css';
import { Modal } from './component/Modal/Modal';




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
			<button style={{ marginBottom: '15px' }} onClick={toggleModal}>Open</button>
			{modal && <Modal modal={modal} onCloseHandler={toggleModal} drawer={drawer}>
				<Modal.Backdrop />
				<Modal.Content>
					<Modal.Header>Modal Header</Modal.Header>
					<Modal.Body>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis labore explicabo laboriosam, officiis eaque, tempore doloribus minus porro ad nam vel culpa ipsum illum. Soluta dolores nam inventore assumenda consectetur.
						<Modal.DrawerOpenButton text='OPEN DRAWER' onOpenDrawer={toggleDrawer} />
					</Modal.Body>
					<Modal.Footer>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, vitae?
					</Modal.Footer>
					{drawer && <Modal.Drawer drawer={drawer} onCloseHandler={toggleDrawer}>
						<Modal.Drawer.Content>
							<Modal.Drawer.Header>Drawer Header</Modal.Drawer.Header>
							<Modal.Drawer.Body>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, architecto hic qui dolorem possimus numquam nemo cupiditate adipisci vel itaque cum praesentium doloremque repellat quasi neque eos tempore ea illum!
							</Modal.Drawer.Body>
							<Modal.Drawer.Footer>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, facilis.
							</Modal.Drawer.Footer>
						</Modal.Drawer.Content>
					</Modal.Drawer>}
				</Modal.Content>
			</Modal>}
		</div>
	);
};

export default App;