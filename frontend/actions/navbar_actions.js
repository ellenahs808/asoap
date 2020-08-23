export const IS_OPEN = 'IS_OPEN';
export const IS_CLOSED = 'IS_CLOSED';



export const openMainSidebar = isOpen => ({
    type: IS_OPEN,
    isOpen
});



export const closeMainSidebar = isClosed => ({
    type: IS_CLOSED,
    isClosed,
});

