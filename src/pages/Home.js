import { useEffect, useRef, useState } from "react";
import MovieListItem from "../components/MovieListItem";

const Home = () => {
	const dataLoaded = useRef(false);
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		if (dataLoaded.current) {
			return;
		}
		dataLoaded.current = true;

		const url = `${process.env.REACT_APP_API_URL}/api/movies`;
		fetch(url)
			.then(response => response.json())
			.then(json => setMovies(json.data));
	}, []);

	return (
		<div className="row mt-4">
			<div className="col-md-8">
				{movies.map(movie =>
					<MovieListItem
						id={movie.id}
						key={movie.id}
						name={movie.name}
						year={movie.year}
						info={movie.info}
						actors={movie.actors}
						genres={movie.genres} />)}
			</div>
		</div>
	);
};

export default Home;