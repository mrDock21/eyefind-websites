'use strict';

class EunuxLandingPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="page-content">
                <section className="lp-header-logo">
                    <a><img src="./../img/eunux/header-logo.jpg" alt="header-logo"/></a>
                </section>

                <section className="lp-grid bebas-neue-regular">
                    <button className="camel-case" onClick={() => this.props.onPageSelected(0)}>
                        <span>A</span>bout <span>U</span>s
                    </button>
                    <button className="camel-case" onClick={() => this.props.onPageSelected(1)}>
                        <span>H</span>istory</button>
                    <button className="camel-case" onClick={() => this.props.onPageSelected(2)}>
                        <span>O</span>pen <span>S</span>ource <span>M</span>ovement
                    </button>
                    <button className="camel-case" onClick={() => this.props.onPageSelected(4)}>
                        <span>Q</span> and <span>A</span>
                    </button>
                    <div className="lp-logo">
                        <img src="./../img/eunux/mascot-eunux-background.png"/>
                        <p className="camel-case"> 
                            <span>S</span>ux <span>T</span>he <span>S</span>ea <span>C</span>ucumber
                        </p>
                    </div>
                </section>
            </div>
        );
    }
}