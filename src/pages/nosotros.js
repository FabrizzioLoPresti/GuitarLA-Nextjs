import Image from "next/image"
import Layout from "@/components/Layout"
import styles from '@/styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <Layout
      title={'Nosotros'}
      description={'Sobre nosotros, GuitarLA, Tienda de Musica'}
    >
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>
        <div className={styles.contenido}>
          <Image src={'/img/nosotros.jpg'} alt="Imagen sobre nosotros" width={1000} height={800}/>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed nisi elementum, pretium nunc et, bibendum odio. Praesent vitae porta diam. Nulla euismod ipsum nisi, et egestas libero auctor consequat. Aliquam sed mollis sem. Nam consectetur interdum lectus in feugiat.
            </p>
            <p>
              Aenean quis ex eu felis interdum finibus. Morbi elementum gravida est quis consectetur. Nullam et odio turpis. Sed pulvinar augue quam, at placerat enim accumsan ultrices. Pellentesque erat nisi, pulvinar eu convallis eget, viverra a augue. Quisque eget elit dolor.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
}