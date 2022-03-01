import Image from 'next/image';
import fdlogo from '../../../../public/images/Future-Dev-Logo-White-BG.png'

interface ContentProps {
   children?: any
}

export default function Content(props: ContentProps) {
   return (
      <div>
         <p>This is my logo!!!</p>
      </div>
   )
}