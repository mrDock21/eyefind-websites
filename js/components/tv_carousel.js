'use strict';

class TvCarousel extends React.Component {
  constructor(props) {
        super(props);

        var page0 = [
            // page 1
            "./img/ad_tv/tv_1.png",
            "./img/ad_tv/_2.png",
            "./img/ad_tv/_3.png",
        ];
        var page1 = [
            // page 2
            "./img/ad_tv/_4.jpg",
            "./img/ad_tv/_5.png",
            "./img/ad_tv/_6.jpg",
        ];
        var page2 = [
            // page 3
            "./img/ad_tv/_7.png",
            "./img/ad_tv/_8.png",
            "./img/ad_tv/_9.png",
        ];
        var page3 = [
            // page 4
            // page 1
            "./img/ad_tv/_10.jpg",
            "./img/ad_tv/_11.jpg",
            "./img/ad_tv/_12.png"
        ];

        this.state = {
            pages: [ page0, page1, page2, page3 ],
            currentImg: 0,
            selectedPage: 0,
            nextSelectedPage: 0,
            animating: false
        };
    }

    render() {
        var currPage = this.state.pages[this.state.selectedPage];
        var nextPage = this.state.pages[this.state.nextSelectedPage];
        
        // circular buttons
        var carouselBtns = Array(0, 1, 2, 3).map((index) => 
            <div key={index} 
                className={`carousel-btn ${ this.getSelectedBtnState(index) }`}
                onClick={() => this.changeCarousel(index) }>
                &nbsp;
            </div>
        );

        return (
            <div className="d-flex flex-column w-100 h-100">
                <div id="carousel-imgs" className="d-flex w-100 flex-row p-2 justify-content-evenly">
                    <div className="carousel-img">
                        <img className="w-100 h-100" 
                            src={ currPage[0] }/>
                        <img className={`w-100 h-100 ${ this.getAnimState() }`} 
                             onAnimationEnd={ () => this.onAnimationDone() }
                             src={ nextPage[0] }/>
                    </div>
                    <div className="carousel-img">
                        <img className="w-100 h-100" 
                            src={ currPage[1] }/>
                        <img className={`w-100 h-100 ${ this.getAnimState() }`}
                             src={ nextPage[1] }/>
                    </div>
                    <div className="carousel-img">
                        <img className="w-100 h-100" 
                            src={ currPage[2] }/>
                        <img className={`w-100 h-100 ${ this.getAnimState() }`}
                             src={ nextPage[2] }/>
                    </div>
                </div>
                <div id="carousel-btns" 
                    className="d-flex flex-row justify-content-center align-items-center mt-2 p-2">
                    { carouselBtns }
                </div>
            </div>
        );
    }

    getAnimState() {
        return ((this.state.animating) ? "carousel-visible-ad" : "invisible-ad");
    }
    getSelectedBtnState(page) {
        var btnState = "";
        if (this.state.nextSelectedPage === page)
            btnState = "carousel-btn-active";
        return btnState;
    }
    changeCarousel(pageIndex) {
        if (pageIndex === this.state.selectedPage || this.state.animating)
            // ignore page change
            return;

        var state = {...this.state};

        state.nextSelectedPage = pageIndex;
        state.animating = true;
        // update
        this.setState(state);
    }
    onAnimationDone() {
        var state = {...this.state};

        state.selectedPage = state.nextSelectedPage;
        state.animating = false;

        console.log("[DEBUG]    Anim done!");
        // update
        this.setState(state);
    }
}

let domContainer = document.querySelector('#tv_carousel_container');
ReactDOM.render(<TvCarousel />, domContainer);