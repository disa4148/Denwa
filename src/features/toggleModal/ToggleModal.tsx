import React, { useState } from 'react'

import Button from 'src/shared/UI/button/Button';
import Modal from 'src/shared/UI/modal/Modal';

interface IModalSettings {
    type: "filledLight" | "Ghost" | "filledDark" | "notAllowedDark";
    text: string;
    form: React.ReactNode;
}

export const ToggleModal = ({type, text, form}: IModalSettings) => {
    const [modalActive, setModalActive] = useState(false);

    const toggledModal = () => {
        setModalActive(!modalActive)
    }
  return (
   <div>
        <div onClick={() => toggledModal()}>
            <Button type={type} text={text} />
        </div>
      
        {modalActive && (
            <div>
                <Modal ModalActive={true} toggledModal={() => {setModalActive(!modalActive)}}>
                    {form}
                </Modal>
            </div>
        )}
    </div>
  )
}

export default ToggleModal