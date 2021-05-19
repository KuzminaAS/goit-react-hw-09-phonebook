const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUserName = state => state.auth.user.name;

const allSelectors = {
    getIsAuthenticated,
    getUserName
}
export default allSelectors;