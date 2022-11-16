import { useContext, useState, useEffect } from 'react';
import NotificationContext from "./context/NotificationContext";

function TemperatureControl() {

	const [count, setCount] = useState(10);
	const ctx = useContext(NotificationContext);

	useEffect(() => {
		document.title = `Now temperature is ${count} °C`
	});

	const increase = () => {
		if (count < 30) {
			setCount(count + 1);
			ctx.success('Temperature increased by 1 °C');
		}
	}

	const decrease = () => {
		if (count > 0) {
			setCount(count - 1);
			ctx.success('Temperature decreased by 1 °C');
		}
	}

	return (
		<div className="app-container">
			<div className="temperature-display-container">
				<div className={`temperature-display ${count > 15 ? 'hot' : 'cold'}`}>
					{count}°C
				</div>
			</div>
			<div className="button-container">
				<button onClick={increase}>+</button>
				<button onClick={decrease}>-</button>
			</div>
		</div>
	)
}

export default TemperatureControl;