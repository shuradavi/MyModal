import React, { createContext, useState } from 'react';
import './App.css';
import Modal from './component/Modal/Modal';
import { ModalContext } from './context/context';

const App = () => {
	const [modal, setModal] = useState(false)
	const toggleModal = () => {
		console.log('clicked toggle');
		setModal(!modal)
	}

	return (
		<div className='App'>
			<button style={{marginBottom: '15px'}} onClick={toggleModal}>Open</button>
			<ModalContext.Provider value={modal}>
				<Modal toggleModal={toggleModal}>
					<Modal.Backdrop props={toggleModal}/>
					<div className='modal-container'>
						<Modal.Header>Быстрые ставки + большие выигрыши</Modal.Header>
						<Modal.Body>Зарегистрироваться и получить фрибет</Modal.Body>
						<Modal.Body>Пригласить друга</Modal.Body>
						<Modal.Footer>Ваши оценки</Modal.Footer>
					</div>
				</Modal>
			</ModalContext.Provider>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, doloremque, aliquam alias quos, amet temporibus enim ad at tempore quas repudiandae dolorem delectus voluptate! Sapiente, at quia. In nisi odio hic delectus aut laboriosam rem corrupti expedita consequuntur deleniti optio blanditiis praesentium facilis explicabo quae quibusdam illo, suscipit iste. Error nesciunt repudiandae rem accusamus ducimus vitae veniam exercitationem id itaque, at delectus amet! Temporibus officia quidem tempora atque dicta a consequatur consectetur? Porro ab ad vitae nam veniam error animi corporis quibusdam doloremque dignissimos nobis aliquam quae magni perspiciatis asperiores minima, numquam nemo blanditiis ut saepe, natus delectus ea? Assumenda.
		</div>
	);
};

export default App;