'use strict';

class TvCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        current: 0 
    };
  }

  render() {
    return (
        <div className="d-flex flex-column w-100 h-100">
            <div id="carousel-imgs" className="d-flex w-100 flex-row p-2 justify-content-between">
                <div className="carousel-img">
                    <img className="w-100 h-100" 
                        src="https://cruhidrogeno2021.com/upload/expositores/e32dd32e0c2550f969e84ca79eff4bf9.jpg"/>
                </div>
                <div className="carousel-img">
                    <img className="w-100 h-100" 
                        src="https://cruhidrogeno2021.com/upload/expositores/e32dd32e0c2550f969e84ca79eff4bf9.jpg"/>
                </div>
                <div className="carousel-img">
                    <img className="w-100 h-100" 
                        src="https://cruhidrogeno2021.com/upload/expositores/e32dd32e0c2550f969e84ca79eff4bf9.jpg"/>
                </div>
            </div>
            <div id="carousel-btns" 
                className="d-flex flex-row justify-content-center align-items-center mt-2 p-2">
                <div className="carousel-btn carousel-btn-active">
                    &nbsp;
                </div>
                <div className="carousel-btn">
                    &nbsp;
                </div>
                <div className="carousel-btn">
                    &nbsp;
                </div>
                <div className="carousel-btn">
                    &nbsp;
                </div>
            </div>
        </div>
    );
  }
}

let domContainer = document.querySelector('#tv_carousel_container');
ReactDOM.render(<TvCarousel />, domContainer);