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
            case 0: return <AutoEroticarHome/>;
        }
    }

    getHeaderBtn(index, text) {
        var btnState = (this.state.currPage === index) ? "active" : "";
        return (
            <button className={`btn bela-header-btn ml-3 ${btnState}`}
                    onClick={() => this.onChangePage(index)}>
                <p className="h5">{text}</p>
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
                        <img id="bela-logo" src="./../img/brucies_ela/logo.png"/>
                        <img src="./../img/brucies_ela/heading-brucie.png"/>
                    </div>

                    <div className="row">
                        <div className="col-md-9 px-5">
                            { header_btns_ui }
                        </div>
                        <div className="col-md-3">
                            <img className="w-100" src="https://wpquads.com/wp-content/uploads/2016/10/Skyscraper-160x600.png"/>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

let domContainer = document.querySelector('#main_container');
ReactDOM.render(<LifestyleAutos />, domContainer);