import { useEffect, useState } from "react"
// import Tatooine from '../img/Tatoooinefull.png'

export default function Star() {

    const [app, setApi] = useState({})
    // const [pe, setPe] = useState({})

    const api = "http://swapi.dev/api/planets"
    // const Pessoas = "http://swapi.dev/api/people"
    

    useEffect(() => {
        fetch(api)
            .then( resp => resp.json() )
            .then( setApi )

        // fetch(Pessoas)
        //     .then( resp => resp.json() )
        //     .then( setPe )
    }, [])

    return (
        <div className="grid">
            <div className="container">
                <h1>Star Wars</h1>

                <div className="card">
                    <h2>Planetas</h2>
                    
                    <div>
                        <p>Quantidade de Planetas <b>{app?.count}</b></p>
                    </div>

                    <div>
                        <p>Nome: { app.results[0].name }</p>
                        <p>Clima: { app.results[0].climate }</p>
                        <p>População: { app.results[0].population }</p>
                        {/* {/* <img src={Tatoooinefull} /> */}
                    </div>
                </div>

                <div className="card">
                    <h2>Pessoas</h2>

                    <div>
                        {/* <p>Quantidade de Pessoas <b>{ pe?.count }</b></p> */}
                    </div>

                    <div>
                        {/* <p>Nome: { pe.results[0].name }</p>
                        <p>Altura: { pe.results[0].height }</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}