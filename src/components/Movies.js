import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";
import { Col, Card } from "react-bootstrap";

function Movie({ id, coverImg, title, year, summary, genres }) {
  return (
    <div>
      <Link to={`/movie/${id}`}>
        <Card className={styles.movie}>
          <Card.Img
            className={styles.movie__img}
            variant="top"
            src={coverImg}
            alt={title}
          />
          <Card.Body>
            <Card.Title className={styles.movie__title}>
              {title.length > 18 ? `${title.slice(0, 18)}...` : title}
            </Card.Title>
            <small className="text-muted">
              {year}
              <ul className={styles.movie__genres}>
                {genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </small>
            <Card.Text>
              {summary.length > 150 ? `${summary.slice(0, 150)}...` : summary}
            </Card.Text>
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
