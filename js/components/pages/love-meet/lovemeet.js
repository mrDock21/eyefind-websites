'use strict';

const MainPage = ({updatePage}) => {
    return(
        <div>
            {/** MAIN CONTENT */}
            <div className="row mb-md-3" id="main-page">
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
                                    <input onClick={() => updatePage('male')} type="image" className="w-50" src="./../img/lovemeet/male_btn.png" alt="Male"/>
                                    <input onClick={() => updatePage('female')} type="image" className="w-50" src="./../img/lovemeet/female_btn.png" alt="Female"/>
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
        </div>
    );
}

class LoveMeet extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentPage: 'main',
            searchPageUrl: 'www.love-meet.net'
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


    updatePage(page) {
        this.setState({
            currentPage: page
        })
        
        this.render();
    }

    getComponent() {
        switch(this.state.currentPage){
            case 'main':
                return <MainPage updatePage={(page) => this.updatePage(page)} />;
            case 'male':
                return <Profiles type='male'/>;
            case 'female':
                return <Profiles type='female'/>;
            default:
                return <div></div>;
        }
    }

    render() {
        var component = this.getComponent();

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

                {/** PAGE CONTENT */}
                <div className="container mt-3">
                    {component}
                </div>
            </div>
        );
    }
}

let domContainer = document.querySelector('#main_container');
ReactDOM.render(<LoveMeet />, domContainer);