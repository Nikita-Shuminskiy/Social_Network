import React from 'react';
import { connect } from 'react-redux';
import { AppDispatchType, AppStateType } from '../../../Redux/Redux_Store';
import FriendsBlock from './FriendsBlock';


const mapStateToProps = (state: AppStateType) => {
    return {
        friendsPage: state.sideBar
    }
}

const mapDispatchToProps = (dispatch: AppDispatchType) => {
    return {
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(FriendsBlock);