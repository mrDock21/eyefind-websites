'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AutoEroticar = function (_React$Component) {
    _inherits(AutoEroticar, _React$Component);

    function AutoEroticar(props) {
        _classCallCheck(this, AutoEroticar);

        var _this2 = _possibleConstructorReturn(this, (AutoEroticar.__proto__ || Object.getPrototypeOf(AutoEroticar)).call(this, props));

        _this2.state = {
            searchPageUrl: 'www.autoeroticar.net'
        };

        _this2.handleChange = _this2.handleChange.bind(_this2);
        _this2.handleSubmit = _this2.handleSubmit.bind(_this2);

        var _this = _this2;
        window.requestAnimationFrame(function () {
            _this.create3dScene();
        });
        return _this2;
    }

    /**
     * Updates URL text
     */


    _createClass(AutoEroticar, [{
        key: 'handleChange',
        value: function handleChange(event) {
            var state = Object.assign({}, this.state);
            state.searchPageUrl = event.target.value;
            this.setState(state);
        }

        /**
         * Redirects to "GTA-URL" requested
         */

    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            alert('Requested search: ' + this.state.value);
            event.preventDefault();
        }
    }, {
        key: 'create3dScene',
        value: function create3dScene() {
            var parentContainer = document.getElementById("car3d-scene");
            var scene = new THREE.Scene();
            var screenWidth = parentContainer.clientWidth * 0.75;
            var screenHeight = parentContainer.clientHeight;
            var camSettings = {
                FOV: 75,
                AspectRatio: screenWidth / screenHeight,
                NearPlane: 0.1,
                FarPlane: 1000
            };
            var camera = new THREE.PerspectiveCamera(camSettings.FOV, camSettings.AspectRatio, camSettings.NearPlane, camSettings.FarPlane);

            // generate Canvas and append it to parent
            var renderer = new THREE.WebGLRenderer({ alpha: true });
            renderer.setClearColor(0x000000, 0); // the default
            renderer.setSize(screenWidth, screenHeight);
            renderer.domElement.className += " w-100 h-100";
            parentContainer.appendChild(renderer.domElement);

            var geometry = new THREE.BoxGeometry();
            var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
            var cube = new THREE.Mesh(geometry, material);

            scene.add(cube);

            camera.position.z = 5;
            camera.position.y = 1;
            camera.rotation.x = THREE.MathUtils.degToRad(-5);

            // quick light
            var light = new THREE.PointLight(0xff0000, 1, 100);
            light.position.set(0, 3, 0);
            scene.add(light);
            /*
            const light2 = new THREE.PointLight( 0xff0000, 1, 100 );
            light2.position.set( 0, -3, 0 );
            scene.add( light2 );*/

            // ambient
            // soft white light
            var ambient = new THREE.AmbientLight(0xFFFFFF);
            scene.add(ambient);

            // Instantiate a loader
            var loader = new THREE.GLTFLoader();
            var model = new THREE.Object3D();

            loader.load('./../assets/car_gltf.glb', function (gltf) {
                // get the car
                model = gltf.scene.children[2];
                scene.add(model);

                for (var i = 0; i < gltf.scene.children.length; i++) {
                    console.log('Model [' + i + ']=>' + gltf.scene.children[i].name);
                }

                model.position.set(0, 0, 0);
                model.scale.set(model.scale.x * 1.45, model.scale.y * 1.45, model.scale.z * 1.45);
            }, undefined, function (error) {

                console.error(error);
            });

            var animate = function animate() {
                requestAnimationFrame(animate);

                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;

                //model.rotation.x += 0.01;
                //model.rotation.y += 0.01;
                model.rotation.z += 0.01;

                renderer.render(scene, camera);
            };

            animate();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'page' },
                React.createElement(
                    'header',
                    null,
                    React.createElement(
                        'div',
                        { className: 'split space-between' },
                        React.createElement(
                            'div',
                            null,
                            React.createElement(
                                'form',
                                { onSubmit: this.handleSubmit },
                                React.createElement('input', { type: 'text',
                                    name: 'page-search',
                                    className: 'border-black',
                                    placeholder: 'www.autoeroticar.net',
                                    onChange: this.handleChange,
                                    value: this.state.searchPageUrl })
                            )
                        ),
                        React.createElement(
                            'div',
                            { id: 'btns-header' },
                            React.createElement(
                                'div',
                                { className: 'border-black border-radius-10 btn-header' },
                                React.createElement(
                                    'a',
                                    { id: 'email-btn', href: '#' },
                                    React.createElement('img', { src: './../img/msg-img.png' })
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'border-black border-radius-10 btn-header' },
                                React.createElement(
                                    'a',
                                    { id: 'home-btn', href: './../index.html' },
                                    React.createElement('img', { src: './../img/home-img.png' })
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'container', id: 'logo-header' },
                    React.createElement(
                        'div',
                        { className: 'row mb-2' },
                        React.createElement(
                            'div',
                            { className: 'col-4' },
                            React.createElement(
                                'a',
                                null,
                                React.createElement('img', { src: './../img/autoeroticar/autoeroticar_1.png' })
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'col-4' },
                            'Car LOGO'
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'row', id: 'page-btns-header' },
                        React.createElement(
                            'div',
                            { className: 'col d-flex flex-row justify-content-center' },
                            React.createElement(
                                'button',
                                { className: 'btn first active' },
                                'Home'
                            ),
                            React.createElement(
                                'button',
                                { className: 'btn' },
                                'Check cars'
                            ),
                            React.createElement(
                                'button',
                                { className: 'btn' },
                                'About'
                            ),
                            React.createElement(
                                'button',
                                { className: 'btn' },
                                'Contact'
                            )
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'container pl-5', id: 'page-presentation' },
                    React.createElement(
                        'div',
                        { className: 'row mt-5' },
                        React.createElement(
                            'h2',
                            { className: 'text-red' },
                            'TIRED OF HOLDING YOUR BREATHE WAITING EOR THE RIGHT CAR TO COME ALONG?'
                        ),
                        React.createElement(
                            'h5',
                            { className: 'font-weight-bold' },
                            'Welcome to AutoEroticar - you\'ve made the right choice.'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'AutoEroticar vehicles aren\'t for just anyone. Our customers want the best of everything and need a ride with thrust, power, potency, style and class. Performance is everything'
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(
                            'div',
                            { className: 'col-md-4' },
                            React.createElement(
                                'p',
                                null,
                                'Feel free to cruise around the site and check out our taut bodies, run your eyes over our perfect curves and high-maintenance finish - We know you\'ll be begging to buy'
                            ),
                            React.createElement(
                                'p',
                                null,
                                'We assure customers that our automobiles have only the highest quality rim jobs, lube Jobs and waxes - there is absolutely no junk in our trunks'
                            ),
                            React.createElement(
                                'p',
                                null,
                                'We aim to satisty all your urges. You\'ll be going frorn 0 to Sexy in no time at all...'
                            )
                        ),
                        React.createElement('div', { className: 'col-md-8', id: 'car3d-scene' })
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'container mb-5', id: 'trademarks-display' },
                    React.createElement('hr', null),
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(
                            'div',
                            { className: 'col-md-6 d-flex flex-row col-left' },
                            React.createElement(SVGFile, { svgId: "svg-file-1",
                                classes: "trademark-logo",
                                svgPath: './../img/autoeroticar/autoeroticar_logo_1.svg'
                            }),
                            React.createElement(SVGFile, { svgId: "svg-file-2",
                                classes: "trademark-logo",
                                svgPath: './../img/autoeroticar/autoeroticar_logo_2.svg'
                            }),
                            React.createElement(SVGFile, { svgId: "svg-file-3",
                                classes: "trademark-logo",
                                svgPath: './../img/autoeroticar/autoeroticar_logo_3.svg'
                            }),
                            React.createElement(SVGFile, { svgId: "svg-file-4",
                                classes: "trademark-logo",
                                svgPath: './../img/autoeroticar/autoeroticar_logo_4.svg'
                            })
                        ),
                        React.createElement(
                            'div',
                            { className: 'col-md-6 d-flex flex-row col-right' },
                            React.createElement(SVGFile, { svgId: "svg-file-5",
                                classes: "trademark-logo",
                                svgPath: './../img/autoeroticar/autoeroticar_logo_5.svg'
                            }),
                            React.createElement(SVGFile, { svgId: "svg-file-6",
                                classes: "trademark-logo",
                                svgPath: './../img/autoeroticar/autoeroticar_logo_6.svg'
                            }),
                            React.createElement(SVGFile, { svgId: "svg-file-7",
                                classes: "trademark-logo",
                                svgPath: './../img/autoeroticar/autoeroticar_logo_7.svg'
                            }),
                            React.createElement(SVGFile, { svgId: "svg-file-8",
                                classes: "trademark-logo",
                                svgPath: './../img/autoeroticar/autoeroticar_logo_8.svg'
                            })
                        )
                    ),
                    React.createElement('hr', null)
                ),
                React.createElement(
                    'div',
                    { className: 'container' },
                    React.createElement(
                        'p',
                        null,
                        'Footer'
                    ),
                    React.createElement(
                        'p',
                        null,
                        '"Ferrari 458 Italia" (https://skfb.ly/o6JVZ) by DatJones is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).'
                    )
                )
            );
        }
    }]);

    return AutoEroticar;
}(React.Component);

var domContainer = document.querySelector('#main_container');
ReactDOM.render(React.createElement(AutoEroticar, null), domContainer);