'use strict';

class AutoEroticar extends React.Component {
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
            case 1: return <AutoEroticarCheckCars/>;
            case 2: return <AutoEroticarHome/>;
            case 3: return <AutoEroticarHome/>;
        }
    }

    getHeaderBtn(index, text) {
        var btnState = (this.state.currPage === index) ? "active" : "";
        var isFirst = (index === 0) ? "first" : "";
        return (
            <button className={`btn ${isFirst} ${btnState}`}
                    onClick={() => this.onChangePage(index)}>
                {text}
            </button>
        );
    }

    render() {
        return (
            <div className="page">
                
                {/** GRAY HEADER */}
                <SearchHeader ownerUrl={'www.autoeroticar.net'}/>
                
                {/** Logo header */}
                <div className="container" id="logo-header">
                    <div className="row mb-2">
                        <div className="col-4">
                            <a>
                                <SVGFile svgId={"svg-name-logo"}
                                    svgPath={'./../img/autoeroticar/autoeroticar-name-logo.svg'}
                                />
                            </a>
                        </div>
                        <div className="col-8 d-flex justify-content-end">
                            <SVGFile svgId={"svg-car-logo"}
                                svgPath={'./../img/autoeroticar/autoeroticar-car-logo.svg'}
                            />
                        </div>
                    </div>

                    {/** Nav */}
                    <div className="row" id="page-btns-header">
                        <div className="col d-flex flex-row justify-content-center">
                            { this.getHeaderBtn(0, "Home")          }
                            { this.getHeaderBtn(1, "Check cars")    }
                            { this.getHeaderBtn(2, "About")         }
                            { this.getHeaderBtn(3, "Contact")       }
                        </div>
                    </div>
                </div>

                {/** Main content */}
                { this.getPage() }
                
                {/** Trademarks display */}
                <div className="container mb-5" id="trademarks-display">
                    <hr/>

                    {/** Forgive me, Cuellar */}
                    <div className="row">
                        <div className="col-md-6 d-flex flex-row col-left">
                            <SVGFile svgId={"svg-file-1"} 
                                     classes={"trademark-logo"}
                                     svgPath={'./../img/autoeroticar/autoeroticar_logo_1.svg'}
                            />
                            <SVGFile svgId={"svg-file-2"} 
                                     classes={"trademark-logo"}
                                     svgPath={'./../img/autoeroticar/autoeroticar_logo_2.svg'}
                            />
                            <SVGFile svgId={"svg-file-3"} 
                                     classes={"trademark-logo"}
                                     svgPath={'./../img/autoeroticar/autoeroticar_logo_3.svg'}
                            />
                            <SVGFile svgId={"svg-file-4"} 
                                     classes={"trademark-logo"}
                                     svgPath={'./../img/autoeroticar/autoeroticar_logo_4.svg'}
                            />
                        </div>
                        <div className="col-md-6 d-flex flex-row col-right">
                            <SVGFile svgId={"svg-file-5"} 
                                     classes={"trademark-logo"}
                                     svgPath={'./../img/autoeroticar/autoeroticar_logo_5.svg'}
                            />
                            <SVGFile svgId={"svg-file-6"} 
                                     classes={"trademark-logo"}
                                     svgPath={'./../img/autoeroticar/autoeroticar_logo_6.svg'}
                            />
                            <SVGFile svgId={"svg-file-7"} 
                                     classes={"trademark-logo"}
                                     svgPath={'./../img/autoeroticar/autoeroticar_logo_7.svg'}
                            />
                            <SVGFile svgId={"svg-file-8"} 
                                     classes={"trademark-logo"}
                                     svgPath={'./../img/autoeroticar/autoeroticar_logo_8.svg'}
                            />
                        </div>
                    </div>

                    <hr/>
                </div>

                {/* Footer  */}
                <div className="container row">
                    <div className="col-4"></div>
                    <div className="col-8 d-flex flex-row">
                        <p>
                            <a className="autoeroticar-link"
                               href="https://skfb.ly/o6JVZ">
                                Ferrari 458 Italia
                            </a>
                            &#160;by DatJones is licensed under&#160;
                            <a className="autoeroticar-link" 
                                href="http://creativecommons.org/licenses/by/4.0/">
                                Creative Commons Attribution
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

let domContainer = document.querySelector('#main_container');
ReactDOM.render(<AutoEroticar />, domContainer);