import Styles from '../../styles/Ninjas.module.css'
import Head from 'next/head';
import Link from 'next/link';
const Ninjas = ({ninjas}) => {
    return ( 
        <>
    <Head>
      <title>Ninja List!!!</title>
      <meta name='keywords' content='ninjas'/>
    </Head>
        <div className={Styles.container}>
            <h1>All Ninja</h1>
            <p className={Styles.text}>Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
            <ul>
                {ninjas.map(d => (
                    <Link href={`/ninjas/${d.id}`} key={d.id}>
                        <a className={Styles.single}>
                            <h3>{d.name}</h3>
                            <p>{d.username}</p>
                            <p>{d.email}</p>
                            <p>{d.phone}</p>
                            <p>{d.address.city} - {d.address.street} - {d.address.suite} - {d.address.zipcode}</p>
                            <p>{d.address.geo.lat}- {d.address.geo.lng}</p>
                            <p>{d.company.name} - {d.company.catchPhrase}- {d.company.bs}</p>
                        </a>
                    </Link>
                ))}
            </ul>
        </div>
        </>
     );
}
 
export default Ninjas;

export const getStaticProps = async () =>{
   const URL ="https://jsonplaceholder.typicode.com/users"
   const res = await fetch(URL)
   const data = await res.json()

   return {
    props: {
       ninjas: data
    }
   }
}