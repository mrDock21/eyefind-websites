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
            camX: -2.25,
            camY: 0.55,
            camZ: 5,
            rotX: -6,
            camera: null,
            carRotZ: 65
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
            var screenHeight = 400;
            var state = Object.assign({}, this.state);

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

            camera.position.z = state.camZ;
            camera.position.y = state.camY;
            camera.position.x = state.camX;
            camera.rotation.x = THREE.MathUtils.degToRad(state.rotX);
            state.camera = camera;

            // quick light
            var light = new THREE.PointLight(0xff0000, 1, 100);
            light.position.set(0, 3, 0);
            scene.add(light);
            // ambient  soft white light
            var ambient = new THREE.AmbientLight(0xFFFFFF);
            scene.add(ambient);

            // Instantiate a loader
            var loader = new THREE.GLTFLoader();
            var car3dModel = new THREE.Object3D();

            loader.load('./../assets/car_gltf.glb', function (gltf) {
                // get the car
                car3dModel = gltf.scene.children[2];
                state.carRotZ = 0;
                scene.add(car3dModel);

                for (var i = 0; i < gltf.scene.children.length; i++) {
                    console.log('Model [' + i + ']=>' + gltf.scene.children[i].name);
                }

                car3dModel.position.set(0, 0, 0);
                car3dModel.scale.set(car3dModel.scale.x * 1.45, car3dModel.scale.y * 1.45, car3dModel.scale.z * 1.45);
            }, undefined, function (error) {

                console.error(error);
            });

            var _this = this;
            var animate = function animate() {
                requestAnimationFrame(animate);

                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;

                //model.rotation.x += 0.01;
                //model.rotation.y += 0.01;
                car3dModel.rotation.z += 0.01;
                //THREE.MathUtils.degToRad(_this.state.carRotZ);

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