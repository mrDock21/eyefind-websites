class AdCard extends React.Component {
    render() {
        return(
            <div className="col-md-3">
                <div className="card">
                    <img href="#" alt="" className="card-img-top" src={this.props.image} />
                </div>
            </div>
        );
    }
}