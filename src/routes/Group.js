import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movies from "../components/Movies";
import { Link } from "react-router-dom";
import styles from "./Group.module.css";
import { Row, Container } from "react-bootstrap";

const List_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Gruop() {
  const { group, page } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?page=${page}&${group}&sort_by=rating`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
    setLoading(true);
  }, [group, page]);

  return (
    <Container>
      <div>
        {loading ? (
          <div className={styles.loader}>
            <span>Loading...</span>
          </div>
        ) : (
          <div>
            <Row xs={1} md={4} className="p-3">
              {movies.map((movie) => (
                <Movies
                  key={movie.id}
                  id={movie.id}
                  coverImg={movie.medium_cover_image}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  genres={movie.genres}
                />
              ))}
            </Row>
          </div>
        )}
      </div>
      {loading ? null : (
        <div className={styles.footer}>
          <div className={styles.list}>
            {List_arr.map((lst) => {
              return (
                <Link key={lst} to={`/page/${group}/${lst}`}>
                  {lst}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </Container>
  );
}

export default Gruop;
