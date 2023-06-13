import styles from "./Home.module.scss"


const Home: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.welcomingWrapper}>
        <h1>Find Your Next Gig with Our Freelance Job Platform</h1>
      </div>
    </div>
  )
}

export default Home
