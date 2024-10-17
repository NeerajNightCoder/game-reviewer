import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Button, Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/Navbar'

function App() {
 
return  <Grid templateAreas={{base:`"nav" "main"`,lg:`"nav nav" "aside main"`}}>
<GridItem area="nav"><NavBar/></GridItem>
{/* <GridItem area="navv" bg="coral">Navv</GridItem> */}
<Show above='lg'><GridItem area="aside" bg="orange">Aside</GridItem></Show>
<GridItem area="main" bg="red">Main</GridItem>

</Grid>

}

export default App
