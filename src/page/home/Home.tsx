import ToggleModal from "src/features/toggleModal/ToggleModal"
import styles from "./Home.module.scss"
import ScrollButton from "src/features/scrollButton/ScrollButton"
import SignUpForm from "src/shared/UI/SignUpForm/SignUpForm"
import DownArrow from "src/shared/UI/downArrow/DownArrow"
import ProfileAdvertising from "src/widget/profileAdvertising/ProfileAdvertising"
import { ProfileAdverItems } from "src/entities/profileAdverItems/ProfileAdverItems"

import { GroupBtnsAdvertising } from "src/widget/groupBtnsAdvertising/GroupBtnsAdvertising"

const Home: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.welcomingWrapper}>
        <h1 className={styles.welcomeMainHeader}>
          Find Your Next Gig with Our Freelance Job Platform
        </h1>
        <h3>
          Streamline your freelance business with our job finder platform. Find
          opportunities, manage workloads, and maximize earnings.
        </h3>
        <div className={styles.scrollButtons}>
          <div className={styles.modalButton}>
            <ToggleModal
              type='filledLight'
              text='Start free trial'
              form={<SignUpForm />}
            />
          </div>
          <ScrollButton text='Explore Denwa' type='filledDark' path='123' />
        </div>
        <DownArrow />
      </div>
      <div className={styles.futuresWrapper}>
        <div className={styles.leftElements}>
          <h3>Work Experience</h3>
          <div className={styles.profileAdvertisingWrapper}>
            {ProfileAdverItems.map(item => (
              <ProfileAdvertising
                img={item.image}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
          <div className={styles.bottomElements}>
            <h3>Work Experience</h3>
              <GroupBtnsAdvertising />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
