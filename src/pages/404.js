import Link from "next/link"
import Layout from "@/components/Layout"

export default function Error404() {
  return (
    <Layout
      title={'Pagina no encontrada'}
      description={'Tienda virtual, venta de guitarras, instrumentos, GuitarLA'}
    >
      <p className="error">Pagina No Encontrada</p>
      <Link href={'/'} className='error-enlace'>
        Volver al Inicio
      </Link>
    </Layout>
  )
}