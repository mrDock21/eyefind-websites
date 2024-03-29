'use strict';

const MainPage = ({updatePage}) => {
    return(
        <div>
            {/** MAIN CONTENT */}
            <div className="row mb-md-3" id="main-page">
                
                    {/** FURNITURE IMAGE */}
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-12 text-center">
                            <img src="../img/krapea/furniture_1.jpg" className="w-100" />
                        </div>
                    </div>

                    {/** TITLE */}
                    <div className="row mt-3 d-flex justify-content-center">
                        <div className="col-md-6 mt-2">
                            <p id="title">
                                Welcome to Krapea, america's number 1 swedish furniture company.
                            </p>
                        </div>
                        <div className="col-md-6"></div>
                    </div>

                    {/** FIRST DESCRIPTION */}
                    <div className="row mt-3">
                        <div className="col-md-6">
                            <p>
                            Imagine an inside city of furniture, no windows, and everything bathed in halogen! A visit to KRAPEA is a unique experience. Stores the size of a university campus. Quirky and amusing product names like Wonki, Plankfog, Higgyendraght, Slipshod, Douchenflegen, Flimsi,
                            Totter and other names we've slipped in. If you only knew what you were saying in Swedish. When you ask for the Plankfog, little do you know you just asked for a violent rectal exam in Swedish. How we laugh, and then we are melancholy and we miss the sun for 6 months. 
                            This is why floor staff will glare at you like you just felt up their kids when you dare to ask them a question. You will wander for hours in a maze of post-modern doom past miles of veneered pressboard that, like a can of Sprunk or a banana down the trousers, looks like wood from a distance. You will think that you're getting a great deal when you find an MDF chest in leopard-skin veneer for $20, not realizing that the bottom of the drawers will buckle under the weight of a pair of socks within the first week. You put it together so don't blame us when it falls apart. How we laugh, and then we are melancholy. We are rich, but still there is no sun for 6 months.
                            </p>
                        </div>
                        <div className="col-md-6 d-flex flex-column ">
                            <a href="#" alt="Click here" className="d-flex justify-content-center justify-content-md-end w-100" >
                                <img src="../img/krapea/click_here_1.jpg" />
                            </a>
                            <a href="#" alt="Questions?" className="d-flex mt-3 justify-content-center justify-content-md-end w-100" >
                                <img src="../img/krapea/questions.jpg" />
                            </a>
                        </div>
                    </div>

                    {/** LARGE TEXT */}
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <p id="special-text">
                                Special offers
                            </p>
                        </div>
                    </div>

                    {/** OFFERS */}
                    <div className="row" id="offers-row">
                        <div className="col-md-12 z-index-1 d-flex justify-content-around flex-md-row flex-column">
                            <a href="#" alt="Click here">
                                <img src="../img/krapea/offer_1.jpg" className="w-100" />
                            </a>
                        
                            <a href="#" alt="Questions?">
                                <img src="../img/krapea/offer_2.jpg" className="ml-3 w-100 " />
                            </a>
                        </div>
                    </div>

                     {/** MISION */}
                     <div className="row mt-3">
                        <div className="col-12">
                            <p>
                                Our mission at KRAPEA is to sell you low-quality home furnishings and to steal as many hours of your life as 
                                possible in the process. We believe that the whole shopping experience should last longer than a transatlantic 
                                flight. Which is why it's a maze! It is also melancholy, because that suits our temperament, even though we 
                                pretend to be cheerful. If you're going to steal our wooden pencils, we're going to make you work for your cut-price 
                                furniture. If you're going to leave your grandmother to quietly soil herself on our Wonki sofa for the entire day, 
                                we're going to mess with your mind a little. A visit to KRAPEA will take you to the extremes of physical and emotional 
                                endurance. Like a coke binge or a night at the in-laws, you'll swear that you'll never do it again but, for some 
                                inexplicable reason, you'll be back within a couple of months to fill up your car with shiny particle board. It's the 
                                sadomasochistic allure of self-assembly furniture. Flat-pack crack, all in a cheerful but melancholy package. We are laughing, 
                                and missing the sun at the same time.
                            </p>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12">
                            <p>
                                Nobody loves a homogenized corporate monoculture more than the Americans! Recent studies have shown that everyone in 
                                the state of San Andreas now owns an identical laundry basket. KRAPEA is taking over the world. Congratulations, world!
                            </p>
                        </div>
                    </div> 

            </div>
        </div>
    );
}

class Krapea extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentPage: 'main',
            searchPageUrl: 'www.krapea.com'
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

    /**
     * Updates current page re-rendering the content
     */
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
            case 'how to':
                return <HowPage updatePage={(page) => this.updatePage(page)} />;
            default:
                return <div></div>;
        }
    }

    render() {
        var component = this.getComponent();

        return (
            <div className="page">
                {/** GRAY HEADER */}
                <SearchHeader ownerUrl={'www.krapea.com'}/>

                {/** BACKGROUND */}
                

                {/** BANNER */}
                <div className="row">
                    <div className="col-md-6 w-100">
                        <img src="../img/krapea/top_banner.jpg"  className="img-fluid mx-auto w-75 d-block" />
                    </div>
                </div>
                

                {/** PAGE CONTENT */}
                <div className="container mt-3">
                    { component }
                </div>

                {/** FOOTER */}
                <div className="row" id="footer">
                    <div className="col-12 d-flex justify-content-center">
                        <img src="../img/krapea/footer.jpg" className="w-100" />
                    </div>
                </div>
            </div>
        );
    }
}

let domContainer = document.querySelector('#main_container');
ReactDOM.render(<Krapea />, domContainer);