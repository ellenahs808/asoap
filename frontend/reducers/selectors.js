export const productsByCategory = (state, category) => {
    const productsCategory = Object.values(state.entities.products) 
    return productsCategory.filter((product) => product.category === category)
};


export const skinCategory = state => {
    const skinProducts = Object.values(state.entities.products)
    return skinProducts.filter((product) => product.category === 'Skin')
};