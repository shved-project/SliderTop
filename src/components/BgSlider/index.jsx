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
		<section className='bg-slider'>
			<div className='bg-slider__image'></div>
			<div className='bg-slider__text'>
				<img className='bg-slider__text-image' src='/src/images/crescent.svg' alt='' width='400' height='400' />
				<h3 className='bg-slider__title'>Подземный паркинг</h3>
				<p className='bg-slider__description'>
					<b>Под каждым домом располагается паркинг с зарядками для электрокаров.</b> Спуститься в него можно
					на лифте прямо с жилого этажа. 
				</p>
			</div>
		</section>
	);
}
