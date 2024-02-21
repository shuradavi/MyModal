import React, { useState } from 'react';
import './App.css';
import Modal from './component/Modal/Modal';
import { ModalContext } from './context/context';

const App = () => {
	const [isModalOpen, setIsOpen] = useState(false)
	const [isDrawerOpen, setDrawerStatus] = useState(false);

	const toggleModal = () => {
		setIsOpen(!isModalOpen)
	}

	// const showDrawer = () => {
	// 	console.log('toggle Drawer');
	// 	setDrawerStatus(!isDrawerOpen);
	// }

	return (
		<div className='App'>
			<button style={{marginBottom: '15px'}} onClick={toggleModal}>Open</button>
			<ModalContext.Provider value={isModalOpen}>
				<Modal isModalOpen={isModalOpen} toggleModal={toggleModal} textParams={{}} showDrawer={{}}>
					<Modal.Backdrop />
					<div className='modal-wrapper'>
						<Modal.Header>Быстрые ставки + большие выигрыши</Modal.Header>
						<Modal.Body>Зарегистрироваться и получить фрибет</Modal.Body>
						<Modal.Body>Пригласить друга</Modal.Body>
						<Modal.Footer>Ваши оценки</Modal.Footer>
					</div>
				</Modal>
			</ModalContext.Provider>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, mollitia! Provident vero odio earum molestiae commodi sequi! Perferendis necessitatibus praesentium sequi blanditiis a possimus alias sint consequuntur sit culpa, deserunt ullam magni magnam doloribus distinctio sed qui aliquam voluptatibus facilis? Voluptates iure adipisci, sequi corporis aperiam iste iusto rem quo quas ipsum velit enim exercitationem fugiat optio necessitatibus magni cumque esse nemo nihil 
	  </div>
  );
};

export default App;
