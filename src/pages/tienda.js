import Layout from "@/components/Layout"
import ListadoGuitarras from "@/components/ListadoGuitarras"

export default function Tienda({guitarras}) {
  return (
    <Layout
      title={'Tienda Virtual'}
      description={'Tienda virtual, venta de guitarras, instrumentos, GuitarLA'}
    >
      <main className="contenedor">
        <h1 className="heading">Nuestra Coleccion</h1>
        <ListadoGuitarras 
          guitarras={guitarras}
        />
      </main>
    </Layout>
  )
}

export async function getServerSideProps() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  const { data: guitarras } = await respuesta.json()
  return {
    props: {
      guitarras
    }
  }
}