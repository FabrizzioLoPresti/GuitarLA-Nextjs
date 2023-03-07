import Guitarra from "./Guitarra"
import styles from '@/styles/Grid.module.css'

const ListadoGuitarras = ({guitarras}) => {
  return (
    <div className={styles.grid}>
      {guitarras?.map(guitarra => (
        <Guitarra
          key={guitarra.id} 
          guitarra={guitarra.attributes}
        />
      ))}
    </div>
  )
}

export default ListadoGuitarras