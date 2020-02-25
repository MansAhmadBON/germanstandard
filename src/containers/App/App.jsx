import React, {Component} from "react";
import {connect} from 'react-redux';
import {
    addPlayList,
    setPageSize,
    addTotalCountItems,
    addCurrentPage,
    addDataUniqueItems,
    addSelectValueSinger,
    addSelectValueGanre,
    addSelectValueYEAR,
    sortBySinger,
    sortBySong,
    sortByGanre,
    sortByYear
} from '../../store/actions';
import * as playlistJSON from '../../playlist';
import {Table, ToolsBar, FiltrationSelect} from '../../components';
import styles from './App.module.css';

class App extends Component{
    componentDidMount() {
        const playlist = playlistJSON.default;
        this.props.addPlayList(playlist);
        this.props.addDataUniqueItems(playlist)
    }

    render() {
        this.props.addTotalCountItems(this.props.playlistSow.length);

        const firstItemShow = (this.props.currentPage - 1) * this.props.pageSize;
        const lastItemShow = firstItemShow + this.props.pageSize;
        const playlistForShow = this.props.playlistSow.slice(firstItemShow, lastItemShow);

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
                        sortBySinger={this.props.sortBySinger}
                        sortBySong={this.props.sortBySong}
                        sortByGanre={this.props.sortByGanre}
                        sortByYear={this.props.sortByYear}
                    />
                    <aside className={styles.filtrationSelectsBox}>
                        <FiltrationSelect
                            title={'Singer'}
                            valueOptions={this.props.uniqueSingers}
                            addSelectValue={this.props.addSelectValueSinger}
                            setPageSize={this.props.setPageSize}
                            pageSize={this.props.pageSize}
                        />
                        <FiltrationSelect
                            title={'Ganre'}
                            valueOptions={this.props.uniqueGanre}
                            addSelectValue={this.props.addSelectValueGanre}
                            setPageSize={this.props.setPageSize}
                            pageSize={this.props.pageSize}
                        />
                        <FiltrationSelect
                            title={'Year'}
                            valueOptions={this.props.uniqueYear}
                            addSelectValue={this.props.addSelectValueYEAR}
                            setPageSize={this.props.setPageSize}
                            pageSize={this.props.pageSize}
                        />
                    </aside>
                </main>
                <ToolsBar
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
        playlistSow: state.playList.playlistShow,
        playList: state.playList.playlist,
        pageSize: state.tableSetting.pageSize,
        totalCountItems: state.tableSetting.totalCountItems,
        currentPage: state.tableSetting.currentPage,
        uniqueSingers: state.formSetting.uniqueSingers,
        uniqueGanre: state.formSetting.uniqueGanre,
        uniqueYear: state.formSetting.uniqueYear,
        selectsValue: state.playList.selectsValue
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addPlayList: newPlayList => dispatch(addPlayList(newPlayList)),
        setPageSize: page => dispatch(setPageSize(page)),
        addTotalCountItems: totalCount => dispatch(addTotalCountItems(totalCount)),
        addCurrentPage: pageNum => dispatch(addCurrentPage(pageNum)),
        addDataUniqueItems: items => dispatch(addDataUniqueItems(items)),
        addSelectValueSinger: value => dispatch(addSelectValueSinger(value)),
        addSelectValueGanre: value => dispatch(addSelectValueGanre(value)),
        addSelectValueYEAR: value => dispatch(addSelectValueYEAR(value)),
        sortBySinger: () => dispatch(sortBySinger()),
        sortBySong: () => dispatch(sortBySong()),
        sortByGanre: () => dispatch(sortByGanre()),
        sortByYear: () => dispatch(sortByYear()),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
