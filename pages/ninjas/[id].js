const Details = ({ninja}) => {
    return ( 
        <div>
            <h1>{ninja.name}</h1>
            <p>{ninja.email}</p>
            <p>{ninja.phone}</p>
            <p>{ninja.address.city} - {ninja.address.street} - {ninja.address.suite} - {ninja.address.zipcode}</p>
            <p>{ninja.address.geo.lat}- {ninja.address.geo.lng}</p>
            <p>{ninja.company.name} - {ninja.company.catchPhrase}- {ninja.company.bs}</p>
            
        </div>
     );
}
 
export default Details;

export const getStaticPaths = async  () => {
    const URL ="https://jsonplaceholder.typicode.com/users"
    const res = await fetch(URL)
    const data = await res.json()
    
    const paths = data.map(ninja => {
        return {
            params: {id: ninja.id.toString()}
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
    const data = await res.json()

    return {
        props:{ninja : data}
    }
}