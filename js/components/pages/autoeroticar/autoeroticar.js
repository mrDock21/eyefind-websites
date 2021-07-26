'use strict';

class AutoEroticar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchPageUrl: 'www.autoeroticar.net',
            showControls: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        var _this = this;
        window.requestAnimationFrame(function() {
            _this.create3dScene();
        });
    }

    /**
     * Updates URL text
     */
     handleChange(event) {
        var state = {...this.state};
        state.searchPageUrl = event.target.value;
        this.setState(state);
    }

    /**
     * Redirects to "GTA-URL" requested
     */
    handleSubmit(event) {
        alert('Requested search: ' + this.state.value);
        event.preventDefault();
    }

    buildLight(gui, hexInitialColorStr, name) {
        // create light with given color
        const light = new THREE.PointLight( parseInt(hexInitialColorStr), 2, 100 );
        // make position debug GUI for it
        const lightFolder = gui.addFolder(`Light ${name} position`);
        lightFolder.add(light.position, "x", -10, 10, 0.01);
        lightFolder.add(light.position, "y", -10, 10, 0.01);
        lightFolder.add(light.position, "z", -10, 10, 0.01);
        
        // make color debug GUI
        var ConfColor=function(){
            this.color = "#ffffff";
        }
        var conf = new ConfColor();
    
        var colorCntrl = lightFolder.addColor( conf, 'color');
        
        colorCntrl.onChange( function(colorValue) {
            //the return value by the chooser is like as: #ffff so
            //remove the # and replace by 0x
            colorValue=colorValue.replace( '#','0x' );
            // create a Color
            var colorObject = new THREE.Color(parseInt(colorValue));
            //set the color in the object
            light.color = colorObject;
        });

        lightFolder.open();

        return light;
    }

    create3dScene() {
        const parentContainer = document.getElementById("car3d-scene");
        const scene = new THREE.Scene();
        const screenWidth = parentContainer.clientWidth * 0.75;
        const screenHeight = 400;
        // debug GUI
        const gui = new dat.GUI();
        // orthographic camera
        const camera = new THREE.OrthographicCamera( 
            -5, 5, 
            3, -3, 1, 1000 
        );
        camera.zoom = 0.02;
        camera.position.z = 5;
        camera.position.y = 1.6;
        camera.position.x = -1.75;
        camera.rotation.x = THREE.MathUtils.degToRad(-12);

        // generate Canvas and append it to parent
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        // transparent background
        renderer.setClearColor( 0x000000, 0 ); 
        renderer.setSize( screenWidth, screenHeight );
        // add bootstrap classes and append it to DOM
        renderer.domElement.className += " w-100 h-100";
        parentContainer.appendChild( renderer.domElement );
        
        // scene lighting
        // values got with dat.GUI's help
        var light1 = this.buildLight(gui, "0xc6c633", "Back"),
            light2 = this.buildLight(gui, "0xffd2a5", "Front"),
            light3 = this.buildLight(gui, "0x606060", "Extra");
        light1.position.set(-2.96, 7.41, -10);
        light2.position.set(2.11, 4.98, 9.61);
        light3.position.set(2.33, 4.1, -10);

        scene.add( light1 );
        scene.add( light2 );
        scene.add( light3 );

        // ambient  soft white light
        //const ambient = new THREE.AmbientLight( 0xFFFFFF ); 
        //scene.add( ambient );

        // load 3d car model
        // Instantiate a loader
        const loader = new THREE.GLTFLoader();
        var car3dModel = new THREE.Object3D(), carReflection;

        loader.load( './../assets/car_gltf_v2.glb', function ( gltf ) {
            // get the car
            car3dModel = gltf.scene.children[0];
            scene.add( car3dModel );
            
            car3dModel.position.set(0, 0, 0);
            car3dModel.rotation.z = 
                THREE.MathUtils.degToRad(-41);

            carReflection = car3dModel.clone();
            carReflection.position.set(0, -0.21, 0);
            carReflection.rotation.set(
                car3dModel.rotation.x, car3dModel.rotation.y, car3dModel.rotation.z
            );
            carReflection.rotation.y = 
                THREE.MathUtils.degToRad(180);

            var newMaterial = new THREE.MeshStandardMaterial({color: 0x000000});
            newMaterial.opacity = 0.1;
            carReflection.traverse((o) => {
                if (o.isMesh) o.material = newMaterial;
            });

            // make position debug GUI for reflection
            const carFolder = gui.addFolder(`Car reflection`);
            carFolder.add(carReflection.position, "y", -10, 10, 0.01);
            scene.add( carReflection );
        }, undefined, (error) => console.error( error ));


        var _this = this;
        const animate = function () {
            requestAnimationFrame( animate );
            // rotate car
            car3dModel.rotation.z += -0.01;

            if (carReflection != null){
                carReflection.rotation.set(
                    car3dModel.rotation.x, car3dModel.rotation.y, 
                    -car3dModel.rotation.z
                );
                carReflection.rotation.y = 
                    THREE.MathUtils.degToRad(180);
            }

            renderer.render( scene, camera );
        };

        if (!this.showControls)
            gui.destroy();

        animate();
    }

    render() {
        return (
            <div className="page">
                
                {/** GRAY HEADER */}
                <header>
                    <div className="split space-between">
                        <div>
                            <form onSubmit={this.handleSubmit}>
                                <input type="text" 
                                    name="page-search" 
                                    className="border-black" 
                                    placeholder="www.autoeroticar.net"
                                    onChange={this.handleChange}
                                    value={ this.state.searchPageUrl }/>
                            </form>
                        </div>
                        <div id="btns-header">
                            <div className="border-black border-radius-10 btn-header">
                                <a id="email-btn" href="#">
                                    <img src="./../img/msg-img.png"/>
                                </a>
                            </div>
                            <div className="border-black border-radius-10 btn-header">
                                <a id="home-btn" href="./../index.html">
                                    <img src="./../img/home-img.png"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
                
                {/** Logo header */}
                <div className="container" id="logo-header">
                    <div className="row mb-2">
                        <div className="col-4">
                            <a>
                                <img src="./../img/autoeroticar/autoeroticar_1.png"/>
                            </a>
                        </div>
                        <div className="col-4">Car LOGO</div>
                    </div>

                    {/** Nav */}
                    <div className="row" id="page-btns-header">
                        <div className="col d-flex flex-row justify-content-center">
                            <button className="btn first active">Home</button>
                            <button className="btn">Check cars</button>
                            <button className="btn">About</button>
                            <button className="btn">Contact</button>
                        </div>
                    </div>
                </div>

                {/** Main content */}
                <div className="container pl-5" id="page-presentation">
                    <div className="row mt-5">
                        <h1 className="text-red">
                            TIRED OF HOLDING YOUR BREATH WAITING FOR THE RIGHT CAR TO COME ALONG?
                        </h1>
                        <h5 className="font-weight-bold">
                            Welcome to AutoEroticar - you've made the right choice.
                        </h5>
                        <p>AutoEroticar vehicles aren't for just anyone. Our customers want the best of everything and need a ride with thrust, power, potency, style and class. Performance is everything</p>
                    </div>

                    <div className="row" id="presentation-3dcar">
                        <div className="col-12">
                            <div id="car3d-scene">
                                {/* Card 3d model is positioned here */}
                            </div>
                            <div id="car3d-text">
                                <p>Feel free to cruise around the site and check out our taut bodies, run your eyes over our perfect curves and high-maintenance finish - We know you'll be begging to buy</p>
                                <p>We assure customers that our automobiles have only the highest quality rim jobs, lube Jobs and waxes - there is absolutely no junk in our trunks</p>
                                <p>We aim to satisty all your urges. You'll be going from 0 to SEXY in no time at all...</p>    
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="container mb-5" id="trademarks-display">
                    <hr/>

                    {/** Forgive me, Cuellar */}
                    <div className="row">
                        <div className="col-md-6 d-flex flex-row col-left">
                            <SVGFile svgId={"svg-file-1"} 
                                     classes={"trademark-logo"}
                                     svgPath={'./../img/autoeroticar/autoeroticar_logo_1.svg'}
                            />
                            <SVGFile svgId={"svg-file-2"} 
                                     classes={"trademark-logo"}
                                     svgPath={'./../img/autoeroticar/autoeroticar_logo_2.svg'}
                            />
                            <SVGFile svgId={"svg-file-3"} 
                                     classes={"trademark-logo"}
                                     svgPath={'./../img/autoeroticar/autoeroticar_logo_3.svg'}
                            />
                            <SVGFile svgId={"svg-file-4"} 
                                     classes={"trademark-logo"}
                                     svgPath={'./../img/autoeroticar/autoeroticar_logo_4.svg'}
                            />
                        </div>
                        <div className="col-md-6 d-flex flex-row col-right">
                            <SVGFile svgId={"svg-file-5"} 
                                     classes={"trademark-logo"}
                                     svgPath={'./../img/autoeroticar/autoeroticar_logo_5.svg'}
                            />
                            <SVGFile svgId={"svg-file-6"} 
                                     classes={"trademark-logo"}
                                     svgPath={'./../img/autoeroticar/autoeroticar_logo_6.svg'}
                            />
                            <SVGFile svgId={"svg-file-7"} 
                                     classes={"trademark-logo"}
                                     svgPath={'./../img/autoeroticar/autoeroticar_logo_7.svg'}
                            />
                            <SVGFile svgId={"svg-file-8"} 
                                     classes={"trademark-logo"}
                                     svgPath={'./../img/autoeroticar/autoeroticar_logo_8.svg'}
                            />
                        </div>
                    </div>

                    <hr/>
                </div>

                {/* Footer  */}
                <div className="container row">
                    <div className="col-4"></div>
                    <div className="col-8 d-flex flex-row">
                        <p>
                            <a className="autoeroticar-link"
                               href="https://skfb.ly/o6JVZ">
                                Ferrari 458 Italia
                            </a>
                            &#160;by DatJones is licensed under&#160;
                            <a className="autoeroticar-link" 
                                href="http://creativecommons.org/licenses/by/4.0/">
                                Creative Commons Attribution
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

let domContainer = document.querySelector('#main_container');
ReactDOM.render(<AutoEroticar />, domContainer);