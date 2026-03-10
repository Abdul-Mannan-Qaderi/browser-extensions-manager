import { useState } from "react";
import { useExtensions } from "../context/ExtensionContext";

export default function Card({ name, description, logo, isActive, id }) {
	const [active, setActive] = useState(false);
	const handleActive = () => {
		setActive((prev) => !prev);
	};
	const { removeExtension } = useExtensions();

	return (
		<div
			className="
			bg-white text-Neutral-600
				p-5 rounded-3xl
				border  border-Neutral-200 shadow-sm
				flex flex-col justify-between gap-6 lg:gap-10
				dark:bg-Neutral-800 dark:border-Neutral-600 dark:text-neutral-200
				"
		>
			<div className="flex items-center justify-start gap-5">
				<img src={logo} alt="logo" className="self-start" />
				<div className="">
					<h2 className="text-2xl font-bold mb-2">{name}</h2>
					<p>{description}</p>
				</div>
			</div>
			<div className="flex justify-between items-center">
				<button
					onClick={() => {
						removeExtension(id);
					}}
					className={`	
					border-neutral-300 border rounded-full py-2 px-5 text-Neutral-900
					dark:text-white dark:border-Neutral-600
					cursor-pointer
					hover:bg-Red-700
					hover:border-Red-700
					hover:text-white
					focus-visible:border-white
					focus-visible:bg-Neutral-100
					focus-visible:ring-0
					focus-visible:outline-2
					focus-visible:outline-offset-3
					focus-visible:outline-Red-700
					dark:focus-visible:bg-Neutral-600
					dark:focus-visible:border-Neutral-600
					dark:hover:bg-Red-500
					dark:hover:border-Red-500
			`}
				>
					Remove
				</button>
				<button
					onClick={handleActive}
					className={`
						cursor-pointer
						transition duration-500
						${active ? "bg-Red-700 dark:bg-Red-400 " : "bg-neutral-300 dark:bg-Neutral-600 "}
						w-11 rounded-full p-0.5
						focus-visible:ring-0
						focus-visible:outline-2
						focus-visible:outline-offset-3
					focus-visible:outline-Red-700
						`}
				>
					<div
						className={`
					bg-white h-5 w-5 rounded-full
					transition duration-300
					 ${active ? "translate-x-5" : ""}
					`}
					></div>
				</button>
			</div>
		</div>
	);
}
