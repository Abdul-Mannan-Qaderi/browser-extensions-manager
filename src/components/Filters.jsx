import { useExtensions } from "../context/ExtensionContext";
import FilterButton from "./FilterButton";

export default function Filters() {
	const { activeExtensions, allExtensions, inactiveExtensions, activeTab } =
		useExtensions();
	return (
		<nav className="flex justify-center gap-3">
			<FilterButton text={"All"} func={allExtensions} />
			<FilterButton text={"Active"} func={activeExtensions} />
			<FilterButton text={"Inactive"} func={inactiveExtensions} />
		</nav>
	);
}
