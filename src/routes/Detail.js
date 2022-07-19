import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import { Container } from "react-bootstrap";
function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setGenres(json.data.movie.genres);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(movie);
  return (
    <div>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.maincontainer}>
          <img
            src={movie.background_image_original}
            alt={movie.title}
            className={styles.bg}
          ></img>
          <Container>
            <div className={styles.moviecontainer}>
              <div>
                <h1>{movie.title}</h1>
                <img src={movie.medium_cover_image}></img>
              </div>
              <div>
                <div className={styles.movie_info}>
                  <p>
                    <span>👍</span>
                    {movie.rating}
                  </p>
                  <p>
                    <span>🎬</span>
                    {movie.runtime}분
                  </p>
                  <p>📸{movie.year}년</p>
                </div>
                <div>
                  <ul className={styles.genre}>
                    {genres.map((g) => (
                      <li key={g}>{g}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.movie_description}>
                  {movie.description_full}
                </div>
              </div>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
}

export default Detail;
