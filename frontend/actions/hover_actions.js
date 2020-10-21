// export const IS_OPEN = 'IS_OPEN';
// export const IS_CLOSED = 'IS_CLOSED';
export const HOVER_CATEGORY = 'HOVER_CATEGORY';
export const HOVER_PRODUCT = 'HOVER_PRODUCT';



// export const openSidebar = isOpen => ({
//     type: IS_OPEN,
//     isOpen
// });



// export const closeSidebar = isClosed => ({
//     type: IS_CLOSED,
//     isClosed,
// });




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



export const hoverProduct = (productId) => (
    {
        type: HOVER_PRODUCT,
        productId
    }
)

