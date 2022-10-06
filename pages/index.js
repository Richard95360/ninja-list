import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
     <Head>
      <title>Home Page | Ninja List</title>
      <meta name='keywords' content='ninjas'/>
    </Head>
    <div className={styles.title}>
      <h1>HomePage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem recusandae eum ullam explicabo labore officia maxime neque reiciendis assumenda unde. Dolore aperiam tempora praesentium nostrum aliquam soluta veniam ipsam sit!</p>
      <Link href={"/ninjas"}>
       <a className={styles.btn}>Tous les Ninjas</a>
      </Link>
    </div>
    </>
  )
}
