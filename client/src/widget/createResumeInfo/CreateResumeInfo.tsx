import styles from './createResumeInfo.module.scss'
import Button from 'src/shared/UI/button/Button'
export const CreateResumeInfo = () => {
  return (
    <div className={styles.wrapper}>
        <h2>
          Создайте резюме для 
          поиска работы
        </h2>
        <h3>
         Наша цель - помочь вам выделиться из толпы соискателей
         и увеличить ваши шансы на успешное трудоустройство. 
         Начните создавать свое резюме сейчас и откройте двери к 
         новым возможностям в вашей карьере.
        </h3>
        <Button text='Создать резюме' type='filledLight'/>

    </div>
  )
}

export default CreateResumeInfo
