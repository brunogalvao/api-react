export default function StarPessoas(props) {

    const img = {

        background: "rgba(255, 255, 255, .3) url(./images/people/" + props.img.replace(' ', '').replace(' ','') + ".png) no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        borderRadius: "12px",
        boxShadow: "0px 0px 4px #4d4d4d"
    }

    return (
            
        <div className="pessoas mb-2 p-4">
            <div style={img} className="w-40 h-60 flex align-middle justify-center">
                <div className="texto text-stone-700">
                    <p><b>{props.nome}</b></p>
                    <p>Altua <b>{props.altura}</b></p>
                    <p>Peso <b>{props.peso}</b></p>
                    <p>Cabelo <b>{props.cabelo}</b></p>
                </div>
            </div>
        </div>

                
    )
    
}