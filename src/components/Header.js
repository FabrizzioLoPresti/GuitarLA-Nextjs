import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Logo from '../../public/img/logo.svg'
import styles from '@/styles/Header.module.css'

const Header = () => {
  const { pathname } = useRouter()
  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Link href={'/'}>
          <Image src={'/img/logo.svg'} alt={'Imagen Logotipo'} width={300} height={40} />
        </Link>
        <nav className={styles.navegacion}>
          <Link href={'/'} className={pathname === '/' ? styles.active : undefined}>
              Inicio
          </Link>
          <Link href={'/nosotros'} className={pathname === '/nosotros' ? styles.active : undefined}>
              Nosotros
          </Link>
          <Link href={'/tienda'} className={pathname === '/tienda' ? styles.active : undefined}>
              Tienda
          </Link>
          <Link href={'/blog'} className={pathname === '/blog' ? styles.active : undefined}>
              Blog
          </Link>
          <Link href={'/carrito'}>
            <Image src={'/img/carrito.png'} alt={'Logo Carrito'} width={30} height={25} />
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header