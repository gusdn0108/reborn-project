export const apiurl = process.env.REACT_APP_API_URL

const auth = `${apiurl}/auth`
const board = `${apiurl}/board`

// ------------------------------auth---------------------------------
export const AUTH_SIGNUP = `${auth}/signup`
export const AUTH_SIGNIN = `${auth}/signin`


export const BOARD_WRITE = `${board}/write`
export const BOARD_LIST = `${board}/list`
export const BOARD_UPDATE = `${board}/update/`





