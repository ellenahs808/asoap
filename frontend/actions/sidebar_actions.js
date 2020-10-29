export const OPEN_SIDE = 'OPEN_SIDE';
export const CLOSE_SIDE = 'CLOSE_SIDE';
export const HOVER_CATEGORY = 'HOVER_CATEGORY';
export const HOVER_PRODUCT = 'HOVER_PRODUCT';



export const openSidebar = side => {
    return {
        type: OPEN_SIDE,
        side
    }
};



export const closeSidebar = () => ({
    type: CLOSE_SIDE
});




// export const hoverCategory = category => ({
//     type: HOVER_CATEGORY,
//     category
// });



export const hoverCategory = (category) => (
    {
        type: HOVER_CATEGORY,
        category
    }
)



// export const hoverProduct = (productId) => (
//     {
//         type: HOVER_PRODUCT,
//         productId
//     }
// )

