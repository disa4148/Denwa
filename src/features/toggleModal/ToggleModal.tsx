import React, { useState } from 'react'

import Button from 'src/shared/UI/button/Button';

export const OpenModal = () => {
    const [modalActive, setModalActive] = useState(false);

    const toggleModal = () => {
        setModalActive(!modalActive)
        console.log(modalActive)
    }
  return (
   <div>
        <div onClick={() => toggleModal()}>
            <Button type='Ghost' text='Sign In' />
        </div>
        {modalActive && (
            <div>
                <h1>Modal</h1>
            </div>
        )}
    </div>
  )
}