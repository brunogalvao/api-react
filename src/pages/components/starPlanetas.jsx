export default function StarPlanetas(props) {

    const img = {

        backgroundImage: "url(./images/" + props.img.replace(' ', '') + ".png)",
        backgroundPosition: "center center",
        backgroundSize: "cover",
    }

    return (
        // <div className="row">
        //     <div className="planeta grid grid-cols-2" style={img}>

        //         <div className="texto">
        //             <b>Nome</b>
        //             <p>{ props.nome }</p>
        //         </div>
        //         <div className="texto">
        //             <b>Clima</b> 
        //             <p>{ props.clima }</p>
        //         </div>

        //     </div>
        //     <div className="columns-1">
        //         <div>oi</div>
        //     </div> 
        // </div>
            
        <div className="planeta mb-2 p-4">
            <div style={img} className="w-40 h-40 flex align-middle justify-center rounded-full">
                <div className="texto">
                    <p><b>{props.nome}</b></p>
                    <p>{props.clima}</p>
                </div>
            </div>
        </div>
                
    )
    
}