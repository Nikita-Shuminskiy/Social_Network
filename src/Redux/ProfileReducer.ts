import { profileAPI, usersAPI } from '../Api/Api';
import { PostType, ProfilePageType, ProfileUsersType } from './React_Redux_StoreType/types/StateType';
import { ActionsTypes, AppDispatchType } from './Redux_Store';
import { v1 } from 'uuid';


const initialState: ProfilePageType = {
    postData: [
        {
            id: '1',
            message: 'helo how are you',
            likesCount: 12,
            img: 'https://cdn5.vectorstock.com/i/1000x1000/65/59/hacker-with-computer-avatar-character-vector-14776559.jpg',
        },
        {
            id: '2',
            message: 'Im learnin to React, React my first life)',
            likesCount: 12,
            img: 'https://cdn5.vectorstock.com/i/1000x1000/65/59/hacker-with-computer-avatar-character-vector-14776559.jpg',
        },
    ],
    proFileHeader: {
        headerImg: {
            img: 'https://image.freepik.com/free-photo/the-color-and-beauty-of-the-sky-at-sunset_51141-13.jpg',
        },
    },
    profileUsers: {
        aboutMe: '',
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: ''
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: null,
        photos: {
            small: '',
            large: ''
        }
    },
    status: '',
}


export function ProfileReducer(state = initialState, action: ActionsTypes): ProfilePageType {
    switch (action.type) {
        case 'PROFILE/ADD-POST':
            const postNew: PostType = {
                id: v1(),
                message: action.newMessage,
                likesCount: 0,
                img: state.profileUsers.photos.small ?
                    state.profileUsers.photos.small:'https://cdn5.vectorstock.com/i/1000x1000/65/59/hacker-with-computer-avatar-character-vector-14776559.jpg',
            }
            return {...state, postData: [...state.postData, postNew]}

        case 'PROFILE/SET-PROFILE-USER':
            return {...state, profileUsers: action.profile}

        case 'PROFILE/SET-PROFILE-STATUS':
            return {...state, status: action.status}

        case 'PROFILE/DEL-POST-PROFILE':
            return {...state, postData: state.postData.filter((f) => f.id !== action.id)}

        default:
            return state
    }
}

export const addPost = (newMessage: string) => ({type: 'PROFILE/ADD-POST', newMessage} as const)

export const setProfileUser = (profile: ProfileUsersType) => ({type: 'PROFILE/SET-PROFILE-USER', profile} as const)

export const setProfileStatus = (status: string) => ({type: 'PROFILE/SET-PROFILE-STATUS', status} as const)

export const deletePost = (id: string) => ({type: 'PROFILE/DEL-POST-PROFILE', id} as const)

export const getUserProfileThunk = (userId: number) => {
    return (dispatch: AppDispatchType) => {
        usersAPI.userIdAPI(userId)
            .then(response => {
                dispatch(setProfileUser(response.data))
            })
    }
}
export const getStatusThunk = (userId: number) => {
    return (dispatch: AppDispatchType) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setProfileStatus(response.data))
            })
    }
}

export const updateStatusThunk = (status: string) => {
    return (dispatch: AppDispatchType) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setProfileStatus(status))
                }
            })
    }
}