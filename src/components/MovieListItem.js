import { Link } from "react-router-dom";

const MovieListItem = ({ id, name, year, info, genres, actors }) => {
    return (
        <article className="mb-3">
            <h3 className="mb-1">{name}</h3>
            <h4 className="mb-1">{year}</h4>
            <h4 className="mb-1">{info}</h4>
            <p className="mb-1">
                {genres.map(genre => <span key={genre.id}>{genre.name}</span>)}
            </p>
            <p className="mb-1">
                {actors.map(actor => <span key={actor.id}>{actor.first_name}</span>)}
            </p>
            <Link to={`/movie/${id}`}>Link</Link>
        </article>
    );
}

export default MovieListItem;