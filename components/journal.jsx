export default function Journal(props) {
    return (
        <div className="card--container">
            <img className="card--image" src={props.imageUrl} alt="the images of each given location"/>
            <div className="card--side">
                <div>
                    <a className="card--location" href={props.googleMapsUrl}>
                        <i className="card--icon" className="fa-solid fa-location-dot fa-xs"></i>
                        <span className="card--span">{props.location}</span>
                    </a>
                    <a className="card--google" href={props.googleMapsUrl}>View on Google Maps</a>
                </div>     
                <h2 className="card--title">{props.title}</h2>
                <p className="card--date">{props.startDate} - {props.endDate}</p>
                <p className="card--description">{props.description}</p>
            </div>
        </div>
    )
}