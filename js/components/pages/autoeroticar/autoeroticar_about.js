'use strict';

class AutoEroticarAbout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container pt-5">
                <img className="img-fluid ae-border-red" 
                    src="./../img/autoeroticar/autoeroticar_outside.png"/>
                
                <div className="row my-3">
                    <h3 className="text-red-light">ABOUT US</h3>
                    <p>
                        AutoEroticar was set up in 2007 to cater to a very special market: people who are smart
                        enough to realize the important connection between sexual drive and the car you drive.
                    </p>
                </div>

                <div className="row">
                    <h3 className="text-red-light">IF YOU ARE AN AUTOEROTICAR CUSTOMER:</h3>
                    <p>You shave with the Excelsior Extreme 9 razor.</p>
                    <p>You consume only the most heart-palpitating energy drinks.</p>
                    <p>You don't trust anything that wasn't created today for the world of tomorrow because you're always in the driving seat.</p>
                    <p>Everything you do says 'sleep with me' and you know your car should be no different.</p>
                    <p>We know that when your hands on that stick, anything could happen - let's make it happen together.</p>
                </div>

                <div className="row container d-flex justify-content-center my-5 w-100 mx-0">
                    <div className="w-75" style={{ background:"gray", height: "8rem" }}>
                        <p>Ad HERE</p>
                    </div>
                </div>
            </div>
        );
    }
}