export const allSkinProducts = (state) => 
    Object.values(state.entities.products).filter((product) => 
        product.category === "Skin"
    )



export const allHairProducts = (state) =>
        Object.values(state.entities.products).filter((product) =>
            product.category === "Hair"
        )



export const allBodyProducts = (state) =>
        Object.values(state.entities.products).filter((product) =>
            product.category === "Body & Hand"
        )




export const filterProductsByCategory = (state, category) =>
    Object.values(state.entities.products).filter((product) =>
        product.category === category
    )











// export const skinCategory = state =>
//     Object.values(state.entities.products).filter((product) =>
//         product.category === 'Skin'
//     )


// export const skinSubCategory = state => 
//     Object.values(state.entities.products).filter((product) => 
//         product.sub_category === 'Skin Cleanse' ||
//         product.sub_category === 'Exfoliate' ||
//         product.sub_category === 'Treat' ||
//         product.sub_category === 'Tone' 
//     )



// export const hairCategory = state =>
//     Object.values(state.entities.products).filter((product) =>
//         product.category === 'Hair'
//     )



// export const hairSubCategory = state =>
//     Object.values(state.entities.products).filter((product) =>
//         product.sub_category === 'Hair Cleanse' ||
//         product.sub_category === 'Condition'
//     )



// export const bodyCategory = state =>
//     Object.values(state.entities.products).filter((product) =>
//         product.category === 'Body'
//     )


// export const bodySubCategory = state =>
//     Object.values(state.entities.products).filter((product) =>
//         product.sub_category === 'Hand' ||
//         product.sub_category === 'Body'
//     )
