import React from 'react'
import styles from "./index.module.css"
import image4 from"../../assets/image4.png"

const Wallet = () => {
  return (
    <>
    <div className={styles.body}>
    <h3 className={styles.heading}>Porte-monnaie</h3>
    <div className={styles.box}>
      <p className={styles.p}>Montant disponible</p>
    <p className={styles.price}>800 FCFA</p>
    <button className={styles.button}>Recharger</button>
    </div>
    <p className={styles.liste}>Liste des Transactions</p>
    <div className={styles.list}>
    <img src={image4}alt='img'/>
    <div >
    <p>Duo DynamiqueTrajet </p>
    <p>30 janvier 2023, 6:30 AM</p>
    </div>
    <p>1 000 FCFA</p>
    </div>
    </div>
    

    </>
  )
}

export default Wallet