import {useState, useEffect} from "react";

import "./bg-slider.scss";

export default function BgSlider() {
	const [disableScroll, setDisableScroll] = useState(false);

	useEffect(() => {
		if (disableScroll) {
			const documentScroll = window.scrollY;

			window.onscroll = () => {
				window.scrollTo(0, documentScroll);
			};
			console.log(disableScroll);
		} else {
			window.onscroll = null;
		}
	}, [disableScroll]);

	return (
		<div
			className='test'
			onMouseEnter={() => setDisableScroll(true)}
			onMouseLeave={() => setDisableScroll(false)}
		></div>
	);
}
