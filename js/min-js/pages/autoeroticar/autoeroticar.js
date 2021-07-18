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
            searchPageUrl: 'www.autoeroticar.net',
            camX: -1.75,
            camY: 1.6,
            camZ: 5,
            rotX: -12,
            camZoom: 0.02,
            camera: null,
            carRotZ: -41
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
        key: 'buildLight',
        value: function buildLight(gui, hexInitialColorStr, name) {
            // create light with given color
            var light = new THREE.PointLight(parseInt(hexInitialColorStr), 2, 100);
            // make position debug GUI for it
            var lightFolder = gui.addFolder('Light ' + name + ' position');
            lightFolder.add(light.position, "x", -10, 10, 0.01);
            lightFolder.add(light.position, "y", -10, 10, 0.01);
            lightFolder.add(light.position, "z", -10, 10, 0.01);

            // make color debug GUI
            var ConfColor = function ConfColor() {
                this.color = "#ffffff";
            };
            var conf = new ConfColor();

            var colorCntrl = lightFolder.addColor(conf, 'color');

            colorCntrl.onChange(function (colorValue) {
                //the return value by the chooser is like as: #ffff so
                //remove the # and replace by 0x
                colorValue = colorValue.replace('#', '0x');
                // create a Color
                var colorObject = new THREE.Color(parseInt(colorValue));
                //set the color in the object
                light.color = colorObject;
            });
            lightFolder.open();
            // initial position
            //light.position.set( 0, 0, 0 );
            return light;
        }
    }, {
        key: 'create3dScene',
        value: function create3dScene() {
            var parentContainer = document.getElementById("car3d-scene");
            var scene = new THREE.Scene();
            var screenWidth = parentContainer.clientWidth * 0.75;
            var screenHeight = 400;
            var state = Object.assign({}, this.state);
            // debug GUI
            var gui = new dat.GUI();
            // orthographic camera
            var camera = new THREE.OrthographicCamera(-5, 5, 3, -3, 1, 1000);
            camera.zoom = this.state.camZoom;
            camera.position.z = state.camZ;
            camera.position.y = state.camY;
            camera.position.x = state.camX;
            camera.rotation.x = THREE.MathUtils.degToRad(state.rotX);
            state.camera = camera;

            // generate Canvas and append it to parent
            var renderer = new THREE.WebGLRenderer({ alpha: true });
            // transparent background
            renderer.setClearColor(0x000000, 0);
            renderer.setSize(screenWidth, screenHeight);
            // add bootstrap classes and append it to DOM
            renderer.domElement.className += " w-100 h-100";
            parentContainer.appendChild(renderer.domElement);

            // scene lighting
            // values got with dat.GUI's help
            var light1 = this.buildLight(gui, "0xc6c633", "Back"),
                light2 = this.buildLight(gui, "0xffd2a5", "Front"),
                light3 = this.buildLight(gui, "0x606060", "Extra");
            light1.position.set(-2.96, 7.41, -10);
            light2.position.set(2.11, 4.98, 9.61);
            light3.position.set(2.33, 4.1, -10);

            scene.add(light1);
            scene.add(light2);
            scene.add(light3);

            // ambient  soft white light
            //const ambient = new THREE.AmbientLight( 0xFFFFFF ); 
            //scene.add( ambient );

            // load 3d car model
            // Instantiate a loader
            var loader = new THREE.GLTFLoader();
            var car3dModel = new THREE.Object3D(),
                carReflection;

            loader.load('./../assets/car_gltf_v2.glb', function (gltf) {
                // get the car
                car3dModel = gltf.scene.children[0];
                state.carRotZ = 0;
                scene.add(car3dModel);

                car3dModel.position.set(0, 0, 0);
                car3dModel.rotation.z = THREE.MathUtils.degToRad(-41);

                carReflection = car3dModel.clone();
                carReflection.position.set(0, -0.21, 0);
                carReflection.rotation.set(car3dModel.rotation.x, car3dModel.rotation.y, car3dModel.rotation.z);
                carReflection.rotation.y = THREE.MathUtils.degToRad(180);

                var newMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });
                newMaterial.opacity = 0.1;
                carReflection.traverse(function (o) {
                    if (o.isMesh) o.material = newMaterial;
                });

                // make position debug GUI for reflection
                var carFolder = gui.addFolder('Car reflection');
                carFolder.add(carReflection.position, "y", -10, 10, 0.01);
                scene.add(carReflection);
            }, undefined, function (error) {
                return console.error(error);
            });

            var _this = this;
            var animate = function animate() {
                requestAnimationFrame(animate);
                // rotate car
                car3dModel.rotation.z += -0.01;

                if (carReflection != null) {
                    carReflection.rotation.set(car3dModel.rotation.x, car3dModel.rotation.y, -car3dModel.rotation.z);
                    carReflection.rotation.y = THREE.MathUtils.degToRad(180);
                }

                renderer.render(scene, _this.state.camera);
            };

            this.setState(state);
            animate();
        }
    }, {
        key: 'onCamX',
        value: function onCamX(event) {
            var state = Object.assign({}, this.state);
            state.camera.position.x = state.camX = event.target.value;

            this.setState(state);
        }
    }, {
        key: 'onCamY',
        value: function onCamY(event) {
            var state = Object.assign({}, this.state);
            state.camera.position.y = state.camY = event.target.value;

            this.setState(state);
        }
    }, {
        key: 'onCamZ',
        value: function onCamZ(event) {
            var state = Object.assign({}, this.state);
            state.camera.position.z = state.camZ = event.target.value;

            this.setState(state);
        }
    }, {
        key: 'onCamRotX',
        value: function onCamRotX(event) {
            var state = Object.assign({}, this.state);
            state.rotX = event.target.value;
            state.camera.rotation.x = THREE.MathUtils.degToRad(state.rotX);

            this.setState(state);
        }
    }, {
        key: 'onCarRot',
        value: function onCarRot(event) {
            var state = Object.assign({}, this.state);
            state.carRotZ = event.target.value;

            this.setState(state);
        }
    }, {
        key: 'onCamZoom',
        value: function onCamZoom(event) {
            var state = Object.assign({}, this.state);
            state.camera.zoom = state.camZoom = event.target.value;
            state.camera.setViewOffset(-1 * state.camZoom, 1 * state.camZoom, 1 * state.camZoom, -1 * state.camZoom);

            this.setState(state);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

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
                            'h1',
                            { className: 'text-red' },
                            'TIRED OF HOLDING YOUR BREATH WAITING FOR THE RIGHT CAR TO COME ALONG?'
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
                        { className: 'row', id: 'presentation-3dcar' },
                        React.createElement(
                            'div',
                            { className: 'col-12' },
                            React.createElement('div', { id: 'car3d-scene' }),
                            React.createElement(
                                'div',
                                { id: 'car3d-text' },
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
                            )
                        )
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
                        'a',
                        { href: 'https://skfb.ly/o6JVZ' },
                        React.createElement(
                            'p',
                            null,
                            '"Ferrari 458 Italia"'
                        )
                    ),
                    React.createElement(
                        'p',
                        null,
                        'by DatJones is licensed under',
                        React.createElement(
                            'a',
                            { href: 'http://creativecommons.org/licenses/by/4.0/' },
                            'Creative Commons Attribution'
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'container' },
                    React.createElement(
                        'p',
                        null,
                        'Camera Zoom'
                    ),
                    React.createElement('input', { id: '', type: 'range', min: '0', max: '1', step: '0.05',
                        value: this.state.camZoom, onChange: function onChange(e) {
                            return _this3.onCamZoom(e);
                        }
                    }),
                    React.createElement(
                        'p',
                        null,
                        'CamX'
                    ),
                    React.createElement('input', { id: '', type: 'range', min: '-10', max: '10', step: '0.05',
                        value: this.state.camX, onChange: function onChange(e) {
                            return _this3.onCamX(e);
                        }
                    }),
                    React.createElement(
                        'p',
                        null,
                        'CamY'
                    ),
                    React.createElement('input', { id: '', type: 'range', min: '0', max: '10', step: '0.05',
                        value: this.state.camY, onChange: function onChange(e) {
                            return _this3.onCamY(e);
                        }
                    }),
                    React.createElement(
                        'p',
                        null,
                        'CamZ'
                    ),
                    React.createElement('input', { id: '', type: 'range', min: '-5', max: '5', step: '0.05',
                        value: this.state.camZ, onChange: function onChange(e) {
                            return _this3.onCamZ(e);
                        }
                    }),
                    React.createElement(
                        'p',
                        null,
                        'RotX'
                    ),
                    React.createElement('input', { id: '', type: 'range', min: '-30', max: '30', step: '1',
                        value: this.state.rotX, onChange: function onChange(e) {
                            return _this3.onCamRotX(e);
                        }
                    }),
                    React.createElement(
                        'p',
                        null,
                        'Rot Car'
                    ),
                    React.createElement('input', { id: '', type: 'range', min: '-180', max: '180', step: '1',
                        value: this.state.carRotZ, onChange: function onChange(e) {
                            return _this3.onCarRot(e);
                        }
                    })
                )
            );
        }
    }]);

    return AutoEroticar;
}(React.Component);

var domContainer = document.querySelector('#main_container');
ReactDOM.render(React.createElement(AutoEroticar, null), domContainer);