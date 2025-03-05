const Hello = (props) => {
	const { name = '' } = props;
	return (
		<div>
			<p>Hello {name}</p>
		</div>
	);
};

const App = () => {
	return (
		<div>
			<h1>Greetings</h1>
			<Hello name="George" />
			<Hello name="Daisy" />
		</div>
	);
};

export default App;
