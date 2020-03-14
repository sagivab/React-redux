import React from 'react';
import { connect } from 'react-redux';
import SongCard from './SongCard';
import { selectSong } from '../actions';


class SongList extends React.Component {

    state = { title: "", duration: ""};
    renderList() {
        return this.props.songs.map((song,key) => {
            return (
                <div className="item" key={key}>
                    <SongCard 
                        song={song} 
                        onClick={this.props.selectSong}
                    />
                </div>
            );
        });
    }

    render() {
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    // let duration = "";
    // state.songs.map(song => {
    //     if (song.title === state.selectedSong)
    //         duration = song.duration;
    // });
    return { songs: state.songs , selectedSong: state.selectedSong};
};

export default connect(mapStateToProps, { selectSong })(SongList);