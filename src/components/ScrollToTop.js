import React, { useState } from "react";
import { BiChevronUp } from "react-icons/bi";

const ScrollToTop = () => {
	const [visible, setVisible] = useState(false);

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
		<div className="group">
			<button
				onClick={scrollToTop}
				className={
					visible
						? "fixed bottom-[5%] right-[7%] z-10 cursor-pointer flex items-center justify-center bg-[rgb(186,183,183)] hover:bg-[var(--accent-color)] h-[4rem] w-[4rem] sm:h-[5rem] sm:w-[5rem] lg:h-[4rem] lg:w-[4rem] xl:h-[5.5rem] xl:w-[5.5rem] 2xl:h-[7rem] 2xl:w-[7rem] shadow-[2px_2px_10px_rgba(0,0,0,0.2)] rounded-full border-0 outline-0 transition-all animate__animated animate__bounceInUp active:translate-y-[2px]"
						: "hidden"
				}>
				<BiChevronUp className="text-white text-[3rem] sm:text-[4rem] lg:text-[3rem] xl:text-[4.5rem] 2xl:text-[6rem]" />
			</button>

			<span className="hidden lg:group-hover:inline fixed right-[20%] sm:right-[17%] lg:right-[12%] xl:right-[14%] 2xl:right-[12.5%] bottom-[5.5%] z-10 text-[1rem] sm:text-[1.4rem] lg:text-[1.2rem] xl:text-[1.5rem] 2xl:text-[1.9rem] px-[1rem] py-[0.6rem] sm:py-[0.8rem] lg:py-[0.6rem] xl:py-[0.8rem] 2xl:py-[1.2rem] sm:px-[1.3rem] lg:px-[1rem] xl:px-[1.3rem] 2xl:px-[1.7rem] bg-black text-white rounded-[0.5rem] sm:rounded-[0.7rem] lg:rounded-[0.5rem] xl:rounded-[0.7rem] 2xl:rounded-[1rem] after:absolute after:right-[-19%] sm:after:right-[-15%] sm:after:top-[25%] lg:after:right-[-17%] xl:after:right-[-15%] 2xl:after:right-[-17%] after:border-l-black after:border-[8px] 2xl:after:border-[12px] after:border-solid after:border-y-transparent after:border-r-transparent">
				Back to Top
			</span>
		</div>
	);
};

export default ScrollToTop;
