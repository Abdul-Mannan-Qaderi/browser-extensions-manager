import Card from "./Card";
import Nav from "./Nav";
import { useExtensions } from "../context/ExtensionContext";

export default function ExtensionList() {
	const { extensions } = useExtensions();

	return (
		<div className="max-w-7xl m-auto">
			<Nav />
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
				{extensions.map((item) => (
					<Card
						key={item.id}
						id={item.id}
						name={item.name}
						description={item.description}
						logo={item.logo}
					/>
				))}
			</div>
		</div>
	);
}
