import { useEffect, useRef, useState } from "react";
import ActorsListItem from "../components/ActorsListItem";

const Actors = () => {
	const dataLoaded = useRef(false);
	const [actors, setActors] = useState([]);

	useEffect(() => {
		if (dataLoaded.current) {
			return;
		}
		dataLoaded.current = true;

		const url = `${process.env.REACT_APP_API_URL}/api/actors`;
		fetch(url)
			.then(response => response.json())
			.then(json => setActors(json.data));
	}, []);

	return (
		<div className="row mt-4">
			<div className="col-md-8">
				{actors.map(actor =>
					<ActorsListItem
						first_name={actor.first_name}
						last_name={actor.last_name}
						patronymic={actor.patronymic}
					/>)}
			</div>
		</div>
	);
};

export default Actors;