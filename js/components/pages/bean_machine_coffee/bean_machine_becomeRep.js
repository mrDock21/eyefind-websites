'use strict';

class BeanMachineCoffeeBecomeRep extends React.Component {
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
                        <h3 className="bmc-text-white bmc-font">COFFEE ISN'T JUST FOR GROWNUPS</h3>
                    </div>
                    <div className="px-5 text-bold">
                        <p>
                            Hi Kids! Looking to make some extra pocket money on the
                            side? The teen market has huge growth potential for Bean
                            Machine and we are recruiting budding entrepreneurs to sell
                            our products across the school yards of America. Become a
                            Bean Machine dealer.
                        </p>
                        <p>
                            Guys, find out what girls will do for a latte! It's a lot! It's well
                            known that dealers get a lot of attention from the opposite
                            sex. Listen to your parents and take your vitamin C Caffeine!
                            ADD is a small price to pay for something that sends you into
                            math class wound up like a coiled spring.
                        </p>
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