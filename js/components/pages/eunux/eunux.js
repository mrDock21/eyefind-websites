'use strict';

class Eunux extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            currPage: -1,
        };
    }

    getPage() {
        var changePage = (x) => this.onChangePage(x);
        var currPage = this.state.currPage;

        switch (currPage) {
            case 0: return <EunuxAboutUs selectedTab={currPage} onPageSelected={changePage}/>;
            case 1:
            case 2:
            case 3:
            default:
                return <EunuxLandingPage onPageSelected={changePage}/> ;
        }
    }

    onChangePage(index) {
        const state = {...this.state};

        state.currPage = index;
        console.log("[DEBUG SELECTS PAGE %d]", index);
        this.setState(state);
    }

    render() {
        return (
            <div className="page">
                {/** GRAY HEADER */}
                <SearchHeader ownerUrl={'www.eunux.net'}/>
                
                { this.getPage() }
            </div>
        );
    }
}

let domContainer = document.querySelector('#main_container');
ReactDOM.render(<Eunux />, domContainer);
