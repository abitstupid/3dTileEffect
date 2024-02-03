import { useState } from "react";
import styles from "../styles/TileEffectFramer.module.scss";

export default function TileEffect() {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);

	function handleMouse(e) {
		const rect = e.target.getBoundingClientRect();

		const width = rect.width;
		const height = rect.height;

		const mouseX = e.clientX - rect.left;
		const mouseY = e.clientY - rect.top;

		const xPercent = (mouseX / width - 0.5) * -20;
		const yPercent = (mouseY / height - 0.5) * -20;

		setX(xPercent);
		setY(yPercent);
	}

	function handleMouseLeave() {
		setX(0);
		setY(0);
	}

	return (
		<>
			<div className={`${styles.tiltContainer}`}>
				<div
					style={{
						transformStyle: "preserve-3d",
						transform: `rotateX(${y}deg) rotateY(${x}deg)`,
					}}
					className={`${styles.tilt}`}
					onMouseMove={handleMouse}
					onMouseLeave={handleMouseLeave}
				>
					This is a tilted tile effect with no libraries!
				</div>
			</div>
		</>
	);
}
