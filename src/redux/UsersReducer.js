const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_LOADING = "TOGGLE-LOADING";

let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: false
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    debugger;
                    if (user.id === action.userId) {
                        return { ...user, isFollow: true }
                    }
                    return user;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, isFollow: false }
                    }
                    return user;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            };

        case TOGGLE_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };
        default:
            return state;
    }
}

export const follow = (userId) => ({
    type: FOLLOW,
    userId
});

export const unfollow = (userId) => ({
    type: UNFOLLOW,
    userId
});

export const setUsers = (users) => ({
    type: SET_USERS,
    users
});

export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
});

export const setTotalUsersCount = (totalCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount
});

export const toggleIsLoading = (isLoading) => ({
    type: TOGGLE_LOADING,
    isLoading
});

export default usersReducer;