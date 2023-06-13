import ToggleModal from "src/features/toggleModal/ToggleModal"
import styles from "./Home.module.scss"
import ScrollButton from "src/features/scrollButton/ScrollButton"
import SignUpForm from "src/shared/UI/SignUpForm/SignUpForm"

const Home: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.welcomingWrapper}>
        <h1 className={styles.welcomeMainHeader}>Find Your Next Gig with Our Freelance Job Platform</h1>
        <h3>
          Streamline your freelance business with our job finder platform. Find
          opportunities, manage workloads, and maximize earnings.
        </h3>
        <div className={styles.scrollButtons}>
          <ToggleModal
            type='filledLight'
            text='Start free trial'
            form={<SignUpForm />}
          />
          <ScrollButton text='Explore Denwa' type='filledDark' path='123' />
        </div>
      </div>
    </div>
  )
}

export default Home
