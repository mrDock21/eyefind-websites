'use strict';

class EmailHeader extends React.Component {
    render() {
        return (
            // Email header
            <nav className="navbar bg-primary split px-2">
                <a  href="#" 
                    className="navbar-brand w-auto">
                    <img height="60" 
                         alt="Eyefind logo" 
                         src="https://vignette.wikia.nocookie.net/gtawiki/images/b/bc/Eyefind.info-GTA4-logo.PNG/revision/latest?cb=20100527053722"/>
                </a>
                <div className="text-large">
                    <div className="split">
                        <p className="w-25 text-bold text-dark-blue">
                            FROM:
                        </p>
                        <p className="-w-auto text-white">
                            { ((this.props.sender) ? this.props.sender : "Nobody") }
                        </p>
                    </div>
                    <div className="split">
                        <p className="w-25 text-bold text-dark-blue">SUBJECT:</p>
                        <p className="w-auto text-white">
                            { ((this.props.subject) ? this.props.subject : "None") }
                        </p>
                    </div>
                </div>
            </nav>
        );
    }
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        console.log(error);
    }
}