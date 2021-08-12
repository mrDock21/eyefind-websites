'use strict';

class BeanMachineCoffeeCoffeeDrug extends React.Component {
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
                        <h3 className="bmc-text-white bmc-font">A HEALTHY DEPENDENCY FOR YOUR MIND AND BODY</h3>
                    </div>
                    <div className="px-5 text-bold">
                        <p>
                            How can something that suppresses hunger, increases levels
                            of dopamine, causes rapid flow of thought and produces
                            rambling, incoherent speech be considered a drug? How can
                            anything grown in Central America be addictive? This is just
                            evil propaganda from the health food industry, a desperate
                            marketing gimmick to sell more fruit smoothies and granola
                            bars and make you shit corn. Drugs are nasty, illegal things
                            that come in little plastic bags. Have you ever seen a guy lying
                            in the gutter injecting cappuccino into his eyeball or a coffee
                            whore blasting java beans through a glass pipe?
                        </p>
                        <p>
                            90% of adults in the USA consume caffeine on a daily basis for
                            a reason: you cannot function without it. Scientists have
                            proven that without coffee, the body just wants to lie around
                            yelling at the TV and inappropriately enjoying reruns of Just
                            the Five of Us.
                        </p>
                        <p>
                            Ever tried multi-tasking without coffee? It's impossible,
                            especially for men. Some people drink coffee, others shop for
                            shoes, others go barebacking: we all get our kicks in different
                            ways but that does not make them drugs. Isn't caffeine just a
                            natural bean extract? What's the big deal? If coffee had been
                            discovered today. It would no doubt be touted as a
                            ground-breaking herbal brain tonic by the same people who
                            are trying to brainwash you into swapping your
                            double-espresso for a carrot Juice.
                        </p>
                        <p>
                            Caffeine isn't a drug. It's a survival tool that cuts through
                            fatigue like a Samurai sword and stops you from crashing your
                            car after a night on the cocktails.
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