import Content from "./Content";
import Navbar from "./Navbar";
import Title from "./Title";

interface LayoutProps {
   title: string
   description: string
   children?: any
}

export default function Layout(props: LayoutProps) {
   return (
      <div className={`flex flex-col`}>
         <Navbar />
         <Title title={props.title} description={props.description} />
         <Content>
            {props.children}
         </Content>
      </div>
   )
}