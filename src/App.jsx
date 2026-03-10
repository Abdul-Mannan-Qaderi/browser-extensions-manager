import "./App.css";
import ExtensionList from "./components/ExtensionList";
function App() {
	return (
		<main className="dark:bg-slate-950 dark:text-white relative p-6 md:py-12 bg-slate-200 min-h-[101vh] ">
			<ExtensionList></ExtensionList>{" "}
		</main>
	);
}

export default App;
