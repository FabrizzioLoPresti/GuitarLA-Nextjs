import Layout from "@/components/Layout"
import ListadoGuitarras from "@/components/ListadoGuitarras"
import Post from "@/components/Post"
import Curso from "@/components/Curso"
import styles from '@/styles/Grid.module.css'

export default function Home({guitarras, posts, curso}) {
  return (
    <>
      <Layout
        title={'Inicio'}
        description={'Blog de Musica, Venta de Guitarras y mas'}
      >
        <main className="contenedor">
          <h1 className="heading">Nuestra Coleccion</h1>
          <ListadoGuitarras guitarras={guitarras} />
        </main>
        <Curso curso={curso} />
        <section className="contenedor">
          <h2 className="heading">Blog</h2>
          <div className={styles.grid}>
            {posts?.map(post => (
              <Post 
                key={post.id}
                post={post.attributes}
              />
            ))}
          </div>
        </section>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`
  const urlPosts = `${process.env.API_URL}/posts?populate=imagen`
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`
  const [ resGuitarras, resPosts, resCurso ] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPosts),
    fetch(urlCurso)
  ])
  const [ {data: guitarras}, {data: posts}, {data: curso} ] = await Promise.all([
    resGuitarras.json(),
    resPosts.json(),
    resCurso.json()
  ])
  return {
    props: {
      guitarras,
      posts,
      curso
    }
  }
}