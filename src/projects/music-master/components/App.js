import React, {Component} from 'react';
import Artist from './Artist.js';
import Tracks from './Tracks.js';
import Search from './Search.js';

const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com';

class App extends Component {
    state = { artist: null, tracks: []};

    componentDidMount() {
        this.searchArtist('pentatonix');
    }

    searchArtist = artistQuery => {
        console.log('search for artist');
        fetch(`${API_ADDRESS}/artist/${artistQuery}`)
            .then(response => response.json())
            .then(json => {
                console.log("got a response", json);
                if (json.artists.total > 0) {
                    const artist = json.artists.items[0];
                    console.log("artist", artist);
                    this.setState({artist});

                    fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
                        .then(response => response.json())
                        .then(json =>
                        {
                            this.setState({tracks: json.tracks});
                            console.log('tracks', json.tracks);
                        })
                        .catch(error => alert(error.message));
                }
            })
            .catch(error => alert(error.message));

    }

    render() {
        return (
            <div>
                <h2>Music Master</h2>
                <Search searchArtist={this.searchArtist}/>
                <Artist artist={this.state.artist}/>
                <Tracks tracks={this.state.tracks}/>
            </div>
        );
    }
}

export default App;