import Layout from "./components/template/Layout";

export default function Home(props) {
  return (
    <>
      <Layout title={props.title} description={props.description}>
        {props.children}
      </Layout>  
    </>
  )
}
