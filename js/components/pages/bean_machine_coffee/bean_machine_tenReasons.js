'use strict';

class BeanMachineCoffeeTenReasons extends React.Component {
    constructor(props) {
        super(props);
    }
    
    getAsset(rootPath) {
        return "./../" + rootPath;
    }

    render() {
        return (
            <div>
                <div className="row bmc-bg-white w-100 mx-0">
                    <div className="container px-5 py-2 bmc-bg-dark bmc-border-top-pink">
                        <h3 className="bmc-text-white bmc-font">STAND UP FOR WHAT YOU BELJIVE IN</h3>
                    </div>
                    <div className="px-5 text-bold">
                        <p>
                            A few independently-owned coffee houses have proven to be
                            surprisingly stubborn in the face of bribes and intimidation and
                            threaten to undermine the American dream of a homogeneous
                            society. Remember the dark old days of the 1990's when
                            coffeehouses were the beating heart of the community, an
                            expression of unique local identity? Sheer anarchy! Don't let
                            these dens of iniquity make a mockery of our plans for world
                            domination. Here are ten reasons to boycott your local
                            coffeehouses:
                        </p>
                        <ul>
                            <li><p>1) They do not look the same.</p></li>
                            <li><p>2) They do not have a condiment bar.</p></li>
                            <li><p>3) They hate your religion and they think your girlfriend is a dog</p></li>
                            <li><p>4) They show live sports - so uncouth.</p></li>
                            <li><p>5) They are frequented by blue collar workers who fornicate like animals in pens and smell.</p></li>
                            <li><p>6) They encourage social interaction - the last thing that you want when you're anxious and paranoid.</p></li>
                            <li><p>7) They do not provide corrugated insulating sleeves in a dirty-brown, eco-friendly color.</p></li>
                            <li><p>8) They offer free re-fills, insulting your status as an upscale urban consumer. Think how great you feel paying $4 for 4 cents worth of bean juice?</p></li>
                            <li><p>10) They do not use foreign names for their collees.</p></li>
                        </ul>
                    </div>
                    {/** Ad */}
                    <div className="row d-flex justify-content-center my-5">
                        <div className="bmc-bg-dark bmc-text-white w-75" style={{ height: "8rem" }}>
                            <p>Ad HERE</p>
                        </div>
                    </div>
                </div>
            
            </div>
        );
    }
}