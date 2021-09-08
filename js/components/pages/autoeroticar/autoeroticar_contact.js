'use strict';

class AutoEroticarContact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container pt-5">
                <img className="img-fluid ae-border-red" 
                    src="./../img/autoeroticar/autoeroticar_outside.png"/>
                
                <div className="row my-3">
                    <h3 className="text-red-light">CONTACT US</h3>
                    <p>
                        At AutoEroticar, it's our mission to make all our customers feel excited and satisfied -
                        we want to give you the shittiest ride of your life. If you have any questions or comments
                        for our team, please contact: 
                        <a className="autoeroticar-link" href="#">
                            customerservicing@autoeroticar.com
                        </a>
                    </p>
                </div>

                <div className="row">
                    <h3 className="text-red-light">YOU CAN FIND US:</h3>
                    <p>
                        On the corner of Keneckie Ave and Lockowski Ave, <br/>
                        Alderney City, <br/>
                        Liberty City
                    </p>
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