
function MovieCardDetailed(props) {

    return (
      <div className="movieCardDetailed" onClick={props.onClose}>
        <img src={props.imageSrc} alt={props.name} />
        <div>
          <h1>{props.name}</h1>
          <p>{props.description}</p>
          <a target="_blank" href="https://www.imdb.com/video/vi1743438361/">Spela Trailer</a>
        </div>
      </div>
    )
}
  
  export default MovieCardDetailed