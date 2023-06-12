import React from 'react'
import styles from './Modal.module.scss'
interface IStateModalWindow {
  ModalActive: boolean;
  children: React.ReactNode;
  toggledModal:() => void;
}


export const Modal = ({ModalActive, children, toggledModal}: IStateModalWindow) => {
  
  return (
    <div
    className={ModalActive ? styles.wrapperActive  : styles.wrapper}
    onClick={toggledModal}>
    <div className={styles.content} onClick={e => e.stopPropagation()}>
      {children}
    </div>
  </div>
  )
}
export default Modal
