import React from 'react';

class SongCard extends React.Component {

    render() {
        return (
            <div>
                <div className="right floated content">
                    <button 
                        className="ui button primary" 
                        onClick={() => this.props.onClick(this.props.song)}
                    >
                        select
                    </button>
                </div>
                <div className="content">
                    {this.props.song.title}
                </div>
            </div>
        );
    }
}

export default SongCard;