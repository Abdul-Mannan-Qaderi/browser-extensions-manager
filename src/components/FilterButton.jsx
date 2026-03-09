import React from "react";

export default function FilterButton({ text }) {
	return (
		<button className="px-5 py-2 bg-white hover:bg-slate-100 dark:bg-Neutral-700 dark:hover:bg-slate-700 cursor-pointer rounded-full border-2 border-slate-300 dark:border-Neutral-600">
			{text}
		</button>
	);
}
