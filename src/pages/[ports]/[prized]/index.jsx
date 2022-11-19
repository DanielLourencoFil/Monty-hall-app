import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Port from "../../../components/Port/Port";
import styles from "./index.module.css";

export default function Ports() {
	const router = useRouter();
	const [isReset, setIsReset] = useState(false);
	const [isSelected, setIsSelected] = useState(0);

	//array with jsx ports components
	const renderPorts = (portsQuantity, prizedPort) => {
		let ports = [];
		for (let i = 0; i < portsQuantity; i++) {
			ports.push(
				<Port
					key={i}
					index={i}
					prizedPort={prizedPort}
					isReset={isReset}
					isSelected={isSelected}
					setIsSelected={setIsSelected}
				/>
			);
		}
		return ports;
	};
	const ports = renderPorts(+router.query.ports, +router.query.prized);

	const handleReset = () => {
		setIsReset(true);
		setTimeout(() => {
			setIsReset(false);
		}, 200);
	};

	return (
		<div className={styles.mainCenter}>
			<div className={styles.portsWrapper}>{ports}</div>
			<Link href="/">
				<button className={styles.resetBtn} onClick={handleReset}>
					play again
				</button>
			</Link>
		</div>
	);
}
