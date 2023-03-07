import { useState } from "react"
import Image from "next/image"
import Layout from "@/components/Layout"
import styles from '@/styles/Guitarra.module.css'

export default function Producto({guitarra, agregarCarrito}) {
  const [cantidad, setCantidad] = useState(0)
  const { nombre, descripcion, precio, imagen } = guitarra[0].attributes

  const handleSubmit = e => {
    e.preventDefault()
    if(cantidad < 1) return alert('Cantidad no valida')

    // Construir Objeto con Guitarra Seleccionada
    const guitarraSeleccionada = {
      id: guitarra[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad
    }

    // Pasando Informacion a Context
    agregarCarrito(guitarraSeleccionada)
  }

  return (
    <Layout
      title={`Guitarra ${nombre}`}
      description={'Tienda virtual, venta de guitarras, instrumentos, GuitarLA'}
    >
      <div className={styles.guitarra}>
        <Image 
          src={imagen.data.attributes.url} 
          alt={`Imagen Guitarra ${nombre}`} 
          width={600}
          height={400}
        />
        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>${precio}</p>
          <form className={styles.formulario} onSubmit={handleSubmit}>
            <label htmlFor="cantidad">Cantidad</label>
            <select 
              name="cantidad" 
              id="cantidad"
              value={cantidad}
              onChange={e => setCantidad(Number(e.target.value))}
            >
              <option value="0" disabled>--Seleccione--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <input type="submit" value="Agregar al carrito"/>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({query: {url}}) {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
  const { data: guitarra } = await respuesta.json()
  if (!guitarra.length) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      guitarra
    }
  }
}

// export async function getStaticPaths() {
//   const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
//   const { data } = await respuesta.json()

//   // Return Implicito -> me retorna por cada iteracion un Objeto con {params: {url: 'urlGuitarra'}}
//   const paths = data.map(guitarra => ({
//     params: {
//       url: guitarra.attributes.url
//     }
//   }))
//   return {
//     paths,
//     fallback: false
//   }
// }

// export async function getStaticProps({params: {url}}) {
//   const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
//   const { data: guitarra } = await respuesta.json()
//   return {
//     props: {
//       guitarra
//     },
//     revalidate: 10
//   }
// }