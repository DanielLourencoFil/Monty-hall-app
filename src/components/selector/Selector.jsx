import styles from "./selector.module.css";

import { useEffect, useState } from "react";
import Link from "next/link";

function Selector() {
	const [selection, setSelection] = useState({ ports: 3, prized: 1 });

	// useEffect(() => {
	// 	if (selection.prized > selection.ports) {
	// 		setSelection((prev) => {
	// 			return { ...prev, prized: prev.ports };
	// 		});
	// 	}
	// 	if (selection.ports < selection.prized) {
	// 		setSelection((prev) => {
	// 			return { ...prev, ports: prev.prized };
	// 		});
	// 	}
	// }, [selection]);
	const handleSelection = (change) => {
		if (change === "dec-port") {
			if (selection.ports <= selection.prized) return;
			setSelection((prev) => {
				if (prev.ports <= 3) {
					return { ...prev, ports: 3 };
				} else {
					return { ...prev, ports: prev.ports - 1 };
				}
			});
		}
		if (change === "inc-port") {
			setSelection((prev) => {
				if (prev.ports >= 10) {
					return { ...prev, ports: 10 };
				} else {
					return { ...prev, ports: prev.ports + 1 };
				}
			});
		}
		if (change === "dec-prized") {
			setSelection((prev) => {
				if (prev.prized <= 1) {
					return { ...prev, prized: 1 };
				} else {
					return { ...prev, prized: prev.prized - 1 };
				}
			});
		}
		if (change === "inc-prized") {
			if (selection.prized >= selection.ports) return;
			setSelection((prev) => {
				if (prev.prized >= 10) {
					return { ...prev, prized: 10 };
				} else {
					return { ...prev, prized: prev.prized + 1 };
				}
			});
		}
	};

	return (
		<div className={styles.portsFormWrapper}>
			<div className={`${styles.formSquare} ${styles.title}`}>
				<h1>monty hall</h1>
			</div>
			<div className={`${styles.formSquare} ${styles.counter}`}>
				<h4>How many ports?</h4>
				<p>{selection.ports}</p>
				<div className={styles.btnsWrapper}>
					<button onClick={() => handleSelection("dec-port")}>-</button>
					<button onClick={() => handleSelection("inc-port")}>+</button>
				</div>
			</div>

			<div className={`${styles.formSquare} ${styles.counter}`}>
				<h4>Prized Port?</h4>
				<p>{selection.prized}</p>
				<div className={styles.btnsWrapper}>
					<button onClick={() => handleSelection("dec-prized")}>-</button>
					<button onClick={() => handleSelection("inc-prized")}>+</button>
				</div>
			</div>
			<Link href={`/${selection.ports}/${selection.prized}`}>
				<div className={`${styles.formSquare} ${styles.title} ${styles.start}`}>
					<h1>Start</h1>
				</div>
			</Link>
		</div>
	);
}

export default Selector;
