import {useState} from "react";

import "./planet-slider.scss";

export default function PlanetSlider() {
	const [disableScroll, setDisableScroll] = useState(false);

	if (disableScroll) {
		const documentScroll = window.scrollY;

		window.onscroll = () => {
			window.scrollTo(0, documentScroll);
		};
		console.log(disableScroll);
	} else {
		window.onscroll = null;
	}

	return (
		<div
			className='test'
			onMouseEnter={() => setDisableScroll(true)}
			onMouseLeave={() => setDisableScroll(false)}
		></div>
	);
}
