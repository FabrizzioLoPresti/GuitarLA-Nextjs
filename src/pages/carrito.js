import { useState, useEffect } from "react"
import Image from "next/image"
import Layout from "@/components/Layout"
import styles from '@/styles/carrito.module.css'

export default function carrito({carrito, actualizarCantidad, eliminarProducto}) {
  const [total, setTotal] = useState(0)
  useEffect(() => {
    const calcularTotal = carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0)
    setTotal(calcularTotal)
  }, [carrito])
  return (
    <Layout
      title={'Carrito de Compras'}
      description={'Blog de musica, venta de guitarras, consejos, GuitarLA'}
    >
      <main className="contenedor">
        <h1 className="heading">Carrito</h1>
        <div className={styles.contenido}>
          <div className={styles.carrito}>
            <h2>Articulos</h2>
            {!carrito.length ? 'No hay productos' : (
              carrito.map(producto => (
                <div key={producto.id} className={styles.producto}>
                  <div>
                    <Image src={producto.imagen} alt={`Imagen ${producto.nombre}`} width={250} height={480} />
                  </div>
                  <div>
                    <p className={styles.nombre}>{producto.nombre}</p>
                    <div className={styles.cantidad}>
                      <p>Cantidad:</p>
                      <select 
                        className={styles.select}
                        value={producto.cantidad}
                        onChange={e => actualizarCantidad({
                          id: producto.id,
                          cantidad: e.target.value
                        })}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                    <p className={styles.precio}>$<span>{producto.precio}</span></p>
                    <p className={styles.subtotal}>Subtotal: $<span>{producto.precio * producto.cantidad}</span></p>
                  </div>
                  <button 
                    type="button"
                    className={styles.eliminar}
                    onClick={() => eliminarProducto(producto.id)}
                  >
                    X
                  </button>
                </div>
              ))
            )}
          </div>
          <aside className={styles.resumen}>
            <h3>Resumen del Pedido</h3>
            <p>Total a pagar: ${total}</p>
          </aside>
        </div>
      </main>
    </Layout>
  )
}