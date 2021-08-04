'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CARS_ON_SALE = [{
    img: './../../../../img/autoeroticar/autoeroticar_car_adv_5.png',
    title: "2001 Turismo 4.0l Quad Cam V8",
    desc: "Two-door, five-speed manual, petrol engine, 26,000 miles, Rosso red, adjustable seats, alloy wheels, CD player, central locking, electric windows, cream leather, rear spoiler and ABS."
}, {
    img: './../../../../img/autoeroticar/autoeroticar_car_adv_7.png',
    title: "2003 Feltzer 3.8 supercharged V8",
    desc: "Air conditioning, alarm system, coloured bumpers, airbag on driver's side, electric exterior mirrors, one previous owner, CD/cassette player, new condition. Information/viewings only possible between 8.00 and 21.00 hrs."
}, {
    img: './../../../../img/autoeroticar/autoeroticar_car_adv_1.png',
    title: "2001 Banshee 300ci V8 Twin Turbo GT",
    desc: "Adjustable seats, air conditioning, alloy wheels, CD player, central locking, electric mirrors, electric windows, full service history, leather upholstery, immobiliser"
}, {
    img: './../../../../img/autoeroticar/autoeroticar_car_adv_2.png',
    title: "2006 PMP 600 6100cc V8 Semi",
    desc: "Automatic, diesel, 8,000 miles, silver metallic. Leather seats, ABS, air conditioning, alloy wheels, CD changer, cruise control, heated seats, multifunction steering wheel, navigation system, electronic parking aid."
}, {
    img: './../../../../img/autoeroticar/autoeroticar_car_adv_3.png',
    title: "2001 Schafter 6.5l V12 SC",
    desc: "Automatic, 37,000 miles, silver metallic. Air conditioning, ABS, alloy wheels, cruise control, full service history, leather seats."
}, {
    img: './../../../../img/autoeroticar/autoeroticar_car_adv_4.png',
    title: "2003 Intruder 4.3l V8 Limited",
    desc: "Nice black metallic paint, alloy wheels, additional front headlights, all electrically controlled, CD player, central locking, all in exceptionally good condition."
}, {
    img: './../../../../img/autoeroticar/autoeroticar_car_adv_6.png',
    title: "2004 Presidente 4.5l V10",
    desc: "Four-door, manual transmission, 26,000 miles, metallic turquoise, twelve-month parts and service warranty, insurance. Financing available at zero per cent PAYMENT. Ask Derek for a bespoke finance proposal. Approved finance provider. Detailed brochure available"
}];

var AutoEroticarCheckCars = function (_React$Component) {
    _inherits(AutoEroticarCheckCars, _React$Component);

    function AutoEroticarCheckCars(props) {
        _classCallCheck(this, AutoEroticarCheckCars);

        var _this = _possibleConstructorReturn(this, (AutoEroticarCheckCars.__proto__ || Object.getPrototypeOf(AutoEroticarCheckCars)).call(this, props));

        _this.state = {
            searchPageUrl: 'www.autoeroticar.net',
            showControls: false
        };
        return _this;
    }

    _createClass(AutoEroticarCheckCars, [{
        key: 'getAdvertisements',
        value: function getAdvertisements() {
            var ui = CARS_ON_SALE.map(function (val, index) {
                return React.createElement(
                    'div',
                    { className: 'row px-5 my-5 car-adv', key: index },
                    React.createElement(
                        'div',
                        { className: 'col-md-6' },
                        React.createElement(
                            'div',
                            { className: 'w-100 h-100 ae-bg-gray p-2' },
                            React.createElement('img', { className: 'w-100 h-100',
                                src: val.img })
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-md-6 d-flex flex-column justify-content-between' },
                        React.createElement(
                            'div',
                            null,
                            React.createElement(
                                'h1',
                                { className: 'text-red-light' },
                                val.title
                            )
                        ),
                        React.createElement(
                            'div',
                            null,
                            React.createElement(
                                'p',
                                null,
                                val.desc
                            )
                        ),
                        React.createElement(
                            'div',
                            null,
                            React.createElement(
                                'button',
                                { className: 'btn red-btn w-100' },
                                'Buy this crap!'
                            )
                        )
                    )
                );
            });
            return ui;
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'container my-5', id: 'check-cars-page' },
                this.getAdvertisements()
            );
        }
    }]);

    return AutoEroticarCheckCars;
}(React.Component);