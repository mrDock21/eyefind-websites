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
                
                {/** BANNER */}
                <div>
                    <img src="../img/lovemeet/banner/lovemeet.png" className="img-fluid mx-auto d-block" alt="Responsive image" />
                </div>

                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-12">

                            <div className="row">
                                <div className="card px-md-1 col-md-5 offset-md-1 lovemeet-card">
                                    <div className="card-header">
                                        <img className="card-img-top  w-50" src="./../img/lovemeet/find_love.png" alt="Find love" />
                                    </div>
                                    <div className="card-body">
                                        <h3 className="card-title">DON'T BE SHY!</h3>
                                        <p className="card-text">
                                            You can search for Singles in your area. <br/>
                                            Just select your fancies below.          <br/>
                                            Mr Fackler, `LoveMeet` Founder.          <br/>
                                        </p>

                                        {/** Buttons */}
                                        <div className="row">
                                            <img className="w-50" src="./../img/lovemeet/male_btn.png" alt="Male"/>
                                            <img className="w-50" src="./../img/lovemeet/female_btn.png" alt="Female"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="card pl-md-1  mt-1 mt-md-0 col-md-6 lovemeet-card">
                                    <div className="card-header">
                                        <img className="card-img-top w-50" src="./../img/lovemeet/true_love.png" alt="Card image cap" />
                                    </div>
                                    <div className="card-body">
                                        <img className="card-img-top" src="./../img/lovemeet/female/female_1.png" alt="Card image cap" />
                                        <p className="card-text">
                                            No pre-nups <br/>
                                            From Rusia Without Love
                                        </p>
                                    </div>
                                </div>
                            </div>

                            
                            <hr className="middle-line"/>

                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <p  className="w-100 h-100 text-center text-bold h5 text-uppercase">
                                        IN PARTNERSHIP WITH
                                    </p>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div id="bottom-ads-container">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

let domContainer = document.querySelector('#main_container');
ReactDOM.render(<LoveMeet />, domContainer);