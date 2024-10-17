import { HStack, Image } from "@chakra-ui/react"
import logo from '../assets/logo.png'
import ColorModeSwitch from "./ColorModeSwitch"
const NavBar=()=>{
    return(
        <HStack justifyContent={'space-between'} paddingX={10}>
            <Image  src={logo}/>
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar