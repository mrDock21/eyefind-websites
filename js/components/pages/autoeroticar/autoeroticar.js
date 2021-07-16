'use strict';

class AutoEroticar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchPageUrl: 'www.autoeroticar.net',
            camX: -2.25,
            camY: 0.55,
            camZ: 5,
            rotX: -6,
            camera: null,
            carRotZ: 65
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


    create3dScene() {
        const parentContainer = document.getElementById("car3d-scene");
        const scene = new THREE.Scene();
        const screenWidth = parentContainer.clientWidth * 0.75;
        const screenHeight = 400;
        const state = {...this.state};

        let camSettings = { 
            FOV: 75, 
            AspectRatio:  screenWidth / screenHeight,
            NearPlane: 0.1,
            FarPlane: 1000
        };
        const camera = new THREE.PerspectiveCamera( 
            camSettings.FOV, camSettings.AspectRatio, camSettings.NearPlane, camSettings.FarPlane 
        );

        // generate Canvas and append it to parent
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setClearColor( 0x000000, 0 ); // the default
        renderer.setSize( screenWidth, screenHeight );
        renderer.domElement.className += " w-100 h-100";
        parentContainer.appendChild( renderer.domElement );

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        const cube = new THREE.Mesh( geometry, material );
        
        scene.add( cube );

        camera.position.z = state.camZ;
        camera.position.y = state.camY;
        camera.position.x = state.camX;
        camera.rotation.x = THREE.MathUtils.degToRad(state.rotX);
        state.camera = camera;

        // quick light
        const light = new THREE.PointLight( 0xff0000, 1, 100 );
        light.position.set( 0, 3, 0 );
        scene.add( light );
        // ambient  soft white light
        const ambient = new THREE.AmbientLight( 0xFFFFFF ); 
        scene.add( ambient );

        // Instantiate a loader
        const loader = new THREE.GLTFLoader();
        var car3dModel = new THREE.Object3D();

        loader.load( './../assets/car_gltf.glb', function ( gltf ) {
            // get the car
            car3dModel = gltf.scene.children[2];
            state.carRotZ = 0;
            scene.add( car3dModel );

            for (var i = 0; i < gltf.scene.children.length; i++){
                console.log(`Model [${i}]=>${gltf.scene.children[i].name}`);
            }

            car3dModel.position.set(0, 0, 0);
            car3dModel.scale.set(
                car3dModel.scale.x * 1.45, 
                car3dModel.scale.y * 1.45, 
                car3dModel.scale.z * 1.45
            );

        }, undefined, function ( error ) {

            console.error( error );

        } );


        var _this = this;
        const animate = function () {
            requestAnimationFrame( animate );

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            //model.rotation.x += 0.01;
            //model.rotation.y += 0.01;
            car3dModel.rotation.z += 0.01;
                //THREE.MathUtils.degToRad(_this.state.carRotZ);

            renderer.render( scene, _this.state.camera );
        };

        this.setState(state);
        animate();
    }

    onCamX(event) {
        const state = {...this.state};
        state.camera.position.x = state.camX = event.target.value;

        this.setState(state);
    }

    onCamY(event) {
        const state = {...this.state};
        state.camera.position.y = state.camY = event.target.value;

        this.setState(state);
    }

    onCamZ(event) {
        const state = {...this.state};
        state.camera.position.z = state.camZ = event.target.value;

        this.setState(state);
    }

    onCamRotX(event) {
        const state = {...this.state};
        state.rotX = event.target.value;
        state.camera.rotation.x = THREE.MathUtils.degToRad(state.rotX);

        this.setState(state);
    }

    onCarRot(event) {
        const state = {...this.state};
        state.carRotZ = event.target.value;

        this.setState(state);
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
                                <p>We aim to satisty all your urges. You'll be going frorn 0 to Sexy in no time at all...</p>    
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
                <div className="container">
                    <p>Footer</p>
                    <a href="https://skfb.ly/o6JVZ">
                        <p>"Ferrari 458 Italia"</p>
                    </a> 
                    <p>
                        by DatJones is licensed under
                        <a href="http://creativecommons.org/licenses/by/4.0/">
                            Creative Commons Attribution
                        </a>
                    </p>
                </div>

                <div className="container">
                    <p>CamX</p>
                    <input id="" type="range" min="-10" max="10" step="0.05"
                            value={this.state.camX} onChange={(e) => this.onCamX(e)}
                    />
                    <p>CamY</p>
                    <input id="" type="range" min="0" max="10" step="0.05"
                            value={this.state.camY} onChange={(e) => this.onCamY(e)}
                    />
                    <p>CamZ</p>
                    <input id="" type="range" min="-5" max="5" step="0.05"
                            value={this.state.camZ} onChange={(e) => this.onCamZ(e)}
                    />
                    <p>RotX</p>
                    <input id="" type="range" min="-30" max="30" step="1"
                            value={this.state.rotX} onChange={(e) => this.onCamRotX(e)}
                    />
                    <p>Rot Car</p>
                    <input id="" type="range" min="-180" max="180" step="1"
                            value={this.state.carRotZ} onChange={(e) => this.onCarRot(e)}
                    />
                </div>
            </div>
        );
    }
}

let domContainer = document.querySelector('#main_container');
ReactDOM.render(<AutoEroticar />, domContainer);