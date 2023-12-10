
function Product(props) {
    return (
        <li>
                <h2>{props.product.title}</h2>
                {props.product.description}
                <img src={props.product.thumbnail}/>
        </li>
    )
}

export default Product;