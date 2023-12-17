import React, {useEffect, useRef, useState} from 'react';
import Product from "../components/Product";
import '../css/ProductList.css'
import SortButton from "../components/SortButton";
import product from "../components/Product";

function ProductList() {
    const [jsonData, setJsonData] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);
    const [filter, setFilter] = useState("");
    const [editedItem, setEditedItem] = useState(null);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => setJsonData(data.products))
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        if (jsonData == null)
            return;

        switch (sortOrder) {
            case null:
                setJsonData(jsonData.toSorted((a, b) => a.id - b.id))
                break;
            case 'asc':
                setJsonData(jsonData.toSorted(
                    (a, b) => a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1))
                break;
            case 'desc':
                setJsonData(jsonData.toSorted(
                    (a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1))
                break;
            default:
                throw new Error();
        }
    }, [sortOrder]);

    // useEffect(() => {
    //     if (jsonData == null)
    //         return;
    //
    //     setJsonData(jsonData.filter((product) => product.title.includes(filter)))
    // }, [filter]);

    return jsonData&&(
        <>
            <SortButton sortOrder={sortOrder} setSortOrder={setSortOrder} editedItem={editedItem}/>
            <input type='text' placeholder='wyszukaj'
                   onChange={(e) => setFilter(e.target.value.toLowerCase())}/>
            <ol id='productList'>
                {jsonData.filter((product => product.title.toLowerCase().includes(filter))).map((product, index) => {
                    return <Product product={product} editedItem={editedItem} setEditedItem = {setEditedItem}
                                    data={jsonData} setData = {setJsonData} index={index}/>
                })}
            </ol>
        </>
    );
}

export default ProductList;