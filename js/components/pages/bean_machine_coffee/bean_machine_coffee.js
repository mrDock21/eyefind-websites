'use strict';

const BMC_PAGES = [
    {
        tittle: "Home", subtittle: "TASTES LIKE FUEL, KICKS LIKE A MUEL", img: "img/bean-machine-coffee/bmc_public-store.PNG"
    },
    {
        tittle: "Specials", subtittle: "SPECIAL COFFEE FOR SPECIAL PEOPLE", img: "img/bean-machine-coffee/bmc_public-store.PNG"
    },
    {
        tittle: "Cup Sizes", subtittle: "THE BIGGER, THE BETTER", img: "img/bean-machine-coffee/bmc_public-store.PNG"
    },
    {
        tittle: "Franchising Opportunities", subtittle: "SO PROFITABLE THAT YOU'LL THINK TI'S A PYRAMID SCHEME!", img: "img/bean-machine-coffee/bmc_public-store.PNG"
    },
    {
        tittle: "Buy Our Coffees", subtittle: "I DIDN'T WANT TO TELL YOU, BUT IF YOU DON'T BUY FROM US, YOU'LL DIE!", img: "img/bean-machine-coffee/bmc_public-store.PNG"
    },
    {
        tittle: "Caffeine Is Not a Drug", subtittle: "COFFEE IS POISONOUS TO THE REPTILIANS. IT'S A DRUG FOR THEM NOT FOR US! DON'T FALL FOR THEIR LIES!", img: "img/bean-machine-coffee/bmc_public-store.PNG"
    },
    {
        tittle: "10 Reasons To Boycott Your Local Coffeehouse", subtittle: "THEIR COFFEE IS, INDEED, A DRUG!", img: "img/bean-machine-coffee/bmc_public-store.PNG"
    },
];

class BeanMachineCoffee extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            currPage: 0,
            wndSize: window.innerWidth,
            showingBtns: false,
        };

        window.addEventListener('resize', () => this.setWndSize(window.innerWidth));
    }
    getAsset(rootPath) {
        return "./../" + rootPath;
    }
    onPageChange(index) {
        var state = {...this.state};
        state.currPage = index;
        this.setState(state);
    }
    setWndSize(width) {
        var state = {...this.state};
        state.wndSize = width;
        this.setState(state);
    }
    toggleHeaderBtns() {
        const state = {...this.state};
        state.showingBtns = !state.showingBtns;
        console.log("[DEBUG]    Toggle buttons");
        this.setState(state);
    }
    getBtnState(index) {
        return (index === this.state.currPage) ? "bmc-header-btn-active" : "";
    }
    getCurrentPage() {
        switch (this.state.currPage) {
            case 0: return <BeanMachineCoffeeHome/>;
            case 1: return <BeanMachineCoffeeSpecials/>;
            case 2: return <BeanMachineCoffeeCupSizes/>;
            case 3: return <BeanMachineCoffeeFranchising/>;
            case 4: return <BeanMachineCoffeeBuyOurCoffees/>;
            case 5: return <BeanMachineCoffeeCoffeeDrug/>;
            case 6: return <BeanMachineCoffeeBecomeRep/>;
            case 7: return <BeanMachineCoffeeTenReasons/>;
            default: return null;
        }
    }
    ifHomeReturn(value) {
        return (this.state.currPage === 0) ? value : null;
    }
    ifElseHomeReturn(value, elseVal) {
        return (this.state.currPage === 0) ? value : elseVal;
    }

    render() {
        var isMobile = this.state.wndSize < 768;
        var showingHamburgerBtns = this.state.showingBtns;
        var currPage = this.state.currPage;
        var page = this.getCurrentPage();
        var headerBtns = BMC_PAGES.map((val, index) =>
            <div key={index}>
                <button onClick={ () => this.onPageChange(index) }
                    className={`bmc-header-btn text-brown ${this.getBtnState(index)}`}>
                    {val.tittle}
                </button>
            </div>
        );
        var hamburgerBtns = null;
        var hamburgerIcon = null;
        if (isMobile) {
            hamburgerBtns = headerBtns;
            headerBtns = null;
            hamburgerIcon = (
                <div className={`bmc-hamburger ${((showingHamburgerBtns) ? "bmc-hamburger-selected":"")}`}>
                    <img onClick={ () => this.toggleHeaderBtns() } 
                        className="w-100" 
                        src={this.getAsset("img/hamburger-button-icon.png")}
                    />
                </div>
            );
        }

        return (
            <div className="page">
                
                {/** GRAY HEADER */}
                <SearchHeader ownerUrl={'www.bean-machine-coffee.net'}/>
                
                {/** Page slogan (here to set absolute pos) */}
                <div className="p-relative">
                    <div className="px-1 py-2 bmc-bg-white w-100 bmc-border-top-pink" 
                        id="bmc-slogan-label">
                        <div className="d-flex flex-row justify-content-between justify-content-md-end">
                            { hamburgerIcon }
                            <div className="w-50">
                                <h3 className="bmc-text-dark bmc-font bmc-text-right">
                                    { BMC_PAGES[currPage].subtittle }
                                </h3>
                            </div>
                        </div>
                        <div className={`bmc-hamburger-btns ${((showingHamburgerBtns) ? "bmc-hamburger-btns-show" : "")}` }>
                            { hamburgerBtns }
                        </div>
                    </div>
                </div>

                <div className="container px-0">
                    {/** Navigation Header */}
                    <div className={`row ${ this.ifHomeReturn("px-md-5") }`}>
                        <div className="col-4 d-flex flex-column">
                            <div className="z-index-1 p-relative">
                                <img id="bmc-logo-background" 
                                    className="w-100 h-100" 
                                    src={this.getAsset("img/bean-machine-coffee/bmc_logo-background.png")}/>
                                <img id="bmc-logo-foreground" 
                                    className="w-100 h-100" 
                                    src={this.getAsset("img/bean-machine-coffee/bmc_logo-foreground.png")}
                                />
                            </div>
                            { headerBtns }
                        </div>
                        <div className="col-8 px-0">
                            <img className={`w-100 ${ this.ifHomeReturn("h-100") }`} 
                                 src={this.getAsset( BMC_PAGES[currPage].img )}/>
                        
                            { /* Say thanks to the website design :D */}
                            { ((isMobile) ? null : this.ifElseHomeReturn(null, page)) }
                        </div>
                    </div>

                    { /* Say thanks to the website design :D */}
                    {  ((isMobile) ? page : this.ifElseHomeReturn(page, null)) }

                    <div className="row">
                        <div className="col-4 d-flex justify-content-center">
                            <img className="w-50" src={this.getAsset("img/bean-machine-coffee/bmc_logo.png")}/>   
                        </div>
                        <div className="col-8 bmc-text-white p-2">
                            <p>
                                Bean Machine Coffee
                            </p>
                            <p>
                                All rights reserved
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

let domContainer = document.querySelector('#main_container');
ReactDOM.render(<BeanMachineCoffee />, domContainer);