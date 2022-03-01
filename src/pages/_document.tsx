import Document, {Html, Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
   render() {
      return (
         <Html>
            <Head>
               <link rel="preconnect" href="https://fonts.googleapis.com" />
               <link href="https://fonts.googleapis.com/css2?family=Saira:wght@100;200;300;400;500;600&display=swap" rel="stylesheet" />
               <link rel="shortcut icon" href="futdev-nameless.png" type="image/png" />
            </Head>
               <title>Ramon Pereira</title>
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      )
   }
}