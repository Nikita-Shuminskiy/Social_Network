import React from 'react';
import { AppDispatchType, AppStateType } from '../../../Redux/Redux_Store';
import { addPost } from '../../../Redux/ProfileReducer';
import { connect } from 'react-redux';
import MyPost from './MyPost';
import { PostType, ProfilePageType } from '../../../Redux/React_Redux_StoreType/types/StateType';

type mapStateToPropsType = {
    postData:Array<PostType>
    profileUsers: ProfilePageType
}

const mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        postData: state.profile.postData,
        profileUsers: state.profile
    }
}

const mapDispatchToProps = (dispatch: AppDispatchType) => {
    return {
        addPost: (text:string) => {dispatch(addPost(text))}
    }
}

const MyPostContainer = connect(mapStateToProps, {  addPost})(MyPost)

export default MyPostContainer