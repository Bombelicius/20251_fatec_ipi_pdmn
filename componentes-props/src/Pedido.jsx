const Pedido = ({icone, titulo, descricao}) => {
    // const icone = props.icone
    // const titulo = props.titulo
    // const descricao = props.descricao    
    return (
        <div className="card-body d-flex">
            <div className="d-flex align-items-center">
                <i className={`fa-solid fa-${icone} fa-2x fa-shake`}></i>
            </div>
            <div className="border flex-grow-1 ms-3 py-2">
                <h4 className="text-center">{titulo}</h4>
                <p className="text-center">{descricao}</p>
            </div>
        </div>
    )
}
export default Pedido