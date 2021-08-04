'use strict';

class SearchHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchPageUrl: this.props.ownerUrl,
            showControls: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * Updates URL text
     */
     handleChange(event) {
        var state = {...this.state};
        state.searchPageUrl = event.target.value;
        this.setState(state);
    }

    /**
     * Redirects to "GTA-URL" requested
     */
    handleSubmit(event) {
        alert('Requested search: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        // GRAY HEADER
        return (
            <header>
                <div className="split space-between">
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" 
                                name="page-search" 
                                className="border-black" 
                                placeholder="www.eyefind-url.net"
                                onChange={this.handleChange}
                                value={ this.state.searchPageUrl }/>
                        </form>
                    </div>
                    <div id="btns-header">
                        <div className="border-black border-radius-10 btn-header">
                            <a id="email-btn" href="#">
                                <img src="./../img/msg-img.png"/>
                            </a>
                        </div>
                        <div className="border-black border-radius-10 btn-header">
                            <a id="home-btn" href="./../index.html">
                                <img src="./../img/home-img.png"/>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}