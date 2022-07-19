import { useEffect, useState } from "react";
import MovieSlide from "./MovieSlide";
import styles from "./Slide.module.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareLeft } from "@fortawesome/free-solid-svg-icons";
import { faCaretSquareRight } from "@fortawesome/free-solid-svg-icons";

// Home Slide show!
function Slide({ movieApi }) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [trans, setTrans] = useState(0);

  const onClickL = () => {
    if (trans >= 0) {
      return;
    }
    setTrans((current) => current + 460);
  };

  // -1380 : 230 * 6, so the button can be clicked only 3 times
  const onClickR = () => {
    console.log(trans);
    if (trans <= -920) {
      return;
    }
    setTrans((current) => current - 460);
  };

  const getMovies = async () => {
    const json = await (await fetch(movieApi)).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getMovies();
  }, []);

  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.slide_show}>
          {loading ? (
            <div>
              <span>Loading...</span>
            </div>
          ) : (
            <div
              className={styles.slides}
              style={{ transform: `translateX(${trans}px)` }}
            >
              {movies.map((movie) => {
                if (movie.medium_cover_image != null) {
                  return (
                    // MovieSlide is redering code with Slide!
                    <MovieSlide
                      key={movie.id}
                      id={movie.id}
                      coverImg={movie.medium_cover_image}
                      year={movie.year}
                      title={movie.title}
                      genres={movie.genres}
                    />
                  );
                }
              })}
            </div>
          )}
        </div>
        {loading ? null : (
          <div className={styles.controller}>
            <button className={styles.left} onClick={onClickL}>
              <FontAwesomeIcon icon={faCaretSquareLeft}></FontAwesomeIcon>
            </button>
            <button className={styles.right} onClick={onClickR}>
              <FontAwesomeIcon icon={faCaretSquareRight}></FontAwesomeIcon>
            </button>
          </div>
        )}
      </div>
      {/* Button with FontAwesome */}
    </Container>
  );
}

export default Slide;
