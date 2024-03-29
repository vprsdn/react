import styles from "./App.module.scss";

const App = () => {
	return (
		<div className="bg-cyan-500 h-screen flex flex-col items-center justify-center">
			<h2 className="font-extrabold">App</h2>
			<p className="font-medium italic">This is a title</p>
			<Card />
		</div>
	);
};

const Card = () => {
	return (
		<div class="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100 w-1/4" draggable="true">
			<span class="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full">Design</span>
			<h4 class="mt-3 text-sm font-medium">This is the title of the card for the thing that needs to be done.</h4>
			<div class="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
				<div class="flex items-center">
					<svg class="w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
						<path
							fill-rule="evenodd"
							d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
							clip-rule="evenodd"
						/>
					</svg>
					<span class="ml-1 leading-none">Dec 12</span>
				</div>
				<div class="relative flex items-center ml-4">
					<svg class="relative w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
						<path
							fill-rule="evenodd"
							d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
							clip-rule="evenodd"
						/>
					</svg>
					<span class="ml-1 leading-none">4</span>
				</div>
				<div class="flex items-center ml-4">
					<svg class="w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
						<path
							fill-rule="evenodd"
							d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
							clip-rule="evenodd"
						/>
					</svg>
					<span class="ml-1 leading-none">1</span>
				</div>
				<img class="w-6 h-6 ml-auto rounded-full" src="https://randomuser.me/api/portraits/lego/8.jpg" />
			</div>
		</div>
	);
};

export default App;
