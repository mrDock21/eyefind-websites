'use strict';

/** Reads SVG file and inserts it into the div */
class SVGFile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            svgContents: null
        };

        fetch(this.props.svgPath)
            .then(r => r.text())
            .then((text) => this.onSvgResponse(text))
            .catch(console.error.bind(console));
    }
    render() {
        return (
            <div id={this.props.svgId} 
                className={this.props.classes}
                onAnimationEnd={() => this.props.onAnimEnd()}
            >
                {/** Data inserted at response callback */}
            </div>
        );
    }

    onSvgResponse(text) {
        const state = {...this.state};
        var dom = document.getElementById(this.props.svgId);

        dom.innerHTML = state.svgContents = text;

        this.setState(state);
    }
}