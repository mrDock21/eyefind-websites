'use strict';

class LoveMeet extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchPageUrl: 'mail.eyefind.info'
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
        return (
            <div className="page">

                <header>
                    <div className="split space-between">
                        <div>
                            <form onSubmit={this.handleSubmit}>
                                <input type="text" 
                                    name="page-search" 
                                    className="border-black" 
                                    placeholder="www.love-meet.net"
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
                
                <section className="mx-1 mx-md-5">
                    <img src="../img/banner/lovemeet.png" className="img-fluid mx-auto d-block" alt="Responsive image" />
                    <div className="d-flex justify-content-between text-bold"> 
                        <p> EMAILS</p>
                        <p> UNREAD</p>
                    </div>
                    <div id="email-list">
                        <div className="p-3">
                            
                        </div>
                        <div style={{width: "10%", backgroundColor: "gray"}}>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

let domContainer = document.querySelector('#main_container');
ReactDOM.render(<LoveMeet />, domContainer);