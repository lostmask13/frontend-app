const ActorsListItem = ({ id, first_name, last_name, patronymic, birthday }) => {
    return (
        <article className="mb-3">
            <h3 className="mb-1">{id}</h3>
            <p className="mb-1 text-dark">{first_name}</p>
            <p className="mb-1 text-dark">{last_name}</p>
            <p className="mb-1 text-dark">{patronymic}</p>
            <p className="mb-1 text-dark">{birthday}</p>
        </article>
    );
}

export default ActorsListItem;