const HowPage = ({updatePage}) => {
    return (
        <div>
            {/** MAIN CONTENT */}
            <div className="row mb-md-3" id="main-page">
                
                    {/** FURNITURE IMAGE */}
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-12 text-center">
                            <img src="../img/krapea/how.jpg" className="w-100" />
                        </div>
                    </div>

                    {/** TEXT */}
                    <div className="row mt-3 d-flex justify-content-center">
                        <div className="col-md-6 mt-2">
                            <p className="mb-0" id="title">
                                Getting there
                            </p>
                            <p>
                                We locate all our stores in places that are really difficult to get to, preferably with access routes that 
                                are particularly prone to heavy congestion. Just keep your eye out for a windowless metal box the size of 
                                an airport. If you enjoy the third-world experience of traveling with 200 people on a 40-seater bus, some 
                                cities also offer a shuttle service. We recommend that you bring a change of clothing. You will be away 
                                from home for a couple of days. It will make you melancholy for many reasons.
                            </p>

                            <hr className="w-50" id="separator"/>

                            <p className="mb-0" id="title">
                                SHOWROOM
                            </p>
                            <p>
                                Once inside the store, pick up a pair of shin-pads and throw any small children into the pit of plastic balls 
                                by the entrance. Teach them that the human soul lives in isolation, as all Swedes know. Now you're ready for 
                                the labyrinth. No windows, no clocks, no cell phone reception. As soon as you step through those revolving 
                                doors, you are plunged into a time vacuum where day and night no longer apply. And we have got rid of the sun, 
                                just like in Sweden.
                            </p>

                        </div>
                        <div className="col-md-6 d-flex flex-column ">
                            <a href="#" alt="Questions?" className="d-flex mt-3 justify-content-center justify-content-md-end w-100" >
                                <img src="../img/krapea/questions.jpg" />
                            </a>
                            <a href="#" alt="Click here" className="d-flex justify-content-center justify-content-md-end w-100" >
                                <img src="../img/krapea/nuts.jpg" />
                            </a>
                        </div>
                    </div>

                    {/** FIRST DESCRIPTION */}
                    <div className="row mt-3">
                        <div className="col-md-12 mt-2">
                            <p>
                                All KRAPEA stores operate a strict one-way system, designed to funnel customers into bottlenecks and keep people 
                                away from the exit at all costs. Don't think that we're going to let you go straight to the bedroom section - 
                                you're going to traipse past every product that we stock whether you like it or not. We are in charge. We control
                                 you. Resistance is futile. Don't try to swim against the tide or we will twist an Allen key into one of your 
                                 pressure points or stab one of those little brown pencils into your eye. Just follow the big arrows and don't 
                                 ask questions. If you get tired, you can lie down on one of the beds and rest your head on a pillow that hasn't 
                                 been washed for 7 years.
                            </p>

                            <p>
                                
                                We aim to provide a member of staff per mile of storeroom floor but this depends on the dollar-krona exchange rate. 
                                Slip one of our employees $50 and they will show you the secret passage that leads to the Exit Bistro. At certain 
                                points, we replicate a display that you passed earlier on your journey. This is all part of the discrientation 
                                process and gives you that unerring feeling that you are going round in circles, that you are somehow trapped in a 
                                looping continuum of brightly-colored shelving units. Just a little joke on our part. Sometimes jokes help with 
                                the melancholy. Sometimes, they make it worse. We are starved of daylight in northern Europe and this gives us a 
                                sense of humor more warped than our lacquered patio chairs. Every couple of weeks, we round up hundreds of street 
                                urchins and let them run wild in our stores.
                            </p>
                            <p>
                                
                                All our products have a huge label with 10 different, meaningless codes. One of these is the product code. Pick one, 
                                write it down and hope for the best. If you manage to crack our code, we will give you a free table made of real 
                                wood. Each item in a furniture range has a slightly different shade of wood stain. We brainwash you with clever 
                                advertising into obsessing about color coordination in the home and then torment you by offering things that 
                                ALMOST match. Ingenious..
                            </p>

                            <hr className="w-50" id="separator"/>

                            <p className="mb-0" id="title">
                                RESTAURANT
                            </p>
                            <p>
                                After 9 hours of being herded like cattle through a furniture metropolis, what better way to relax and bring down the 
                                blood pressure than some traditional Swedish food? A few prawns scattered on top of a fistful of mayonnaise, gray 
                                balls of dog food in sweet, yellowy gravy and a refreshing glass of lingonberry juice is enough to bolster anyone's 
                                spirits. Here we actually provide you with some windows so that you can enjoy a panoramic view of desolate 
                                industrial wasteland. We are a lonely people. You should be, too.
                            </p>
                        </div>
                    </div>

                    {/** VENDING MACHINE */}
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-12">
                            <div className="card mb-3" id="large-card">
                                <img className="card-img-top" src="../img/krapea/vending_machine.jpg" alt="Card image cap" />
                                <div className="card-body p-0">
                                    <p className="card-text" id="bottom-text">
                                    Coming to a downtown area near you! We are in the process of evicting young families and turning their houses into massive vending machines. 
                                    Soon you will be able to buy a flat-packed kitchen in the same way that you would buy a Meteorite Bar.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/** LAST DESCRIPTION */}
                    <div className="row mt-3">
                        <div className="col-md-12 mt-2">

                            <hr className="w-50" id="separator"/>

                            <p className="mb-0" id="title">
                                HOUSEHOLD ITEMS
                            </p>
                            <p>
                                As you leave the restaurant, you are hit with the horrifying realization that you still have another floor to negotiate before we will even consider 
                                allowing you a sniff of fresh air. Snarl at your partner, grit your teeth and prepare for home furnishing hell. This is where we bamboozle you into 
                                buying stuff that you don't need. Metal toilet seats, floating tea-lights, luminous cocktail shakers, plastic toaster racks, polyester wardrobe 
                                space-savers, butt plugs that light up. square lamps made of concertinaed paper, tacky posters in picture frames... after traversing a few acres of 
                                novelty Nordic knick-knacks, you will notice a sudden shift in behavior. Women start to panic, sweeping spatulas, scented candles and shoe racks into 
                                complimentary mesh shopping bags. Men are found discussing the pros and cons of throw cushions, finally stripped of the last vestiges of masculinity. 
                                You begin to understand now why the Scandinavians drink so much. Time to get out.
                            </p>

                            <hr className="w-50" id="separator"/>

                            <p className="mb-0" id="title">
                                WAREHOUSE
                            </p>
                            <p>
                                Or is it...? You run for the exit, kicking feral brats out of your way, only to emerge into a cavernous warehouse. Now it finally dawns on you that we 
                                are going to steal your soul. Welcome to the flat-pack jungle. Here you discover that you need to be a professional weightlifter to actually move any 
                                of the packages off the shelves. All around you are the skeletons of people who underestimated the power of the pressboard. And don't expect any help 
                                from us. If you want a wardrobe for $50, you're going to carry it yourself. There's unnier than an 80lb pensioner trying to wrestle down a garden bench 
                                from the rafters of an aircraft hangar. We could release a DVD of our CCTV footage on a daily basis. In the unlikely event that you succeed in balancing 
                                your bedroom furniture on top of a supermarket cart, it's time to take on the checkout.
                            </p>
                           
                        </div>
                    </div>

                    {/** LAST DESCRIPTION */}
                    <div className="row mt-3">
                        <div className="col-md-12 mt-2">
                            <a href="#" alt="More..." className="d-flex justify-content-center justify-content-md-end w-100" >
                                <img src="../img/krapea/more.jpg" />
                            </a>
                        </div>
                    </div>
            </div>
        </div>
    );
}