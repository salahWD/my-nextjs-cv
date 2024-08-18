"use client";

import { PropsWithChildren } from "react";

const Card: React.FC<PropsWithChildren> = ({ children }) => {

	return (
		<div
			className="overflow-hidden relative duration-300 border rounded-xl bg-black/10 hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600"
		>
			{children}
		</div>
	);
};

export default Card;