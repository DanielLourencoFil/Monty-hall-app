import styles from "./port.module.css";
import { useEffect, useState } from "react";
import PresentBox from "../presentBox/PresentBox";

function Port({ index, prizedPort, isReset, isSelected, setIsSelected }) {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (isReset) {
			setIsOpen(false);
			setIsSelected(0);
		}
	}, [isReset, setIsSelected]);

	const handleSelected = (e, number) => {
		const knot = e.target.classList.contains(styles.knot);
		if (knot) return;
		if (isOpen) return;

		setIsSelected(number);
		if (number === isSelected) {
			setIsSelected(0);
		}
	};
	const handleOpen = () => {
		setIsOpen(!isOpen);
		setIsSelected(isSelected);
	};
	return (
		<div className={styles.portWrapper}>
			<div
				className={`${styles.port}
                ${isOpen ? styles.open : ""} 
                ${isSelected === index + 1 ? styles.selected : ""}`}
				onClick={(e) => handleSelected(e, index + 1)}
			>
				<p
					className={`${styles.number} ${
						isSelected === index + 1 ? styles.selected : ""
					} ${isOpen ? styles.open : ""}`}
				>
					{index + 1}
				</p>
				<div
					className={`${styles.knot} ${
						isSelected === index + 1 ? styles.selected : ""
					} ${isOpen ? styles.open : ""}`}
					onClick={handleOpen}
				></div>
				{isOpen && prizedPort === index + 1 && <PresentBox />}
			</div>
			<div className={styles.base}></div>
		</div>
	);
}

export default Port;
