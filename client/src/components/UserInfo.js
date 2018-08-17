import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getTokenBalance} from "../actions/index";

const mapDispatchToProps = dispatch => {
    return {
        getTokenBalance: () => dispatch(getTokenBalance())
    };
};

class ConnectedUserInfo extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getTokenBalance();
    }

    render() {
        return (
            <h2>{this.props.tokenBalance}</h2>
        );
    }
}

const mapStateToProps = state => {
    return {
        tokenBalance: state.tokenBalance
    };
};

const UserInfo = connect(mapStateToProps, mapDispatchToProps)(ConnectedUserInfo);

export default UserInfo;
