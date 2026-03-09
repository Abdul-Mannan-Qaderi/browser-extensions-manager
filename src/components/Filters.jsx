import FilterButton from "./FilterButton";

export default function Filters() {
	return (
		<nav className="flex justify-center gap-3">
			<FilterButton text={"All"} />
			<FilterButton text={"Active"} />
			<FilterButton text={"Inactive"} />
		</nav>
	);
}
