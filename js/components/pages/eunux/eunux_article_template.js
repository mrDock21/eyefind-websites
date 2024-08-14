'use strict';

class EunuxArticleTemplate extends React.Component {
    constructor(props) {
        super(props);
    }

    getButtonStyle(btnIndex) {
        var style = "camel-case enx-header-btn";

        if (this.props.selectedTab === btnIndex)
            style += " selected";

        return style;
    }

    render() {
        return (
            <div className="page-content article-page">
                <section className="ads-section">
                    {/* Ads section */}
                    <img className="ad-eunux-mascot" src="./../img/eunux/mascot-eunux-article.png"/>
                </section>
                <section>
                    {/* Website's header */}
                    <header className="article-header">
                        <button onClick={() => this.props.onPageSelected(-1)}>
                            {/* this button will return to the landing page */}
                            <img className="w-100" src="./../img/eunux/header-logo.jpg" alt="header-logo"/>
                        </button>
                        <div className="header-buttons">
                            <button className={this.getButtonStyle(0)} 
                                    onClick={() => this.props.onPageSelected(0)}>
                                <span>A</span>bout <span>U</span>s<span>/</span>
                            </button>
                            <button className={this.getButtonStyle(1)}  
                                    onClick={() => this.props.onPageSelected(1)}>
                                <span>H</span>istory<span>/</span>
                            </button>
                            <button className={this.getButtonStyle(2)}  
                                    onClick={() => this.props.onPageSelected(2)}>
                                <span>O</span>pen <span>S</span>ource <span>M</span>ovement<span>/</span>
                            </button>
                            <button className={this.getButtonStyle(3)}  
                                    onClick={() => this.props.onPageSelected(3)}>
                                <span>S</span>ux <span>T</span>he <span>S</span>ea <span>C</span>ucumber<span>/</span>
                            </button>
                            <button className={this.getButtonStyle(4)}  
                                    onClick={() => this.props.onPageSelected(4)}>
                                <span>Q</span> and <span>A</span>
                            </button>
                        </div>
                    </header>
                    
                    {/* Article content */}
                    <section>
                        <article>
                            { this.props.children }
                        </article>
                    </section>
                </section>
            </div>
        );
    }
}
