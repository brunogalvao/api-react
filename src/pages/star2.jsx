import Image from 'next/image'
import StarPlanetas from './components/starPlanetas'

export default function StarWars(props) {

    return (
        <div className="grid">
            <div className="container">

                <h1>Star Wars</h1>

                <div className="card">
                    <div>
                        <h3>Planetas {props.planeta?.count} </h3>
                        <ul>
                            <li>{props.planeta.results[0].name}</li>
                        </ul>
                    </div>
                    
                    

                    <div>
                        {/* <img width="100%" src="/images/Tatoooinefull.png" /> */}
                        <Image
                            src='/images/Tatoooinefull.png'
                            width={120}
                            height={120}
                            quality={100}
                        />
                    </div>
                    <div>
                        <h3>Pessoas {props.people?.count} </h3>
                        <ul>
                            <li>{props.people.results[0].name}</li>
                            <li>{props.people.results[1].name}</li>
                            <li>{props.people.results[2].name}</li>
                            <li>{props.people.results[3].name}</li>
                        </ul>
                    </div>

                </div>

                <div className="card">
                    <StarPlanetas />
                </div>

            </div>
        </div>
    )
}

export async function getStaticProps() {

    const api = await fetch("http://swapi.dev/api/planets")
        .then( (server) => {
            return server.json();
        })

    const people = await fetch("http://swapi.dev/api/people")
        .then( (server) => {
            return server.json();
        })

    console.log("mais um teste")

    return {
        props: {
            planeta: api,
            people: people
        }
    }

}