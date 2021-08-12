'use strict';

class BeanMachineCoffeeSpecials extends React.Component {
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
                        <h3 className="bmc-text-white bmc-font">NOT FOR THE FAINT-HEARTED</h3>
                    </div>
                    <div className="px-5 text-bold">
                        <p>
                            Bean Machine is proud to announce some heart-thumping additions to our world-famous mono-menu:
                        </p>
                        <h1>The Bratte</h1>
                        <p>
                            New to the Kids Board, the Bratte (a double-shot latte with ten
                            pumps of caramel) packs a punch that will send even the most
                            lethargic child running off to school. By the time that they
                            crash, you will be miles away on your third gin and tonic.    
                        </p>
                        <h1>The Gunkaccino</h1>
                        <p>
                            Start your day with dessert) Imagine the calorific equivalent of
                            5 cheeseburgers in a plastic cupl Bean Machine's new
                            Gunkaccino contains the four major food groups - caffeine,
                            refined sugar, trans fat and high-fructose corn syrup - and is
                            available in a range of healthy flavors such as tiramisu,
                            cheesecake, brownie, fudge and sticky toffee pudding. Do you
                            like a buzz but hate the bitter taste of coffee? Try a Triple
                            Extra-Hot Upside-Down Double-Blended Whipped Cream
                            Tiramisu Colossale with wings today! Only 2000 calories!
                            Perfect with one of our low-fat pastries or when on your
                            period.
                        </p>
                        <h1>The Speedball</h1>
                        <p>
                            Guaranteed to have you rocking in a darkened room by 10 aml A
                            triple shot of weapons-grade coffee, guarana, bat guano and
                            mate that will hit your central nervous system like a steam
                            train. You'll be sweating like a lonely gym teacher on the first
                            day of school. Knock a couple of these back and you'll feel like
                            you've been wired up to the national power grid.
                        </p>
                        <h1>High Noon</h1>
                        <p>
                            It's 11am, your blood-sugar levels have crashed and you've lost
                            the will to live. You've spent the last 20 minutes staring at the
                            wall and your ears are ringing like you just stumbled out of a
                            punk rock club. One visit to Bean Machine and we will have
                            you back on track, for a couple of hours at least. The 'High
                            Noon' special combines a pint of drip coffee, half a pint of
                            carbonated water, a taurine depth charge and a choice of 134
                            different fruit syrups. You'll feel like you've crossed a
                            time-zone by mid afternoon! Not responsible for anal leakage.
                        </p>
                    </div>
                </div>
            
                {/** Ad */}
                <div className="row d-flex justify-content-center my-5">
                    <div className="bmc-bg-dark bmc-text-white w-75" style={{ height: "8rem" }}>
                        <p>Ad HERE</p>
                    </div>
                </div>
            </div>
        );
    }
}