'use strict';

class EunuxAboutUs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <EunuxArticleTemplate 
                onPageSelected={this.props.onPageSelected}
                selectedTab={this.props.selectedTab}>

                <p>Welcome to one of the thousands of official websites for Eunux, the open source operating system that geeks love! Just imagine your car being put together by hundreds of people in their spare time. That's the same as the open source movement.</p>
                <p>Eunux, masturbation, vandalism... all the best things in life are free. Why pay $300 to a mega-corporation so you can run $oftware compatible with 99% of computers on the planet when you can join the open source insurgency and be at the ground floor of a revolution?! The underlying source code is available for anyone to modify and redistribute freely which means that you can see how the system works! Doesn't this excite you?! Compiling code roxxOrz! We're going to bankrupt the Software monopoly.</p>
                <p>Just imagine what would happen if all the fancy clothing stores released copies of their designs?!</p>
                <p>You would never buy clothes again, right?</p>
                <p>Only a fool would pay for something when he can get it for free.</p>
                <p>Why buy a house when you can make one out of scrap?</p>
                <p>Why go to a supermarket when you can home-farm?</p>
                <p>Why buy a car when you can make one yourself?</p>
                <p>At Eunux.net, we all drive around in wooden go-carts powered by hairdryers that we made in our backyards.</p>
                <p className="highlight-pink">L33t!</p>
                <p>There are literally millions of different versions of Eunux called distributions or 'distresses', such as RedTwat 328.4, Ucuntu 293.6, Slackcrack 784.9 and Knobbix 136.7. A few of them actually work but we're not going to tell you which ones - that's all part of the fun! Eunux is compatible with almost everything. apart from a sex life, and can do almost anything, except music, movies, games or fun in general. It is the best operating system in the world.</p>
                <p>But, before you shit the tighty-whities your Mom bought you, it gets even better: as a Eunux user, you will have the chance to be part of a cult-like community and learn a secret handshake. You will finally belong somewhere!</p>
                <p>Why would you want a glitzy, out-of-the-box, plug-and-play, one-size-fits-all desktop solution when you can buy a computer a piece at a time and build it from scratch?</p>
                <p>Eunux is easy - after about six months of getting flamed on message boards when asking for help, you'll finally figure out the answer to your questions, and, after a few weeks of online tutorials, you should be able to play a DVD.</p>
                <p>Can you think of anything better than spending your weekend recompiling a kernel? Do you even know what we're talking about? A fucking kernel man! Eunux is completely free, so long as time has no value to you. All we ask in return is that you worship our founder. He is a geek god. If you speak to him nicely, he will tell you the meaning of life. Just don't mispronounce Eunux or he will make the system even less intuitive.</p>
                <p>Come on! What better way to fuck capitalism in the ass than an operating system used by nobody?!! Don't kid yourselves - you're never going to get laid. Join the free software subculture instead.</p> 
                <p className="highlight-pink">Become Eunux today!</p>

            </EunuxArticleTemplate>
        );
    }
}
