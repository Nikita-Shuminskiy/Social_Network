import React, { ComponentType } from 'react'
import { connect } from 'react-redux';
import { AppStateType } from '../../Redux/Redux_Store';
import { ProfileInfo } from './MyPost/Profile-Info/ProfileInfo';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../Hoc/WithAuthRedirect';
import { compose } from 'redux';
import {
    getStatusThunk,
    getUserProfileThunk,
    updatePhotoThunk,
    updateStatusThunk,
    updProfileDataThunk
} from '../../Redux/ProfileReducer';
import {PhotosProfileType, ProfileType } from '../../Api/Api';


type PathParamsType = {
    userId: string | undefined
}
type MapStateToPropsType = {
    profileUsers: any
    status: string
    authID: number | null
    photos: PhotosProfileType
}
type MapStateDispatchToPropsType = {
    getUserProfileThunk: (userId: number) => void
    getStatusThunk: (userId: number) => void
    updateStatusThunk: (status: string) => void
    updatePhotoThunk: (photo: string) => void
    updProfileDataThunk: (data: ProfileType) => void
}

type ProfileContainerType = MapStateToPropsType & MapStateDispatchToPropsType
type PropsProfileContainerType = RouteComponentProps<PathParamsType> & ProfileContainerType

export type State = {}

class ProfileContainer extends React.Component<PropsProfileContainerType, State> {
    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = String(this.props.authID)
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfileThunk(Number(userId))
        this.props.getStatusThunk(Number(userId))
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsProfileContainerType>, prevState: Readonly<State>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }


    render() {
        return (
            <>
                <ProfileInfo {...this.props} updProfileData={this.props.updProfileDataThunk}
                             updatePhoto={this.props.updatePhotoThunk}
                             owner={Number(this.props.match.params.userId)}
                             updateStatusThunk={this.props.updateStatusThunk} status={this.props.status}
                             profileUsers={this.props.profileUsers} photos={this.props.photos}/>
            </>
        )
    }
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profileUsers: state.profile.profileUsers,
    status: state.profile.status,
    authID: state.authMe.id,
    photos: state.profile?.profileUsers?.photos
})


export default compose<ComponentType>(connect(mapStateToProps, {
    getUserProfileThunk,
    getStatusThunk,
    updateStatusThunk,
    updatePhotoThunk,
    updProfileDataThunk
}), withAuthRedirect, withRouter)(ProfileContainer)






