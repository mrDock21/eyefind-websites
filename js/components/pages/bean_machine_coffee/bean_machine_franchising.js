'use strict';

class BeanMachineCoffeeFranchising extends React.Component {
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
                        <h3 className="bmc-text-white bmc-font">234 LOCATIONS OPENING EVERY DAY!</h3>
                    </div>
                    <div className="px-5 text-bold">
                        <p>
                            Nothing can stop the Bean Machine. We have a product people
                            drink at night, during the day... coffee isn't just for morning
                            anymore. We have built our global empire around one simple
                            premise: annihilate the competition. As a Bean Machine
                            Franchisee, you will quickly learn the secrets of sabotaging
                            mom and pop coffee shops, how to plant explosives, and the
                            fine art of puffing out your chest, grabbing your nuts and
                            threatening people.
                        </p>
                        <p>
                            Welcome to capitalism the Bean Machine way - with market
                            cannibalization and cluster-bombing campaigns that show you
                            how to flex the corporate muscle and drive family businesses
                            into the ground.   
                        </p>
                        <p>
                            As soon as your life savings hit our bank account, we will ship
                            out the Bean Machine Starter Identi-KIT to your chosen
                            location:
                        </p>
                        <ul>
                            <li><p>3 distressed leather sofas</p></li>
                            <li><p>10 velvet-effect armchairs</p></li>
                            <li><p>1 Reggae CD</p></li>
                            <li><p>1 bookcase full of dog-eared paperbacks</p></li>
                            <li><p>1 rack of travel mugs with exotic prints</p></li>
                            <li><p>4 pieces of terrible abstract art</p></li>
                            <li><p>6 tins of paint in assorted earthy colors</p></li>
                            <li><p>5 over-privileged students</p></li>
                            <li><p>7 yuppies on cell phones</p></li>
                            <li><p>12 failed dot-com entrepreneurs</p></li>
                            <li><p>8 soccer moms</p></li>
                        </ul>
                        <p>
                            Monopolize your local market in a matter of weeks!
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