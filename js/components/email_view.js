'use strict';

class EmailView extends React.Component {
    render() {
        return (
            //  Email view
            <section className="split mx-1 mx-md-5 d-flex align-items-start flex-column flex-md-row" 
                     id="email-view">

                <div className="m-2 text-bold">
                    <FormatText text={ this.props.text } delimiter={'\n'}/>
                </div>
                <div className="px-2">
                    <div>
                        <button className="btn w-100 h-100">Respond</button> 
                    </div>
                    <div>
                        <button className="btn w-100 h-100">Delete</button> 
                    </div>
                </div>
                
            </section>
        );
    }
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        console.log(error);
    }
}