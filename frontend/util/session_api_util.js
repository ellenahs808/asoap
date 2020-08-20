// signup: should make an AJAX request that creates a new user.
// login: should make an AJAX request that creates a new session.
// logout: should make an AJAX request that deletes the current session.


export const signup = user => (
    $.ajax({
        url: `/api/users`,
        method: `POST`,
        data: { user },
        dataType: 'json',
    })
);


export const login = user => (
    $.ajax({
        url: `/api/session`,
        method: `POST`,
        data: { user },
        dataType: 'json',
    })
);


export const logout = () => (
    $.ajax({
        url: `/api/session`,
        method: `DELETE`,
        dataType: 'json',
    })
);





export const loginDemo = () => (
    $.ajax({
        url: `/api/session`,
        method: `POST`,
        data: {
            user: {
                email: 'test@testing.com',
                password: 'hunter12'
            }
        }
    })
);

