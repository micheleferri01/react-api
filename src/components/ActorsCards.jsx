export default function ActorsCards({ actors }) {
    return (
        actors.map((actor) =>
            <div key={actor.id} className="col-4 rounded">
                <div className="custom-card text-bg-light h-100">
                    <img src={actor.image} alt={actor.name} className="card-image text-bg-light" />
                    <div className="card-body p-2">
                        <h2 className="card-title pb-3">{actor.name}</h2>
                        <ul className="card-text list-unstyled">
                            <li><span className="fw-bold">Birth date:</span> {actor.birth_year}</li>
                            <li><span className="fw-bold">Nationality:</span> {actor.nationality}</li>
                            <li><span className="fw-bold">Biography:</span> {actor.biography}</li>
                            <li><span className="fw-bold">Awards:</span> {actor.awards.join(', ')} </li>
                            <li><span className="fw-bold">Known for:</span> {actor.known_for.join(', ')}</li>
                        </ul>
                    </div>
                </div>
            </div>)
    )
}