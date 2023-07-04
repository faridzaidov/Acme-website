import { createContext, useEffect, useState } from "react"

const Context = createContext()

function ContextProvider({ children }) {
    const [cartItems, setCartItems] = useState(
        JSON.parse(localStorage.getItem('ACME_CART_ITEMS')) || []
    )

    function addToCart(newItem) {
        setCartItems(prevItems => [...prevItems, newItem])
    }

    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    useEffect(() => {
        localStorage.setItem('ACME_CART_ITEMS', JSON.stringify(cartItems))
    }, [cartItems])

    return (
        <Context.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }