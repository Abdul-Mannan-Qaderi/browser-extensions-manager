import React from "react";

export default function FilterButton({ text }) {
	return (
		<button
			className="
			px-5 py-2	
		 bg-white hover:bg-slate-100
		 dark:bg-Neutral-700 dark:hover:bg-slate-700 dark:border-Neutral-600
		 cursor-pointer rounded-full border-2 border-slate-300
		 focus-visible:border-Neutral-0
		 dark:focus-visible:border-Neutral-700
		 	focus-visible:ring-0
			focus-visible:outline-1
			focus-visible:outline-offset-3
			focus-visible:outline-Red-500
			"
		>
			{text}
		</button>
	);
}
