import { ApiUserType, usersAPI } from '../Api/Api'
import { ActionsTypes, AppDispatchType } from './Redux_Store'

type InitStateType = typeof initialState
const initialState = {
    dataUsers:  [] as ApiUserType[],
    totalCount: 10,
    currentPage: 1,
    pageSize: 10,
    isFetching: false,
    disabledInProgressUser: [] as Array<number>,
}

export function UsersReducer(state = initialState, action: ActionsTypes): InitStateType {
    switch (action.type) {
        case 'USER/Follow':
            return {
                ...state,
                dataUsers: state.dataUsers.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case 'USER/Un-Follow':
            return {
                ...state,
                dataUsers: state.dataUsers.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case 'USER/Set-UsersContainerAPI':
            return {...state, dataUsers: action.users}
        case 'USER/CURRENT-PAGES':
            return {...state, currentPage: action.pageNumberCurrent}

        case 'USER/TOTAL-USER-COUNT':
            return {...state, totalCount: action.totalCount}

        case 'USER/Toggle is fetching':
            return {...state, isFetching: action.isFetching}
        case 'USER/TOGGLE-DISABLED-BUTTON-USER': {
            return {
                ...state,
                //@ts-ignore
                disabledInProgressUser: action.disFetching ? [...state.disabledInProgressUser, action.idUser] : [state.disabledInProgressUser.filter(id => id !== action.idUser)]
            }
        }
        default:
            return state
    }
}
//action
export const userDissableButton = (disFetching: boolean, idUser: number) => ({
    type: 'USER/TOGGLE-DISABLED-BUTTON-USER',
    disFetching,
    idUser
} as const)
export const follow = (userId: number) => ({type: 'USER/Follow', userId} as const)
export const unFollow = (userId: number) => ({type: 'USER/Un-Follow', userId} as const)
export const setUsers = (users: ApiUserType[]) => ({type: 'USER/Set-UsersContainerAPI', users} as const)
export const setCurrentPages = (pageNumberCurrent: number) => ({type: 'USER/CURRENT-PAGES', pageNumberCurrent} as const)
export const setTotalUserCount = (totalCount: number) => ({type: 'USER/TOTAL-USER-COUNT', totalCount} as const)
export const setIsFetching = (isFetching: boolean) => ({type: 'USER/Toggle is fetching', isFetching} as const)
//thunk
export const getUserThunk = (currentPage: number, pageSize: number) => {
    return (dispatch: AppDispatchType) => {
        dispatch(setIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUserCount(data.totalCount))
            dispatch(setCurrentPages(currentPage))
        })
    }
}
export const followThunk = (id: number) => {
    return (dispatch: AppDispatchType) => {
        dispatch(userDissableButton(true, id))
        usersAPI.followApi(id).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(follow(id))
            }
            dispatch(userDissableButton(false, id))
        })
    }
}
export const unfollowThunk = (id: number) => {
    return (dispatch: AppDispatchType) => {
        dispatch(userDissableButton(true, id))
        usersAPI.unFollowApi(id).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unFollow(id))
            }
            dispatch(userDissableButton(false, id))
        })
    }
}
