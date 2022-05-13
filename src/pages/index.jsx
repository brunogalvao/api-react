import StarPlanetas from "./components/starPlanetas";
import StarPessoas from "./components/starPessoas";

export default function Index(props) {

  function renderPlaneta () {

    const render = []
  
    for (let i = 0; i < 10; i++) {
      render.push(
        <StarPlanetas 
          i={i}
          nome={props.planeta.results[i].name}
          clima={props.planeta.results[i].climate}
          img={props.planeta.results[i].name}
        />
      )
    }
    return render
  }

  function renderPessoas () {

    const render = []
  
    for (let i = 0; i < 10; i++) {
      render.push(
        <StarPessoas 
          i={i}
          nome={props.pessoas.results[i].name}
          altura={props.pessoas.results[i].height}
          peso={props.pessoas.results[i].mass}
          cabelo={props.pessoas.results[i].hair_color}
          img={props.pessoas.results[i].name}
        />
      )
    }
    return render
  }


  return (
      <div className="container mx-auto">

        <div className="grid grid-cols">
          <h1 className="titulo mb-6 mt-20">Personagens StarWars</h1>
        </div>

        <div className="grid grid-rows-5 grid-flow-col gap-2 xl:grid-rows-5">
            {renderPessoas()}
        </div>

        <div className="grid grid-cols">
          <h1 className="titulo mb-6 mt-20">Planetas StarWars</h1>
        </div>

        <div className="grid grid-rows-5 grid-flow-col gap-2 xl:grid-rows-5">
            {renderPlaneta()}
        </div>

      </div>
  )
}


export async function getStaticProps() {

  const api = await fetch("http://swapi.dev/api/planets")
      .then( (server) => {
          return server.json();
      })

  const pessoas = await fetch("http://swapi.dev/api/people")
      .then( (server) => {
          return server.json();
      })

  return {
      props: {
          planeta: api,
          pessoas: pessoas,
      }
  }
}


