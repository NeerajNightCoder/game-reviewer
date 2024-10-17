import useGenres from "../hooks/useGenres"

const GenreList=()=>{
    const {genres,isLoading,error} = useGenres()
    return <>
        <h1>GenreList</h1><ul>{genres.map(genre=><li key={genre.id}>{genre.name}</li>)}</ul>
    </>
}

export default GenreList