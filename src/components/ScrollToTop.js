import React, { useState, useEffect, useCallback } from "react";
import { BiChevronUp } from "react-icons/bi";
import { useStateContext } from "../context/ContextProvider";

const ScrollToTop = () => {
	const [visible, setVisible] = useState(false);
	const { activeTheme } = useStateContext();
	const bgColor =  activeTheme === 'dark' ? 'bg-gray-700' : 'bg-[rgb(186,183,183)]'
	
	
	const toggleVisible = useCallback(() => {
		const scrolled = document.documentElement.scrollTop;
		setVisible(scrolled > 350);
	  }, []);
	  const scrollToTop = () => {
		window.scrollTo({
		  top: 0,
		  behavior: "smooth",
		});
	  };
	
	  useEffect(() => {
		const handleScroll = () => {
		  toggleVisible();
		};
	
		window.addEventListener("scroll", handleScroll);
	
		return () => {
		  window.removeEventListener("scroll", handleScroll);
		};
	  }, [toggleVisible]);

	return (
		<div className="group">
			<button
				onClick={scrollToTop}
				className={
					visible
						? `${bgColor} fixed bottom-[5%] right-[7%] z-10 cursor-pointer flex items-center justify-center hover:bg-[var(--accent-color)] h-[5.5rem] w-[5.5rem] shadow-[2px_2px_10px_rgba(0,0,0,0.2)] rounded-full border-0 outline-0 transition animate__animated animate__bounceInUp active:translate-y-[2px]`
						: "hidden"
				}>
				<BiChevronUp className="text-white text-[4.5rem]" />
			</button>

			<span className="hidden group-hover:inline fixed right-[12%] bottom-[5.5%] z-10 text-[1.4rem] py-[0.8rem] px-[1.3rem] bg-black text-white rounded-[0.7rem] after:absolute after:right-[-15%]  after:border-l-black after:border-[10px] after:border-solid after:border-y-transparent after:border-r-transparent">
				Back to Top
			</span>
		</div>
	);
};

export default ScrollToTop;
