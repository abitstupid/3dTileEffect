import styles from "../styles/TileEffectFramer.module.scss";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function TileEffectFramer() {
	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const rotateX = useTransform(y, [-0.5, 0.5], ["13deg", "-13deg"]);

	const rotateY = useTransform(x, [-0.5, 0.5], ["13deg", "-13deg"]);

	function handleMouse(e) {
		const rect = e.target.getBoundingClientRect();

		const width = rect.width;
		const height = rect.height;

		const mouseX = e.clientX - rect.left;
		const mouseY = e.clientY - rect.top;

		const xPercent = mouseX / width - 0.5;
		const yPercent = mouseY / height - 0.5;
		x.set(xPercent);
		y.set(yPercent);
	}

	function handleMouseLeave() {
		x.set(0);
		y.set(0);
	}

	return (
		<>
			<div className={`${styles.tiltContainer}`}>
				<motion.div
					style={{ transformStyle: "preserve-3d", rotateX, rotateY }}
					className={`${styles.tilt}`}
					onMouseMove={handleMouse}
					onMouseLeave={handleMouseLeave}
				>
					This is a tilted tile effect using Framer!
				</motion.div>
			</div>
		</>
	);
}
