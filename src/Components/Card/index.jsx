import React from 'react'
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"


import styles from"./index.module.css"


const Card = () => {
  return (
    <>
    <div>
    <div className={styles.cardd}>
    <div className={styles.cardContainer}>
    <div className={styles.card}>
    <div className={styles.cardImage}>
    <img src={image1}alt='img'/>
    </div>
    <div className={styles.cardContent}>
    <div className={styles.textContainer}>
    <h5 className={styles.title}>Solo Booking</h5>
    <p className={styles.description}>Réserver 1 place</p>
    </div>
    </div>
    </div>
    </div>

    <div className={styles.cardContainer}>
    <div className={styles.card}>
    <div className={styles.cardImage}>
    <img src={image2}alt='img'/>
    </div>
    <div className={styles.cardContent2}>
    <div className={styles.textContainer2}>
    <h5 className={styles.title2}>Double booking</h5>
    <p className={styles.description2}>Réserver 2 place</p>
    </div>
    </div>
    </div>
    </div>

    <div className={styles.cardContainer}>
    <div className={styles.card}>
    <div className={styles.cardImage}>
    <img src={image3}alt='img'/>
    </div>
    <div className={styles.cardContent}>
    <div className={styles.textContainer}>
    <h5 className={styles.title}>Trio booking</h5>
    <p className={styles.description}>Réserver 3 place</p>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </>
   
  )
}

export default Card