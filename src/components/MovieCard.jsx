import { useState, useEffect } from "react";
import MovieCardDetailed from "./MovieCardDetailed"

function MovieCard(props) {
    const [detailedView, setDetailedView] = useState(false);

    const openDetailedView = () => {
      setDetailedView(true);
    };

    const closeDetailedView = () => {
      console.log("Close")
      setDetailedView(false);
    };

    // Effect to handle body overflow when forms are shown or hidden
    useEffect(() => {
      if (detailedView) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
  
      // Cleanup function to reset overflow when the component is unmounted or the forms are closed
      return () => {
        document.body.style.overflow = 'auto';
      };
      }, [detailedView]);

    return (
      <>
      <div className={`${props.hasBeenShown ? 'movieCard shown' : 'movieCard'}`}>
        <img onClick={openDetailedView} src={props.imageSrc} alt={props.name} />
        <h2>{props.name}</h2>
        <h3 style={{color: `${props.hasBeenShown ? 'red' : ''}`}}>{props.date}</h3>
      </div>

      {detailedView && (
        <MovieCardDetailed imageSrc={props.imageSrc} name={props.name} date={props.date} onClose={closeDetailedView}/>
)     }
      </>
    )
}
  
  export default MovieCard