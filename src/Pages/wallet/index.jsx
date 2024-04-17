import React from "react";
import styles from "./index.module.css";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import home from "../../assets/home.png";
import traject from "../../assets/traject.png";
import camera from "../../assets/camera.png";
import person from "../../assets/person.png";

const Wallet = () => {
	return (
		<div className={styles.wallet}>
			<div>
				<div className={styles.flexboxx}>
					<h1>Porte-monnaie</h1>
					<div className={styles.flexbox}>
						<p className={styles.parag}>Montant disponible</p>
						<p className={styles.price}>800 FCFA</p>
						<button className={styles.button}>Recharger</button>
					</div>
				</div>
				<p className={styles.liste}>Liste des Transactions</p>
        <hr className={styles.hr}/>
				<div className={styles.descr}>
					<div className={styles.flex}>
						<div className={styles.fleex}>
							<img className={styles.icons} src={image4} alt="img" />
							<div>
								<p className={styles.duo}>Duo DynamiqueTrajet </p>
								<p className={styles.date}>30 janvier 2023, 6:30 AM</p>
							</div>
						</div>
						<p className={styles.pricce}>1 000 FCFA</p>
					</div>
          <hr className={styles.hr}/>
					<div className={styles.flex}>
						<div className={styles.fleex}>
							<img className={styles.icons} src={image4} alt="img" />
							<div>
								<p className={styles.duo}>Trio Amical Trajet </p>
								<p className={styles.date}>23 janvier 2023, 5:00 PM</p>
							</div>
						</div>
						<p className={styles.pricce}>1 200 FCFA</p>
					</div>
          <hr className={styles.hr}/>
					<div className={styles.flex}>
						<div className={styles.fleex}>
							<img className={styles.icons} src={image5} alt="img" />
							<div>
								<p className={styles.duo}>Recharge </p>
								<p className={styles.date}>23 janvier 2023, 11:00 AM</p>
							</div>
						</div>
						<p className={styles.priccee}>3 000 FCFA</p>
					</div>
				</div>
        <hr className={styles.hr}/>

				<div className={styles.footer}>
					<img className={styles.ficons} src={home} alt="img" />
					<img className={styles.ficons} src={traject} alt="img" />
					<img className={styles.ficons} src={camera} alt="img" />
					<img className={styles.ficons} src={person} alt="img" />
				</div>
			</div>
		</div>
	);
};

export default Wallet;