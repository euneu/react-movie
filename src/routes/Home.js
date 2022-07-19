import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Movie from "../components/Movies";
import styles from "./Home.module.css";
import { Group_obj, Group_key_arr } from "../atom/NavList.js";
import { Container, Row } from "react-bootstrap";
import Slide from "../components/Slide";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <Container>
      {Group_key_arr.map((group) => {
        return (
          <div>
            <div className={styles.contain}>
              <Link className={styles.title} to={`/page/${Group_obj[group]}/1`}>
                {group}
              </Link>
            </div>
            <Slide
              movieApi={`https://yts.mx/api/v2/list_movies.json?limit=10&${Group_obj[group]}&sort_by=rating`}
            />
          </div>
        );
      })}
      {/* <div>
        {loading ? (
          <div className={styles.loader}>
            <span>Loading...</span>
          </div>
        ) : (
          <div>
            <Row xs={1} md={4} className="p-3">
              {movies.map((movie) => (
                <Movie
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
      </div> */}
    </Container>
  );
}

export default Home;
