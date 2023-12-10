import React, { useEffect, useState } from 'react';
import Product from "../components/Product";
import '../css/ProductList.css'
import product from "../components/Product";
import SortButton from "../components/SortButton";

function ProductList() {
    const [jsonData, setJsonData] = useState(null);
    const sortButton = document.getElementById('sort-button');

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => setJsonData(data.products))
            .catch(error => console.error(error));
        // console.log(jsonData);
    }, [sortButton]);

    return jsonData&&(
        <>
            <SortButton/>
            <ol id='productList'>
                {jsonData.map((product) => {
                    return <Product product={product}/>
                })}
            </ol>
        </>
    );
}

export default ProductList;