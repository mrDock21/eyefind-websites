'use strict';

class LifestyleAutos extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            currPage: 0,
        };
    }

    onChangePage(index) {
        const state = {...this.state};

        state.currPage = index;

        this.setState(state);
    }

    getPage() {
        switch (this.state.currPage) {
            case 0: return <LifestyleAutosHome/>;
        }
    }

    getFooterAd(){
        if (Math.random() > 0.5) {
            return (
                <img alt="ad" src="./../img/brucies_ela/b-ad-4.jpg"/>
            );
        }
        return (
            <img alt="ad" src="./../img/brucies_ela/b-ad-5.jpg"/>
        );
    }

    getHeaderBtn(index, text) {
        var btnState = (this.state.currPage === index) ? "active" : "";
        return (
            <button className={`btn my-0 py-0 bela-header-btn ml-3 mr-1 ${btnState}`}
                    onClick={() => this.onChangePage(index)}
                    type="button"
                    key={index}>
                <p className="h4 my-0">{text}</p>
            </button>
        );
    }

    render() {
        const btns = [
            "Home", "Style", "Motivation", "Supplements",
            "Cosmetic surgery", "Relantionships", "Emotional support",
            "Fitness/Body", "Special Status", "Nutrition", "Personal Grow"
        ];
        const header_btns_ui = btns.map((val, i) =>
            this.getHeaderBtn(i, val)
        );

        return (
            <div className="page">
                
                {/** GRAY HEADER */}
                <SearchHeader ownerUrl={'www.bruciesexecutivelifestyleautos.com'}/>
                
                <div className="container">

                    <div className="row" id="heading-imgs">
                        <img src="./../img/brucies_ela/bmain-header.jpg"/>
                    </div>

                    <div className="row mb-5">
                        <div className="col-md-8 pl-5 pr-1">
                            <div className="row">
                                { header_btns_ui }
                            </div>
                            <div className="row">
                                { this.getPage() }
                            </div>
                        </div>

                        <div className="col-md-4">
                            <LifestyleAutosSideAds/>
                        </div>
                    </div>

                    <div className="row">
                        { this.getFooterAd() }
                    </div>

                    <div className="row mt-5 py-5">
                        <div className="col">
                            <img alt="logo" src="./../img/brucies_ela/blogo.jpg"/>
                        </div>
                        <div className="col">
                            <p className="text-end text-bold text-white">
                                Brucie Executive Lifestyle Autos.® <br/>
                                2008 All rights reserved <br/>
                                P.D. Andrew Tate is a Bitch
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

let domContainer = document.querySelector('#main_container');
ReactDOM.render(<LifestyleAutos />, domContainer);