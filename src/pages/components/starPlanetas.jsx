export default function StarPlanetas(props) {

    const img = {

        backgroundImage: "url(./images/" + props.img.replace(' ', '') + ".png)",
        backgroundPosition: "center center",
        backgroundSize: "cover"

    }

    return (
        <div style={img} className="planeta">

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