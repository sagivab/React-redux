import React from 'react';
import { connect } from 'react-redux';

class SongDetail extends React.Component {
    showSongDetail = () => {
        return (
            <div>
                <h3 className="ui header">
                    Details for:
                </h3>
                <p>
                    {this.props.selectedSong.title}
                    <br />
                    {this.props.selectedSong.duration}
                </p>
            </div>
        );
    }

    template() {
        return (
            <div>
                <h4>
                    Please select a song!
                </h4>
            </div>
        );
    }
    
    render() {
        if (this.props.selectedSong)
        {
            return this.showSongDetail();
        }
        
        return this.template();
    }
}

const mapStateToProps = state => {
    return { selectedSong: state.selectedSong };
}

export default connect(mapStateToProps)(SongDetail);