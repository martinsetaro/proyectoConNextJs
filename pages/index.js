import Layout from "../components/layout";
import Link from "next/link";


export default function Home() {
  return (
    <>
    <Layout
    title="Bienvenido - Home"
    >
     <main>
      <h2>Pagina de Inicio</h2>
      <h3>Subtitulo de pagina de inicio</h3>
      <img src="https://www.onlineprinters.es/blog/wp-content/uploads/2019/08/image-to-pdf.jpg" alt="img" width={1000} height={600} />
      <Link href="/nosotros">Ir a nosotros</Link>
     </main>
     
     </Layout>
    
    </>
    
  )
}
