'use strict';

class BeanMachineCoffeeCupSizes extends React.Component {
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
                        <h3 className="bmc-text-white bmc-font">THERE'S A SIZE JUST RIGHT FOR YOU</h3>
                    </div>
                    <div className="px-5 text-bold">
                        <p>
                            Bean Machine's drinks are served in the following cup sizes:
                        </p>
                        <p>Medio: 24 oz.</p>
                        <p>Enorme: 32 oz.</p>
                        <p>Colossale: 80 oz.</p>
                        <p>
                            Look, here is the reality: our patience is hanging by a very thin
                            thread. We provide you with a faux-bohemian environment in
                            which to escape the emptiness of your miserable lives and we
                            tolerate you nursing a ghetto latte all day, taking up seats
                            while fleecing the free WiFi. All we request in return is that
                            you order your drinks using the Italian-Columbian terminology
                            above. Is that too much to ask?
                        </p>
                        <p>
                            We created this ridiculous lingo to give you morons the illusion
                            of a cosmopolitan lifestyle but you insist on throwing it back in
                            our face. We don't care if you think that it makes no sense. If
                            you're too stupid to grasp the fact that 'Medio' means 'Small',
                            then drink your coffee at Burger Shot. Please note that any
                            attempts to order 'small, 'medium' or 'large' will be met with a
                            derisory snicker and a booger floater. You've been warned.
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