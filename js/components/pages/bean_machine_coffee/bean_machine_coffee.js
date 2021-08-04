'use strict';

class BeanMachineCoffee extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            currPage: 0,
        };
    }

    getAsset(rootPath) {
        return "./../../../../" + rootPath;
    }

    render() {
        return (
            <div className="page">
                
                {/** GRAY HEADER */}
                <SearchHeader ownerUrl={'www.bean-machine-coffee.net'}/>
                
                {/** Page slogan (here to set absolute pos) */}
                <div className="p-relative">
                    <div className="px-5 py-2 bmc-bg-white w-100" id="bmc-slogan-label">
                        <h3 className="bmc-text-dark bmc-font bmc-text-right">
                            TASTES LIKE FUEL, KICKS LIKE A MUEL
                        </h3>
                    </div>
                </div>

                <div className="container">
                    {/** Navigation Header */}
                    <div className="row px-5">
                        <div className="col-md-4 d-flex flex-column">
                            <div className="z-index-1">
                                <img className="w-100 h-100" src={this.getAsset("img/bean-machine-coffee/bmc_logo.png")}/>
                            </div>
                            <div><button className="bmc-header-btn text-brown">Specials</button></div>
                            <div><button className="bmc-header-btn text-brown">Cup Sizes</button></div>
                            <div><button className="bmc-header-btn text-brown">Franchising Opportunities</button></div>
                            <div><button className="bmc-header-btn text-brown">Buy Our Coffees</button></div>
                            <div><button className="bmc-header-btn text-brown">Caffeine Is Not a Drug</button></div>
                            <div><button className="bmc-header-btn text-brown">Become a Rep</button></div>
                            <div><button className="bmc-header-btn text-brown">10 Reasons To Boycott Your Local Coffeehouse</button></div>
                        </div>
                        <div className="col-md-8">
                            <img className="w-100 h-100" 
                                 src={this.getAsset("img/bean-machine-coffee/bmc_public-store.PNG")}/>
                        </div>
                    </div>

                    {/** About section */}
                    <div className="row">
                        <div className="container px-5 py-2 bmc-bg-dark">
                            <h3 className="bmc-text-white bmc-font">ABOUT BEAN MACHINE</h3>
                        </div>
                        <div className="container px-5 text-bold">
                            <p>
                                Do you feel restless, irritable and paranoid? Has your morning been dominated by panic
                                attacks, mood swings, outbursts at strangers and psychotic behavior? Must be time for
                                another coffee! Coffee is an ancient extract that the Mayans used to stay focused when
                                sacrificing virgins. Or so we tell ourselves. We actually don't know. Unlike the Mayans,
                                you are never more than 500 yards away from a Bean Machine coffee shop and we are
                                always on hand to pump up your heart rate and send you on your way with a smile on
                                your face and a burning need to piss every ten minutes. It's the end point of civilization. 
                            </p>
                            <p>
                                The perma-grin of a glassy-eyed barista after eight espressos, the noise of
                                teeth-grinding and leg-tapping mingled with putrid soft jazz, the grainy photos of smiling
                                plantation workers, the warm feeling when a disgruntled teenager calls you by the name
                                scrawled on the side of a plastic cup... Our coffee shops are so much more than just
                                great places to take a crap and surf online auctions: they are a lifestyle choice for the
                                status-conscious consumer the kind of go-getter who really cares about his beverage
                                choice, because the rest of life is completely pointless. Carry your paper cup like a
                                badge of honor on the subway. Show your co-workers you mean business by ingesting
                                20 ounces of caffeine. Nothing screams "upwardly-mobile sophisticate" like a logoed
                                polystyrene yuppie bucket of muddy brown water.    
                            </p>
                            <p>
                                We depend on you; you depend on caffeine. Customer satisfaction is a top priority at
                                Bean Machine Coffee and we are dedicated to providing efficient and courteous service
                                at all times, except if there is a line, or when there isn't. Just don't ask us to wash out
                                your personal mug or we will turn on you in a heartbeat. We know from watching you
                                clawing at the window and twitching nervously at the counter every morning that your
                                coffee is important and we pledge to serve every drink within three minutes or sack one
                                of our minimum wage employees on the spot. Or both.
                            </p>
                        </div>
                    </div>
                
                    {/** Ad */}
                    <div className="row container d-flex justify-content-center my-5">
                        <div className="bmc-bg-dark bmc-text-white w-75" style={{ height: "8rem" }}>
                            <p>Ad HERE</p>
                        </div>
                    </div>

                    {/** Job Section */}
                    <div className="row bmc-bg-white">
                        <div className="col-md-4 p-0">
                            <div>
                                <div className="bmc-bg-pink p-2 bmc-border-top-dark">
                                    <h3 className="bmc-text-dark bmc-font">GET A DAY PASS</h3>
                                </div>
                                <div className="p-3">
                                    <p className="text-bold">
                                        Pick up a Bean Machine
                                        Day Pass at a store
                                        near you. Buy 9
                                        coffees over the
                                        course of a day and we
                                        will give you the 10th
                                        for free!
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="bmc-bg-pink p-2 bmc-border-top-dark">
                                    <h3 className="bmc-text-dark bmc-font">NEWS FLASH!</h3>
                                </div>
                                <div className="p-3">
                                    <ul>
                                        <li>
                                            <p className="text-bold">
                                                Bean Machine opens
                                                coffee houses at
                                                Machu Picchu and the
                                                Taj Mahal! Next stop,
                                                Everest.
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-bold">
                                                John Cena signs contract to become the new
                                                CEO of bean machine coffee!
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 p-0">
                            <div className="bmc-bg-dark p-2 bmc-border-top-pink">
                                <h3 className="bmc-text-white bmc-font">
                                    WORK FOR BEAN MACHINE COFFEE
                                </h3>
                            </div>
                            <div>
                                <img className="w-100" src={this.getAsset("img/bean-machine-coffee/bmc_work-for-us.png")}/>
                            </div>
                            <div className="px-4 mt-2">
                                <p className="text-bold">
                                    No experience required. Bean Machine is always looking for
                                    unskilled, part-time workers, primarily because all our staff
                                    turns over every three weeks. We prefer to use the term
                                    'friends' rather than 'employees' and 'protectors' rather than
                                    'managers'. We find that this helps to foster the illusion of a
                                    warm, fuzzy working environment and masks the exploitation
                                    at the core of our business model. We are not going to insult
                                    you with training. This is coffee, not rocket science. Don't
                                    worry: you'll soon learn the art of looking down your nose when
                                    someone orders a regular coffee.
                                    Join the biggest company in the world! We will hire anyone, so
                                    long as they look young. If you listen to emo music and have
                                    great tits, that's a plus, but a tattoo or facial piercing is preferred
                                    to give us that "edge."
                                </p>
                            </div>
                        </div>
                    </div>

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