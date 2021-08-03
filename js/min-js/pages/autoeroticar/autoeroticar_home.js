'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AutoEroticarHome = function (_React$Component) {
    _inherits(AutoEroticarHome, _React$Component);

    function AutoEroticarHome(props) {
        _classCallCheck(this, AutoEroticarHome);

        var _this2 = _possibleConstructorReturn(this, (AutoEroticarHome.__proto__ || Object.getPrototypeOf(AutoEroticarHome)).call(this, props));

        _this2.state = {
            searchPageUrl: 'www.autoeroticar.net',
            showControls: false
        };

        var _this = _this2;
        window.requestAnimationFrame(function () {
            _this.create3dScene();
        });
        return _this2;
    }

    _createClass(AutoEroticarHome, [{
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

            return light;
        }
    }, {
        key: 'create3dScene',
        value: function create3dScene() {
            var parentContainer = document.getElementById("car3d-scene");
            var scene = new THREE.Scene();
            var screenWidth = parentContainer.clientWidth * 0.75;
            var screenHeight = 400;
            // debug GUI
            var gui = new dat.GUI();
            // orthographic camera
            var camera = new THREE.OrthographicCamera(-5, 5, 3, -3, 1, 1000);
            camera.zoom = 0.02;
            camera.position.z = 5;
            camera.position.y = 1.6;
            camera.position.x = -1.75;
            camera.rotation.x = THREE.MathUtils.degToRad(-12);

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

            // load 3d car model
            // Instantiate a loader
            var loader = new THREE.GLTFLoader();
            var car3dModel = new THREE.Object3D(),
                carReflection;

            loader.load('./../assets/car_gltf_v2.glb', function (gltf) {
                // get the car
                car3dModel = gltf.scene.children[0];
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

                renderer.render(scene, camera);
            };

            if (!this.showControls) gui.destroy();

            animate();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
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
                                'We aim to satisty all your urges. You\'ll be going from 0 to SEXY in no time at all...'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AutoEroticarHome;
}(React.Component);