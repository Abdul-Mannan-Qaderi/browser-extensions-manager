import Filters from "./Filters";
import TopNav from "./TopNav";

export default function Nav() {
	return (
		<header className="flex flex-col gap-6 mb-8">
			<TopNav />
			<div className="flex flex-col gap-6 md:flex-row md:justify-between items-center">
				<h1 className="text-3xl text-center font-bold">Extensions List</h1>
				<Filters />
			</div>
		</header>
	);
}
