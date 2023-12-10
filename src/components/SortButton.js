import {useState} from "react";

function SortButton() {
    const [order, setOrder] = useState(null);
    let buttonText = 'sortowanie: brak';

    function changeOrder() {
        switch (order) {
            case null:
                setOrder('asc');
                buttonText = 'sortowanie: asc';
                break;
            case 'asc':
                setOrder('desc');
                buttonText = 'sortowanie: desc';
                break;
            case 'desc':
                setOrder(null);
                buttonText = 'sortowanie: brak';
                break;
            default:
                throw new Error();
        }
        console.log(order);
        console.log(buttonText);
    }
    return (
        <button onClick={changeOrder} id='sort-button'>
            {buttonText}
        </button>
    )

}

export default SortButton;