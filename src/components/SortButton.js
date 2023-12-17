import {useCallback, useState} from "react";

function SortButton({sortOrder, setSortOrder, editedItem}) {
    const [buttonText, setButtonText] = useState('Sortowanie: brak');
    const setOrder = useCallback(setSortOrder, [setSortOrder]);

    function changeOrder() {
        if (editedItem != null) {
            alert("Can't sort list while a product is being edited");
            return;
        }
        switch (sortOrder) {
            case null:
                setOrder('asc');
                setButtonText('sortowanie: asc');
                break;
            case 'asc':
                setOrder('desc');
                setButtonText('sortowanie: desc');
                break;
            case 'desc':
                setOrder(null);
                setButtonText('sortowanie: brak');
                break;
            default:
                throw new Error();
        }
        // console.log(order);
        // console.log(buttonText);
    }
    return (
        <button onClick={changeOrder} id='sort-button'>
            {buttonText}
        </button>
    )

}

export default SortButton;