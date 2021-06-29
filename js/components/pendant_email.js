'use strict';

class PendantEmail extends React.Component {
    render() {
        return (
            <div className="split email-item">

                <div className="email-status-icon">
                    <img src={ this.getStatusImg() } 
                            alt="Status icon"
                            className="w-50 h-50"/>
                </div>
                <div className="email-data">
                    <div className="email-sender p-2">
                        <p  className="mb-0" 
                            onClick={ () => this.props.onClick() }>
                            { this.props.email.sender }
                        </p>
                    </div>
                    <div className="email-subject p-2">
                        <p className="mb-0">
                            { this.props.email.subject }
                        </p>
                    </div>
                </div>
                
            </div>
        );
    }

    getStatusImg() {
        var imgUrl = "./../img/yellow-circle.png";

        if (this.props.email.viewed)
            imgUrl = "./../img/green-arrow.png";

        return imgUrl;
    }
}