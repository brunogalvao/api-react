export async function getStaticProps(props) {

    const api = await fetch("http://swapi.dev/api/planets")
        .then( (server) => {
            return server.json();
        })

    return {
        props: {
            planeta: api,
        }
    }

}