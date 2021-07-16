'use strict';

class FormatText extends React.Component {
    render() {
        const text = this.props.text;
        const delimiter = this.props.delimiter;
        const strings = text.split(delimiter);
        const className = this.props.className;

        const rendereredText = strings.map((str, i) => 
            <p key={i} className={className}>{ str }</p>
        );

        //console.log(rendereredText);

        return rendereredText;
    }
}