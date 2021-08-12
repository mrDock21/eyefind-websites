'use strict';

class BeanMachineCoffeeBuyOurCoffees extends React.Component {
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
                        <h3 className="bmc-text-white bmc-font">FRESH BEANS FOR YOUR HOME</h3>
                    </div>
                    <div className="px-5 text-bold">
                        <p>
                            We understand that tolerance to caffeine develops quickly and
                            we spend millions of dollars each year on developing
                            genetically-modified coffee blends guaranteed to make even
                            the most depraved caffeine fiend sneeze with his eyes open.
                            Bean Machine buys only the richest coffee beans from the
                            poorest nations in the world. Poor people make great
                            stimulants.
                        </p>
                        <p>
                            All our stores offer a wide range of fresh coffee by the bag.
                            Only $20 per pound. We are firmly committed to fair trade and
                            for every pound of coffee purchased, we ensure that no less
                            than 7 cents is returned to the local farmer.
                            Buy 4 pounds of coffee today and we will throw in a free
                            coffee enema and a Colossale Gunkuccino T-Shirt (sizes start
                            in XL)   
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