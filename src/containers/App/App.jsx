import React, {Component} from "react";
import {connect} from 'react-redux';
import {addPlayList} from '../../store/actions';

class App extends Component{
    componentDidMount() {
        this.props.addPlayList([1,2,3,4,5,6,7,8,9,10])
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
