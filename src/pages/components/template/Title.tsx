interface TitleProps {
   title: string
   description: string
}

export default function Title(props: TitleProps) {
   return (
      <div>
         <h1 className={`

         `}>
            {props.title}
         </h1>
         <p className={`
         
         `}>
            {props.description}
         </p>
      </div>
   )
}