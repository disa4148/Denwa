import React, { useState } from 'react'

import Button from 'src/shared/UI/button/Button';
import Modal from 'src/shared/UI/modal/Modal';

export const ToggleModal = () => {
    const [modalActive, setModalActive] = useState(false);

    const toggledModal = () => {
        setModalActive(!modalActive)
        
    }
  return (
   <div>
        <div onClick={() => toggledModal()}>
            <Button type='Ghost' text='Sign In' />
        </div>
        {modalActive && (
            <div>
                <Modal ModalActive={true} toggledModal={() => {setModalActive(!modalActive)}}>
                    <div>Modal content</div>
                </Modal>
            </div>
        )}
    </div>
  )
}

export default ToggleModal