import React, {Component} from "react";
import {connect} from 'react-redux';
import {addPlayList} from '../../store/actions';
import * as playlistJSON from '../../playlist';

class App extends Component{
    componentDidMount() {
        const playlist = playlistJSON.default;
        this.props.addPlayList(playlist);

    }

    render() {
        return (
            <div>
                App
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        state: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPlayList: newPlayList => dispatch(addPlayList(newPlayList))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
