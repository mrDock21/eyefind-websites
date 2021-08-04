'use strict';

const CARS_ON_SALE = [
    {
        img: './../img/autoeroticar/autoeroticar_car_adv_5.png',
        title: "2001 Turismo 4.0l Quad Cam V8",
        desc: "Two-door, five-speed manual, petrol engine, 26,000 miles, Rosso red, adjustable seats, alloy wheels, CD player, central locking, electric windows, cream leather, rear spoiler and ABS.",
    },
    {
        img: './../img/autoeroticar/autoeroticar_car_adv_7.png',
        title: "2003 Feltzer 3.8 supercharged V8",
        desc: "Air conditioning, alarm system, coloured bumpers, airbag on driver's side, electric exterior mirrors, one previous owner, CD/cassette player, new condition. Information/viewings only possible between 8.00 and 21.00 hrs.",
    },
    {
        img: './../img/autoeroticar/autoeroticar_car_adv_1.png',
        title: "2001 Banshee 300ci V8 Twin Turbo GT",
        desc: "Adjustable seats, air conditioning, alloy wheels, CD player, central locking, electric mirrors, electric windows, full service history, leather upholstery, immobiliser",
    },
    {
        img: './../img/autoeroticar/autoeroticar_car_adv_2.png',
        title: "2006 PMP 600 6100cc V8 Semi",
        desc: "Automatic, diesel, 8,000 miles, silver metallic. Leather seats, ABS, air conditioning, alloy wheels, CD changer, cruise control, heated seats, multifunction steering wheel, navigation system, electronic parking aid.",
    },
    {
        img: './../img/autoeroticar/autoeroticar_car_adv_3.png',
        title: "2001 Schafter 6.5l V12 SC",
        desc: "Automatic, 37,000 miles, silver metallic. Air conditioning, ABS, alloy wheels, cruise control, full service history, leather seats.",
    },
    {
        img: './../img/autoeroticar/autoeroticar_car_adv_4.png',
        title: "2003 Intruder 4.3l V8 Limited",
        desc: "Nice black metallic paint, alloy wheels, additional front headlights, all electrically controlled, CD player, central locking, all in exceptionally good condition.",
    },
    {
        img: './../img/autoeroticar/autoeroticar_car_adv_6.png',
        title: "2004 Presidente 4.5l V10",
        desc: "Four-door, manual transmission, 26,000 miles, metallic turquoise, twelve-month parts and service warranty, insurance. Financing available at zero per cent PAYMENT. Ask Derek for a bespoke finance proposal. Approved finance provider. Detailed brochure available",
    },
];

class AutoEroticarCheckCars extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchPageUrl: 'www.autoeroticar.net',
            showControls: false
        };
    }

    getAdvertisements() {
        const ui = CARS_ON_SALE.map((val, index) =>
            <div className="row px-5 my-5 car-adv" key={index}>
                <div className="col-md-6">
                    <div className="w-100 h-100 ae-bg-gray p-2">
                        <img className="w-100 h-100" 
                            src={ val.img }/> 
                    </div> 
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-between">  
                    <div>
                        <h1 className="text-red-light">{ val.title }</h1>
                    </div>
                    <div>
                        <p>{ val.desc }</p>
                    </div>
                    <div>
                        <button className="btn red-btn w-100">
                            Buy this crap!
                        </button>
                    </div>
                </div>
            </div>
        );
        return ui;
    }

    render() {
        return (
            <div className="container my-5" id="check-cars-page">
                {/** Main content */}
                { this.getAdvertisements() }
            </div>
        );
    }
}