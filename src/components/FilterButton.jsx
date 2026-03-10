export default function FilterButton({ text, func }) {
	return (
		<button
			onClick={func}
			className={`
			px-5 py-2	bg-white
			md:px-7 md:py-3
			hover:bg-slate-100
		 dark:bg-Neutral-700 dark:hover:bg-Neutral-600 dark:border-Neutral-600
		 cursor-pointer rounded-full border-2 border-slate-300
		 focus-visible:border-Neutral-0
		 dark:focus-visible:border-Neutral-700
		 	focus-visible:ring-0
			focus-visible:outline-2
			focus-visible:outline-offset-3
			focus-visible:outline-Red-500
			`}
		>
			{text}
		</button>
	);
}
