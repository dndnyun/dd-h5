export const url = `${process.env.VUE_APP_url}`
export const securityUrl = `${process.env.VUE_APP_security_url}`
//
// 鉴权
//
export const login = '/security/user/anon/login'
export const logout = '/security/user/logout'
export const getRandomSalt = '/security/user/anon/random-salt'
export const securityTree = '/security/permission/get/tree'
