import moon from "../assets/images/icon-moon.svg";
import sun from "../assets/images/icon-sun.svg";

import { useState, useEffect } from "react";
import { useExtensions } from "../context/ExtensionContext";

export default function TopNav() {
	const { dark, setDark } = useExtensions();
	return (
		<div
			className="
				md:mb-10
				flex justify-between items-center mb-4 bg-white
				px-3 py-2 rounded-xl
				md:px-4 md:py-3 md:rounded-3xl
				border  border-Neutral-200 shadow-sm
			dark:bg-Neutral-800 dark:border-Neutral-800"
		>
			<div className="flex justify-start items-center gap-3">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="41"
					height="41"
					fill="none"
					viewBox="0 0 41 41"
				>
					<g clip-path="url(#a)">
						<path
							fill="#C7231A"
							fill-rule="evenodd"
							d="M13.715.516c-2.257 0-4.42.896-6.016 2.492L0 10.707v3.524c0 2.49 1.07 4.73 2.774 6.285A8.485 8.485 0 0 0 0 26.802v3.524l7.699 7.698A8.507 8.507 0 0 0 20 37.742a8.508 8.508 0 0 0 12.301.282L40 30.326v-3.524c0-2.49-1.07-4.73-2.774-6.286A8.485 8.485 0 0 0 40 14.231v-3.524l-7.699-7.7A8.508 8.508 0 0 0 20 3.29 8.485 8.485 0 0 0 13.715.516Zm12.044 20a8.528 8.528 0 0 1-.282-.27L20 14.77l-5.477 5.477a8.528 8.528 0 0 1-.282.27c.096.087.19.177.282.269L20 26.262l5.477-5.476c.092-.093.186-.182.282-.27Zm-3.537 9.81v1.682a4.063 4.063 0 0 0 6.936 2.874l6.398-6.397v-1.683a4.063 4.063 0 0 0-6.937-2.874l-6.397 6.398Zm-4.444 0-6.397-6.398a4.063 4.063 0 0 0-6.937 2.873v1.684l6.397 6.397a4.063 4.063 0 0 0 6.937-2.873v-1.683Zm0-21.302v1.683l-6.397 6.397a4.063 4.063 0 0 1-6.937-2.873v-1.683l6.397-6.397a4.063 4.063 0 0 1 6.937 2.873Zm10.841 8.08-6.397-6.397V9.024a4.063 4.063 0 0 1 6.936-2.873l6.398 6.397v1.683a4.063 4.063 0 0 1-6.937 2.873Z"
							clip-rule="evenodd"
						/>
					</g>
					<defs>
						<clipPath id="a">
							<path fill="#fff" d="M0 0h40v41H0z" />
						</clipPath>
					</defs>
				</svg>
				<h1 className="text-2xl font-bold">Extensions</h1>
			</div>
			<button
				onClick={() => setDark(!dark)}
				className="h-12 md:h-13 px-4 py-2 rounded-xl
				 bg-Neutral-100 hover:bg-Neutral-300
				 dark:hover:bg-Neutral-600 dark:bg-Neutral-700
				focus-visible:ring-0
				focus-visible:outline-2
				focus-visible:outline-offset-3
				focus-visible:outline-Red-700
				 cursor-pointer"
			>
				<img
					src={dark ? sun : moon}
					className="w-5"
					alt={dark ? "ligh" : "dark"}
				/>
			</button>
		</div>
	);
}
