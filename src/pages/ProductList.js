import React, { useEffect, useState } from 'react';

function ProductList() {
    const [jsonData, setJsonData] = useState(null);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => setJsonData(data))
            .catch(error => console.error(error));
        console.log(jsonData);
    }, []);

    return (
        <ol id={'productList'}></ol>
    );
}

export default ProductList;