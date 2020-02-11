import React, {Component} from "react";
import {connect} from 'react-redux';
import {addPlayList} from '../../store/actions';
import * as playlistJSON from '../../playlist';
import {Table, ToolsBar} from '../../components'

class App extends Component{
    componentDidMount() {
        const playlist = playlistJSON.default;
        this.props.addPlayList(playlist);

    }

    render() {
        //console.log(this.props.state);
        const playlistForShow = this.props.state.slice(0, 3);

        return (
            <div>
                <Table
                    playlistForShow={playlistForShow}
                />
                <ToolsBar />
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
