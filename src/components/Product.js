import {useEffect, useRef, useState} from "react";

function Product({product, editedItem, setEditedItem, data, setData, index}) {
    const formTitle = useRef(null);
    const formDescription = useRef(null);

    const[content, setContent] = useState (
    )

    function discardChanges() {
        setEditedItem(null);

    }
    function startEdit() {
        setEditedItem(product.id);
    }
    function updateProduct() {
        product = {
            ...product,
            title: formTitle.current.value,
            description: formDescription.current.value
        }
        // console.log(formTitle, formTitle.current)
        let dataCopy = data;
        dataCopy[index] = product;
        setData(dataCopy);
        setEditedItem(null);
    }

    useEffect(() =>{
        if (editedItem != product.id)
            setContent(
            (<li key ={product.id}>
                <h2>{product.title}</h2>
                {product.description}
                <img src={product.thumbnail}/>
                {editedItem != null ?
                    (<></>) :
                (<button onClick={startEdit}>Edit</button>)}
            </li>))
        else
            setContent(
            (<li key={product.id}>
                <input ref={formTitle} defaultValue={product.title}/>
                <input ref={formDescription} defaultValue={product.description}/>
                <button onClick={updateProduct}>Save</button>
                <button onClick={discardChanges}>Discard</button>
            </li>))

    }, [product, editedItem])

    return content;
}

export default Product;
