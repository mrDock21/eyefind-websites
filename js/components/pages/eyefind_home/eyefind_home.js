'use strict';

class EyefindHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            //currPage: -1,
        };
    }

    render() {
        return (
            <div className="page">
                {/** GRAY HEADER */}
                <SearchHeader ownerUrl={'www.eyefind.net'}/>

                <nav className="navbar navbar-light bg-primary ">
                    <a href="./../pages/eyefind_home.html" className="navbar-brand" style={{marginLeft: "5%"}}>
                        <img height="60" alt="" src="./../img/eyefind-logo.png"/>
                    </a>
                </nav>
                <p className="h3-md text-info mx-5">
                    Welcome Niko Bellic to eyefind.info!
                </p>
                <div className="container mt-3">
                    
                    <div className="row">
                        
                        <div className="col-md-12">
        
                            {/* search and email panel */}
                            <div className="row" id="search-email-panel">
                                <div className="col-md-6 pl-0 pr-0 pl-md-3"> 
                                    <div className="d-md-flex flex-column se-panel h-100">
        
                                        {/* search form */}
                                        <div className="container mb-2 mt-2 label-background">
                                            <form className="form-inline">
                                                <div className="input-group w-90 mx-auto">
                                                    <div className="input-group-prepend">
                                                        <button type="button" className="btn my-auto">
                                                            <img className="img-fluid" width="25px" height="25px" src="https://www.nicepng.com/png/full/88-881641_research-search-icon-png-yellow.png"/>
                                                        </button>
                                                    </div>
                                                    <input className="form-control text-uppercase my-2" type="text" placeholder="Lucky search"/>
                                                </div>
                                            </form>
                                        </div>
                                        
                                        <div className="container mb-3 mt-1 label-background">
                                            <div className="text-white text-uppercase text-center font-weight-bold my-2">
                                                Explore eyefind.info services
                                            </div>
                                        </div>
                                        {/* search categories */}
                                        <div className="container mb-3 d-flex flex-row flex-wrap text-left pl-md-5">
                                            <div className="w-50 my-2"> 
                                                <a href="#" className="list-group-item-action "> 
                                                    <img height="50px" src="http://iconsetc.com/icons-watermarks/flat-circle-white-on-yellow/classica/classica_police-car/classica_police-car_flat-circle-white-on-yellow_512x512.png"/> 
                                                    AUTOS 
                                                </a> 
                                            </div>
                                            <div className="w-50 my-2">
                                                <a href="#" className="list-group-item-action "> 
                                                    <img height="50px" src="http://iconsetc.com/icons-watermarks/flat-circle-white-on-yellow/classica/classica_music-cleft/classica_music-cleft_flat-circle-white-on-yellow_256x256.png"/>
                                                    RING TONES 
                                                </a>
                                            </div>
                                            <div className="w-50 mb-1">
                                                <a href="#" className="list-group-item-action ">
                                                    <img height="50px" src="http://iconsetc.com/icons-watermarks/flat-circle-white-on-yellow/classica/classica_hot-tea-cup/classica_hot-tea-cup_flat-circle-white-on-yellow_512x512.png"/>
                                                    EATING OUT 
                                                </a>
                                            </div>
                                            <div className="w-50 mb-1">
                                                <a href="#" className="list-group-item-action "> 
                                                    <img height="50px" src="http://iconsetc.com/icons-watermarks/flat-circle-white-on-yellow/classica/classica_at-sign/classica_at-sign_flat-circle-white-on-yellow_512x512.png"/>
                                                    SHARING 
                                                </a>
                                            </div>
                                            <div className="w-50 mb-1">
                                                <a href="#" className="list-group-item-action "> 
                                                    <img height="50px" src="http://iconsetc.com/icons-watermarks/flat-circle-white-on-yellow/classica/classica_crown-2/classica_crown-2_flat-circle-white-on-yellow_256x256.png"/>
                                                    MONEY 
                                                </a>
                                            </div>
                                            <div className="w-50 mb-1">
                                                <a href="#" className="list-group-item-action ">                                        
                                                    <img height="50px" src="http://iconsetc.com/icons-watermarks/flat-circle-white-on-yellow/classica/classica_shopping-cart-3/classica_shopping-cart-3_flat-circle-white-on-yellow_256x256.png"/>
                                                    SHOPPING 
                                                </a>
                                            </div>
                                            <div className="w-50">
                                                <a href="#" className="list-group-item-action ">                                        
                                                    <img height="50px" src="http://iconsetc.com/icons-watermarks/flat-circle-white-on-yellow/classica/classica_pencil-1/classica_pencil-1_flat-circle-white-on-yellow_256x256.png"/>
                                                    NEWS
                                                </a>
                                            </div>
                                            <div className="w-50">
                                                <a href="#" className="list-group-item-action ">
                                                    <img height="50px" src="http://iconsetc.com/icons-watermarks/flat-circle-white-on-yellow/classica/classica_sun-glasses/classica_sun-glasses_flat-circle-white-on-yellow_256x256.png"/>                                        
                                                    TRAVEL 
                                                </a>
                                            </div>
                                        </div>
        
                                    </div>
                                </div>
        
                                <div className="col-md-3 mt-3 mt-md-0"  id="email-panel">
                                    <div className="d-flex flex-column justify-content-between p-0">
                                        {/* email panel */}
                                        <div className="container d-flex justify-content-center">
                                            <img alt="" 
                                                className="mt-3 w-100"
                                                src="./../img/eyefind-logo.png"/>
                                        </div>
                                        <div className="display-1 text-center">
                                            <p className="text-bolder">
                                                10
                                            </p>
                                        </div>
                                        <div id="check-email-btn" className="d-flex align-items-center">
                                            <div className="p-2 w-100">
                                                <a  href="./eyefind_emails.html"
                                                    className="btn rounded-0 w-100 h-100 text-center text-uppercase text-white">
                                                    Check email
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div id="lovemeet-panel" className="col-md-3 mt-3 mt-md-0"> 
                                    <div className="d-flex flex-column justify-content-between p-0">
                                        {/* lovemeet panel */}
                                        <div className="container d-flex justify-content-center">
                                            <img alt="" 
                                                className="mt-3 w-100"
                                                src="./../img/lovemeet/lovemeet-logo.jpg"/>
                                        </div>
                                        <div id="panel-img">
                                            <img alt="" 
                                                className="p-2 w-100 mx-auto d-block"
                                                src="./../img/lovemeet/male.jpg"/>
                                        </div>
                                        <div id="lovemeet-btn" className="d-flex align-items-center">
                                            <div className="p-2 w-100">
                                                <a  href="./lovemeet.html"
                                                    className="btn rounded-0 w-100 h-100 text-center text-uppercase text-white">
                                                    Find love now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        
                            </div>
                            
                            {/* ads here */}
                            <div className="row mt-4">
                                
                                <div className="col-md-9 pr-md-0" id="news_ad">
                                    {/* weazel news ad here */}
                                    <NewsAd />
                                </div>
                                
                                <div id="ad-middle-side"  className="col-md-3">
                                    {/* liberty tree ad here */}
                                    <SideAd images={AD_NEWS}/>
                                </div>
                            </div>

                            {/* carousel tv */}
                            <div className="row mt-4">
                                <div className="col-md-9 pr-md-0 d-flex flex-column">
                                    <div className="mb-2">
                                        <p className="w-100 h-100 text-center text-white h5 text-uppercase"
                                        style={{ background: "#5a98c9" }}>
                                            Eyefind.info hot tv topics
                                        </p>
                                    </div>
                                    <div id="tv_carousel_container">
                                        {/* carousel here */}
                                    </div>
                                </div>
                                
                                <div id="ad-bottom-side" className="col-md-3">
                                    {/* ads here */}
                                    <RandomAd/>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <p  className="w-100 h-100 text-center text-white h5 text-uppercase" 
                                        style={{ background: "#5a98c9" }}>
                                        Also on eyefind.info
                                    </p>
                                </div>
                            </div>
                            
                            {/* ads here */}
                            <div id="bottom-ads-container">
                                {/* 4 ads here */}
                                <BottomAds/>
                            </div>

                            <footer className="row mt-3">
                                <div className="col-md-12" style={{background: "#5a98c9"}}>
                                    <p  className="w-100 h-100 text-center text-white">
                                        We collect your personal information on this site eyefind.info
                                    </p>
                                </div>
                            </footer>
        
                        </div>
                        
                    </div>
                    
                </div>

            </div>
        );
    }
}

let domContainer = document.querySelector('#main_container');
ReactDOM.render(<EyefindHome />, domContainer);
