import React from "react";

const Loader = () => {
	return (
		<div className="flex items-center justify-center fixed top-0 left-0 h-screen w-full bg-[rgba(0,0,0,0.8)] z-50">
			<div className="custom-loader grid h-[10rem] w-[10rem]" />
		</div>
	);
};

export default Loader;
