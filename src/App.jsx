import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Cards from './Components/Cards'
import Title from './Components/Title'
import Filter from './Components/Filter'
import Pagination from './Components/Pagination'
import { movies$ } from './array'

function App() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        document.title = "Movix"
    })

    useEffect(() => {
        movies$
        .then((movies) => {
            console.log(movies)
            setMovies(movies)
        })
    }, [])


  return (
    <div className="App">
        <Title />
        <Filter />
        <CardsContainer>
            {movies.slice(0,20).map((movie) =>
                <Cards key={movie.id}
                       title={movie.title}
                       category={movie.category}
                       likes={movie.likes}
                       dislikes={movie.dislikes}
                       imageProfile={movie.imageProfile}
                       imageBanner={movie.imageBanner}
                       ReleaseDate={movie.ReleaseDate}
                />
            )}
        </CardsContainer>
        <Pagination />
    </div>
  );
}

export default App;

const CardsContainer = styled.div`
    padding: 25px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`