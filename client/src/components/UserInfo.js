import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getTokenBalance} from "../actions/index";

const mapDispatchToProps = dispatch => {
    return {
        getTokenBalance: (addr) => dispatch(getTokenBalance(addr))
    };
};

class ConnectedUserInfo extends Component {
    constructor() {
        super();

        this.state = {
            addr: '0x8a45A9916C1bf2118E1047ad20D8c4Ba776D9722'
        }
    }

    componentDidMount() {
        this.props.getTokenBalance(this.state.addr);
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
