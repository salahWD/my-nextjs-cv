"use client";
import { HiArrowDown } from "react-icons/hi2";
import React, { MouseEventHandler, useEffect, useRef, useState, } from "react";

type GoToBtnProps = {
	target?: string,
};

const GoToBtn = ({target="#"}: GoToBtnProps) => {

	// useEffect(() => {
	// 	console.log(target)
	// }, []);

	const clickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
		console.log(event)
		console.log(target)
	}
	
	return (
		<button onClick={clickHandler} className="animate-bounce h-14 w-9 border border-slate-100 rounded-full flex justify-center items-center">
			<HiArrowDown size="28" color="#f1f5f9" className="animate-bounce duration-300" />
		</button>
	);
};

export default GoToBtn;