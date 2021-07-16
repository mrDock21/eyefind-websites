'use strict';

class AutoEroticar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchPageUrl: 'www.autoeroticar.net'
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
        const screenHeight = parentContainer.clientHeight;
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

        camera.position.z = 5;
        camera.position.y = 1;
        camera.rotation.x = THREE.MathUtils.degToRad(-5);

        // quick light
        const light = new THREE.PointLight( 0xff0000, 1, 100 );
        light.position.set( 0, 3, 0 );
        scene.add( light );
        /*
        const light2 = new THREE.PointLight( 0xff0000, 1, 100 );
        light2.position.set( 0, -3, 0 );
        scene.add( light2 );*/

        // ambient
        // soft white light
        const ambient = new THREE.AmbientLight( 0xFFFFFF ); 
        scene.add( ambient );

        // Instantiate a loader
        const loader = new THREE.GLTFLoader();
        let model = new THREE.Object3D();

        loader.load( './../assets/car_gltf.glb', function ( gltf ) {
            // get the car
            model = gltf.scene.children[2];
            scene.add( model );

            for (var i = 0; i < gltf.scene.children.length; i++){
                console.log(`Model [${i}]=>${gltf.scene.children[i].name}`);
            }

            model.position.set(0, 0, 0);
            model.scale.set(model.scale.x * 1.45, model.scale.y * 1.45, model.scale.z * 1.45);

        }, undefined, function ( error ) {

            console.error( error );

        } );

        const animate = function () {
            requestAnimationFrame( animate );

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            //model.rotation.x += 0.01;
            //model.rotation.y += 0.01;
            model.rotation.z += 0.01;

            renderer.render( scene, camera );
        };

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
                        <h2 className="text-red">
                            TIRED OF HOLDING YOUR BREATHE WAITING EOR THE RIGHT CAR TO COME ALONG?
                        </h2>
                        <h5 className="font-weight-bold">
                            Welcome to AutoEroticar - you've made the right choice.
                        </h5>
                        <p>AutoEroticar vehicles aren't for just anyone. Our customers want the best of everything and need a ride with thrust, power, potency, style and class. Performance is everything</p>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <p>Feel free to cruise around the site and check out our taut bodies, run your eyes over our perfect curves and high-maintenance finish - We know you'll be begging to buy</p>
                            <p>We assure customers that our automobiles have only the highest quality rim jobs, lube Jobs and waxes - there is absolutely no junk in our trunks</p>
                            <p>We aim to satisty all your urges. You'll be going frorn 0 to Sexy in no time at all...</p>
                        </div>
                        <div className="col-md-8" id="car3d-scene">
                            {/* Card 3d model is positioned here */}
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
                    <p>"Ferrari 458 Italia" (https://skfb.ly/o6JVZ) by DatJones is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).</p>
                </div>
            </div>
        );
    }
}

let domContainer = document.querySelector('#main_container');
ReactDOM.render(<AutoEroticar />, domContainer);