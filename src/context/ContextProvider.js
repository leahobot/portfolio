import React, {useContext, createContext, useState} from "react";

const StateContext = createContext();

export const ContextProvider = ({children}) => {
	const [activeTheme, setActiveTheme] = useState('dark');
	const activeColor =  activeTheme === 'dark' ? 'text-white' : 'text-[#141414]'
	const largeHeader = activeTheme === "dark" ? 'text-gray-800' : 'text-gray-200'
	const smallHeader = activeTheme === "dark" ? 'text-gray-400' : 'text-[#3F4144]'

	const setTheme = (theme) => {
		setActiveTheme(theme);
		localStorage.setItem("theme", theme);
	};

	return (
		<StateContext.Provider value={{
			activeTheme,
			setActiveTheme,
			setTheme,
			activeColor,
			largeHeader,
			smallHeader
		}}>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);