const GenresListItem = ({ id, name }) => {
    return (
        <article className="mb-3">
            <h3 className="mb-1">{id}</h3>
            <p className="mb-1 text-dark">{name}</p>
        </article>
    );
}

export default GenresListItem;