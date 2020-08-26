import cookie from 'cookie'

export const parseCookies = (request?: any, options = {}) => {
    return cookie.parse(
        request? request.headers.cookie || "": document.cookie,
        options
    );

}