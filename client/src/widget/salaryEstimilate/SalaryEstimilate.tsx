import styles from "./salaryEstimilate.module.scss"
import denwaIcon from "/public/assets/images/denwa-icon.svg"
import Button from "src/shared/UI/button/Button"
export const SalaryEstimilate = () => {
   return (
      <div>
         <div className={styles.wrapper}>
            <div className={styles.flexDiv}>
               <img src={denwaIcon} alt={denwaIcon} /> {/*img*/}
               <div className={styles.container}>
                  <h4>Minimum salary</h4>
                  <h3>$4.58K</h3> {/*minSalary*/}
               </div>
            </div>
            <p className={styles.specialty}>Senior UI Designer</p> {/*Specialty*/}
            <div className={styles.salaryEstimilateContainer}>
                <div className={styles.rangeSalaryWrapp}>
                    <p>
                        LastWork <span>4680$</span> - <span>12000$</span> {/*minSalary*/} {/*maxSalary*/}
                    </p>
                </div>
                <p className={styles.description}>{/*description*/}
                    We are suck dicks of rodion eugene and disa We are suck dicks of
                    rodion eugene and disa We are suck dicks of rodion eugene and
                    disa
                </p>

                <div className={styles.groupBtns}>
                    <Button text="Kotlin" type="filledDark" disabled={true}/>
                    <Button text="Frontend developer" type="filledDark" disabled={true}/>
                    <Button text="Software Engineer" type="filledDark" disabled={true}/>
                </div>
            </div>
         </div>
      </div>
   )
}

export default SalaryEstimilate
