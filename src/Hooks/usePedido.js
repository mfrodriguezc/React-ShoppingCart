import { useState } from "react";



export const usePedido = () => {

    const [countProduct, setCountProduct] = useState(1);

    const sumCountProduct = () => setCountProduct(countProduct + 1)
    const difCountProduct = () => {

        if (countProduct === 0) return

        setCountProduct(countProduct - 1)
    }

    const [countProduct2, setCountProduct2] = useState(1);
    const [countProduct3, setCountProduct3] = useState(1);
    const [countProduct4, setCountProduct4] = useState(1);
    const [countProduct5, setCountProduct5] = useState(1);
    const [countProduct6, setCountProduct6] = useState(1);

    const sumCountProduct2 = () => setCountProduct2(countProduct2 + 1)
    const difCountProduct2 = () => {

        if (countProduct2 === 0) return
        setCountProduct2(countProduct2 - 1)
    }
    const sumCountProduct3 = () => setCountProduct3(countProduct3 + 1)
    const difCountProduct3 = () => {

        if (countProduct3 === 0) return
        setCountProduct3(countProduct3 - 1)
    }
    const sumCountProduct4 = () => setCountProduct4(countProduct4 + 1)
    const difCountProduct4 = () => {

        if (countProduct4 === 0) return
        setCountProduct4(countProduct4 - 1)
    }
    const sumCountProduct5 = () => setCountProduct5(countProduct5 + 1)
    const difCountProduct5 = () => {

        if (countProduct5 === 0) return
        setCountProduct5(countProduct5 - 1)
    }
    const sumCountProduct6 = () => setCountProduct6(countProduct6 + 1)
    const difCountProduct6 = () => {

        if (countProduct6 === 0) return
        setCountProduct6(countProduct6 - 1)
    }


    return {
        countProduct, sumCountProduct, difCountProduct,
        countProduct2, sumCountProduct2, difCountProduct2,
        countProduct3, sumCountProduct3, difCountProduct3,
        countProduct4, sumCountProduct4, difCountProduct4,
        countProduct5, sumCountProduct5, difCountProduct5,
        countProduct6, sumCountProduct6, difCountProduct6
    }

}