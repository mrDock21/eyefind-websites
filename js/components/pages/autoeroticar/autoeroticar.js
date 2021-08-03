'use strict';

class AutoEroticar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchPageUrl: 'www.autoeroticar.net',
            showControls: false
        };
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
                            <button className="btn first active">Home</button>
                            <button className="btn">Check cars</button>
                            <button className="btn">About</button>
                            <button className="btn">Contact</button>
                        </div>
                    </div>
                </div>

                {/** Main content */}
                <AutoEroticarHome/>
                
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