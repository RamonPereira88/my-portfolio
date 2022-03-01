import { Button } from "@chakra-ui/react";
import Image from 'next/image';
import fdlogo from '../../../../public/futdev-nameless.png'
import fdlogoName from '../../../../public/Ramon-Pereira.png'
import { SiLinkedin } from 'react-icons/si';
import { SiGithub } from 'react-icons/si';
import { SiTwitter } from 'react-icons/si';
import { SiDiscord } from 'react-icons/si';

interface NavbarProps {

}

export default function Navbar(props: NavbarProps){
   return (
      <>
         <nav className={`w-full h-16 flex items-center bg-blue-100`}>
            <div className={`w-9/12 flex flex-row items-center mx-auto`}>
               <div className={`flex flex-row`}>
                  <Image src={fdlogo} width={45} height={45} alt="Logo" />
                  <Image src={fdlogoName} width={180} height={15} alt="Logo" />
               </div>
               <div className={`w-10/12 flex flex-grow justify-center items-center bg-blue-100`}>
                  <Button colorScheme='blue' variant='ghost' color='#2D56CB' fontWeight='light' fontSize='17px'>
                     Home
                  </Button>
                  <Button colorScheme='blue' variant='ghost' color='#2D56CB' fontWeight='light' fontSize='17px'>
                     About
                  </Button>
                  <Button colorScheme='blue' variant='ghost' color='#2D56CB' fontWeight='light' fontSize='17px'>
                     Projects
                  </Button>
                  <Button colorScheme='blue' variant='ghost' color='#2D56CB' fontWeight='light' fontSize='17px'>
                     Contact
                  </Button>
               </div>
               <div className={`flex flex-row`}>
                  <a className={`
                     mr-4 
                     opacity-40 
                     hover:opacity-100 
                     transition duration-150 ease-in
                  `} href="https://www.linkedin.com/in/ramon-pereira88" target="_blank">
                     <SiLinkedin color='#0e76a8' size='25px'/>
                  </a>
                  <a className={`
                     mr-4
                     opacity-40 
                     hover:opacity-100 
                     transition duration-150 ease-in
                  `} href="https://github.com/RamonPereira88" target="_blank">
                     <SiGithub color='#171515' size='26px'/>
                  </a>
                  <a className={`
                     mr-3 
                     opacity-40 
                     hover:opacity-100 
                     transition duration-150 ease-in
                  `} href="https://twitter.com/RamonPerTech" target="_blank">
                     <SiTwitter color='#00ACEE' size='27px'/>
                  </a>
                  <a className={`
                     mr-4 
                     opacity-40 
                     hover:opacity-100 
                     transition duration-150 ease-in
                  `} href="https://discordapp.com/users/828656387026321449" target="_blank">
                     <SiDiscord color='#5865F2' size='28px' />
                  </a>
               </div>
            </div>
         </nav>
      </>
   )
} 