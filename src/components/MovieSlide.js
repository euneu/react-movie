import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./MovieSlide.module.css";
import { Card } from "react-bootstrap";

function Movie({ id, coverImg, title, year, genres }) {
  return (
    <div>
      <Link to={`/movie/${id}`}>
        <Card className={styles.movie}>
          <Card.Img
            className={styles.movie_img}
            variant="top"
            src={coverImg}
            alt={title}
          />
          <Card.Body>
            <Card.Title className={styles.movie_title}>
              {title.length > 13 ? `${title.slice(0, 13)}...` : title}
            </Card.Title>
            <small className="text-muted">
              {year}
              <ul className={styles.movie_genres}>
                {genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </small>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}
Movie.protoType = {
  id: propTypes.number.isRequired,
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;
