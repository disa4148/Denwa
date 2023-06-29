import styles from './createResumeInfo.module.scss'
import Button from 'src/shared/UI/button/Button'
export const CreateResumeInfo = () => {
  return (
    <div className={styles.wrapper}>
        <h2>
            Create a Winning Resume
            With Integrated Builder
        </h2>
        <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam.
        </h3>
        <Button text='Create Resume' type='filledLight'/>

    </div>
  )
}

export default CreateResumeInfo
