import TabTitle from '../utilities/TabTitle';

const HomePage = () => {
	TabTitle('Home Page | Superior Software Solutions');

	return (
		<div>
			<div className="flex h-screen w-full items-center justify-center">
				<h1 className="text-4xl font-medium text-indigo-600">
					Hello? React, Tailwind and Vite have been correctly configured.
				</h1>
			</div>
		</div>
	);
};

export default HomePage;
