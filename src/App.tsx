import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Button, Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { Genre } from './hooks/useGenres'

function App() {
const [selectedGenre,setSelectedGenre] =useState<Genre|null>(null)



return  <Grid templateAreas={{base:`"nav" "main"`,lg:`"nav nav" "aside main"`}}>
<GridItem area="nav"><NavBar/></GridItem>
{/* <GridItem area="navv">Navv</GridItem> */}
<Show above='lg'><GridItem area="aside" ><GenreList selectedGenre={selectedGenre} onSelectGenre={(genre)=>setSelectedGenre(genre)}/></GridItem></Show>
<GridItem area="main" ><GameGrid selectedGenre={selectedGenre}/></GridItem>

</Grid>

}

export default App
