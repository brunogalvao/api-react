export default function StarPlanetas(props) {

    return (
        <div className="planeta">

            <div className="texto">
                <b>Nome</b>
                <p>{ props.nome }</p>
            </div>
            <div className="texto">
                <b>Clima</b> 
                <p>{ props.clima }</p>
            </div>
        </div>

    )
}