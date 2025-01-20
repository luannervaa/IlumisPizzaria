// Get
const getCart = () => JSON.parse(localStorage.getItem('cart')) || []

// Set
const setCart = cartData => localStorage.setItem('cart', JSON.stringify(cartData))

// Functions
const addToCart = id => {
    const cart = getCart()

    if (cart.length > 0) {
        let wasModified = false

        cart.forEach(item => {
            if (item.id === id) {
                item.qtd += 1
                wasModified = true
            }
        });

        !wasModified && cart.push({ id: id, qtd: 1 })
    }
    else
        cart.push({ id: id, qtd: 1 })

    setCart(cart)
}

