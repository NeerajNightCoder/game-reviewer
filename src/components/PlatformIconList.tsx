import { HStack, Icon, Text } from "@chakra-ui/react"
import { Platform } from "../hooks/useGames"
import { FaWindows, FaPlaystation, FaApple, FaXbox, FaLinux, FaAndroid } from 'react-icons/fa'
import {MdPhoneIphone} from 'react-icons/md'
import {SiNintendo} from 'react-icons/si'
import {BsGlobe} from 'react-icons/bs'
import { IconType } from "react-icons"



interface Props {
    parent_platforms:{platform:Platform}[]
}



const PlatformIconList = ({parent_platforms}: Props) => {

const iconMap:{[key:string]:IconType}={
    pc:FaWindows,
    playstation:FaPlaystation,
    xbox:FaXbox,
    nintendo:SiNintendo,
    mac:FaApple,
    linux:FaLinux,
    ios:MdPhoneIphone,
    web:BsGlobe,
    android:FaAndroid 

}

    return (
            <HStack marginY={10}>{parent_platforms.map((platform) => <Icon as={iconMap[platform.platform.slug]} color="gray.50"/>)}</HStack>
        
    )
}

export default PlatformIconList