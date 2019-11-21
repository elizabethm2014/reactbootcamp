import React, {Component} from 'react';
import Projects from './Projects';
import SocialProfiles from "./SocialProfiles";
import profile from '../assets/self3.PNG';
import Title from "./Title";
import Jokes from "./Jokes";
import FileUpload from "./FileUpload";

class App extends Component {
    constructor() {
        super();
        this.state = {displayBio: false, displayQuote: false};

        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
        this.showQuotePage = this.showQuotePage.bind(this);
    }

    toggleDisplayBio() {
        this.setState({displayBio: !this.state.displayBio});
    }

    showQuotePage() {
        this.setState({displayQuote : !this.state.displayQuote});
    }

    render() {
        return (
            <div>
                <img src={profile} alt="profile" className='profile' />
                <h1>Hello!</h1>
                <p>My name is Elizabeth.</p>
                <Title />
                {
                    this.state.displayBio ? (
                    <div>
                        <p>I live in RDU and have been a full time developer since 2014.</p>
                        <p>Besides coding I love to crochet and run!</p>
                        <button onClick={this.toggleDisplayBio}>Show less</button>
                    </div>
                ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read more</button>
                        </div>
                    )
                }
                <hr />
                <Projects  />
                <hr/>
                <SocialProfiles />
                <hr/>
                <Jokes/>
            </div>
        )
    }
}

export default App;