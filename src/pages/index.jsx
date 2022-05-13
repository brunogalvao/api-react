import StarPlanetas from "./components/starPlanetas";

export default function Index(props) {

  function renderPlaneta () {

    const render = []
  
    for (let i = 0; i < 10; i++) {
      render.push(
        <StarPlanetas 
          nome={props.planeta.results[i].name}
          clima={props.planeta.results[i].climate}
          img={props.planeta.results[i].name}
        />
      )
    }
    return render
  }

  return (
      <div className="grid v-center h-center">

        <div className="row">
          <h1 className="titulo">Planetas StarWars</h1>
        </div>

        <>

          {renderPlaneta()}

        </>

      </div>
  )
}


export async function getStaticProps() {

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


