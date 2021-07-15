'use strict';

class LoveMeet extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchPageUrl: 'www.love-meet.net'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log(props);
    }

    componentDidMount() {
        var myCollapse = document.getElementById('main-page')
        var bsCollapse = new bootstrap.Collapse(myCollapse, {
            toggle: true
        })
        console.log(bsCollapse);

        bsCollapse.toggle();
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

    collapsePage() {
        var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
        console.log(collapseElementList);
    }

    render() {
        return (
            <div className="page">
                
                {/** GRAY HEADER */}
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

                    {/** MAIN CONTENT */}
                    <div className="collapse row mb-md-3" id="main-page">
                        <div className="col-md-12">

                            <div className="row" id="find-date-panel">
                                {/** CHOOSE GENDER BUTTONS */}
                                <div className="card col-md-5 lovemeet-card">
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
                                            <input type="image" className="w-50" src="./../img/lovemeet/male_btn.png" alt="Male"/>
                                            <input href="#" type="image" className="w-50" src="./../img/lovemeet/female_btn.png" alt="Female"/>
                                        </div>
                                    </div>
                                </div>

                                {/** "Random" (not yet) person's info */}
                                <div className="card mt-1 mt-md-0 col-md-7 lovemeet-card">
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

                            <p>
                                <a className="btn btn-primary" data-bs-toggle="collapse" href="#main-page" role="button" aria-expanded="false" aria-controls="main-page">
                                Link with href
                                </a>
                                <button className="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#profile-page" aria-expanded="false" aria-controls="profile-page">
                                Button with data-bs-target
                                </button>
                            </p>
                            <div className="collapse" id="collapseExample">
                                <div className="card card-body">
                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                </div>
                            </div>

                            {/** PINK LINE */}                            
                            <hr className="middle-line"/>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <p  className="w-100 h-100 text-center text-bold">
                                        IN PARTNERSHIP WITH
                                    </p>
                                </div>
                            </div>

                            {/** ADS */}
                            <div className="row mt-3">
                                <div id="bottom-ads-container">
                                    
                                </div>
                            </div>

                            {/** PINK LINE */}                            
                            <hr className="middle-line"/>

                            {/** FOOTER */}
                            <div className="row" id="footer">
                                <div className="col-md-12 d-flex justify-content-center align-items-center">
                                    <a href="#find-date-panel">
                                        love-meet.net
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    { /** PROFILES PAGE */}
                    <div className="row mb-md-3" id="profiles-page">

                    </div>
                    
                </div>
            </div>
        );
    }
}

let domContainer = document.querySelector('#main_container');
ReactDOM.render(<LoveMeet />, domContainer);