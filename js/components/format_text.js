'use strict';

class FormatText extends React.Component {
    render() {
        const text = this.props.text;
        const delimiter = this.props.delimiter;
        const strings = text.split(delimiter);

        const rendereredText = strings.map((str, i) => 
            <p key={i}>{ str }</p>
        );

        //console.log(rendereredText);

        return rendereredText;
    }
}