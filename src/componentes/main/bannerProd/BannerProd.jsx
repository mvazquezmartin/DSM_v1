import "./BannerProd.css"

const BannerProd = ({id, nombre, pos}) =>{
    return(
        <div className={`banner-producto-container ${pos}`}>
            <div className="banner-izq">                
                    <p className="producto-id">Icon: {id} </p>
                    <p className="producto-nombre"> {nombre} </p>
                    <p className="botones-varios">POR AHORA ES TEXTO</p>                
            </div>
            <div className="banner-der">
                <img className="prod-img" src={(`/${id}.png`)} alt={nombre} />
            </div>
        </div>
    )
}

export default BannerProd