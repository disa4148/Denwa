import ToggleModal from "src/features/toggleModal/ToggleModal"
import styles from "./Home.module.scss"
import ScrollButton from "src/features/scrollButton/ScrollButton"
import SignUpForm from "src/shared/UI/SignUpForm/SignUpForm"
import DownArrow from "src/shared/UI/downArrow/DownArrow"
import ProfileAdvertising from "src/widget/profileAdvertising/ProfileAdvertising"

import { GroupBtnsAdvertising } from "src/widget/groupBtnsAdvertising/GroupBtnsAdvertising"
import WindowScroll from "src/features/windowScroll/WindowScroll"

import { CarouselItems } from "src/entities/carouselItems/CarouselItems"

import Advantages from "src/widget/advantages/Advantages"

import CreateResumeInfo from "src/widget/createResumeInfo/CreateResumeInfo"
import SalaryEstimilate from "src/widget/salaryEstimilate/SalaryEstimilate"

const Home: React.FC = () => {
   return (
      <div className={styles.wrapper}>
         <WindowScroll />
         <div className={styles.welcomingWrapper}>
            <h1 className={styles.welcomeMainHeader}>
            Найдите работу на нашей платформе для фрилансеров.
            </h1>
            <h3>
               Добивайтесь большего успеха в фрилансе благодаря нашей простой, удобной и эффективной платформе поиска работы.
            </h3>
            <div className={styles.scrollButtons}>
               <div className={styles.modalButton}>
                  <ToggleModal
                     type='filledLight'
                     text='Пробный период'
                     form={<SignUpForm />}
                  />
               </div>
                  <ScrollButton
                     text='Попробовать Denwa'
                     type='filledDark'
                     path='futuresWrapper'
                  />
            </div>
            <DownArrow marginTop={"38vh"} />
         </div>

         <div className={styles.futuresWrapper} id='futuresWrapper'>
            <CarouselItems />
            <div className={styles.podWrapper}>
               <div className={styles.leftElements}>
                  <h3>Лучшие исполнители</h3>
                  <div className={styles.profileAdvertisingWrapper}>
                     <ProfileAdvertising />
                  </div>
                  <div className={styles.bottomElements}>
                     <h3>Категории работ</h3>
                     <GroupBtnsAdvertising />
                  </div>
               </div>

               <div className={styles.rightElements}>
                  <Advantages />
               </div>
            </div>
            <DownArrow marginTop={"38vh"} />
         </div>

         <div className={styles.createResumeInfoWrapper}>
            <div className={styles.resumeWrapper}>
               <CreateResumeInfo />
               <div className={styles.flexWrap}>
                  <h4>Salary Estimilate</h4>
                  <SalaryEstimilate />
               </div>
            </div>
            <DownArrow marginTop={"20vh"} />
         </div>
      </div>
   )
}

export default Home
