import React, {Component} from "react";
import {connect} from 'react-redux';
import {
    addPlayList,
    setPageSize,
    addTotalCountItems,
    addCurrentPage,
    addDataUniqueItems
} from '../../store/actions';
import * as playlistJSON from '../../playlist';
import {Table, ToolsBar, FiltrationSelect} from '../../components';
import styles from './App.module.css';

class App extends Component{
    componentDidMount() {
        const playlist = playlistJSON.default;
        this.props.addPlayList(playlist);
        this.props.addTotalCountItems(playlist.length);
        //-----
        this.props.addDataUniqueItems(playlist)
    }

    render() {
        const firstItemShow = (this.props.currentPage - 1) * this.props.pageSize;
        const lastItemShow = firstItemShow + this.props.pageSize;
        const playlistForShow = this.props.playList.slice(firstItemShow, lastItemShow);

        const totalCountPage = Math.ceil(this.props.totalCountItems / this.props.pageSize);
        const pages = [];
        for(let i = 1; i <= totalCountPage; i++){
            pages.push(i)
        }

        return (
            <div className={styles.appBox}>
                <main className={styles.mainConent}>
                    <Table
                        playlistForShow={playlistForShow}
                    />
                    <aside className={styles.filtrationSelectsBox}>
                        <FiltrationSelect
                            title={'Singer'}
                            valueOptions={this.props.uniqueSingers}
                        />
                        <FiltrationSelect
                            title={'Ganre'}
                            valueOptions={this.props.uniqueSingers}
                        />
                        <FiltrationSelect
                            title={'Year'}
                            valueOptions={this.props.uniqueSingers}
                        />
                    </aside>
                </main>
                <ToolsBar
                    firstItemShow={firstItemShow + 1}
                    lastItemShow={lastItemShow}
                    setPageSize={this.props.setPageSize}
                    pages={pages}
                    addCurrentPage={this.props.addCurrentPage}
                    currentPage={this.props.currentPage}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        playList: state.playList,
        pageSize: state.tableSetting.pageSize,
        totalCountItems: state.tableSetting.totalCountItems,
        currentPage: state.tableSetting.currentPage,
        uniqueSingers: state.formSetting.uniqueSingers,
        uniqueGanre: state.formSetting.uniqueGanre,
        uniqueYear: state.formSetting.uniqueYear,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPlayList: newPlayList => dispatch(addPlayList(newPlayList)),
        setPageSize: page => dispatch(setPageSize(page)),
        addTotalCountItems: totalCount => dispatch(addTotalCountItems(totalCount)),
        addCurrentPage: pageNum => dispatch(addCurrentPage(pageNum)),
        addDataUniqueItems: items => dispatch(addDataUniqueItems(items))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
