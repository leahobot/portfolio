import React, {useState, Fragment} from "react";
import {BiChevronUp} from "react-icons/bi";

const ScrollToTop = () => {
	const [visible, setVisible] = useState(false);
	const [modal, setModal] = useState(false);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 350) {
			setVisible(true);
		} else if (scrolled <= 350) {
			setVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	window.addEventListener("scroll", toggleVisible);

	return (
		<Fragment>
			<button
				onMouseOver={() => setModal(true)}
				onMouseOut={() => setModal(false)}
				onClick={scrollToTop}
				className={
					visible ? "scrollBtn animate__animated animate__bounceInUp" : "none"
				}>
				<BiChevronUp size={40} />
			</button>
			{modal && <span className='scroll-modal'>Back to Top</span>}
		</Fragment>
	);
};

export default ScrollToTop;
