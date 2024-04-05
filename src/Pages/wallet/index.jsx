import React from 'react'
import styles from "./index.module.css"

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
    <p>Liste des Transactions</p>
    </div>
    

    </>
  )
}

export default Wallet