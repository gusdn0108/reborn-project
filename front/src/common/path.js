export const apiurl = process.env.REACT_APP_API_URL

const auth = `${apiurl}/auth`
const board = `${apiurl}/board`
const comment = `${apiurl}/board/comment`

// ------------------------------auth---------------------------------
export const AUTH_SIGNUP = `${auth}/signup`
export const AUTH_SIGNIN = `${auth}/signin`

// ------------------------------board---------------------------------
export const BOARD_WRITE = `${board}/write`
export const BOARD_LIST = `${board}/list`
export const BOARD_UPDATE = `${board}/update/`


// ------------------------------comment---------------------------------
export const COMMENT_WRITE = `${comment}/write`
export const COMMENT_VIEW = `${comment}/view/`
export const COMMENT_UPDATE = `${comment}/update/`

