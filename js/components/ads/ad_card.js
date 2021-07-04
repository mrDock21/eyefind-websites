class AdCard extends React.Component {
    render() {
        return(
            <div className={this.props.classAttributes}>
                <div className="card">
                    <img href="#" alt="" className="card-img-top" src={this.props.image} />
                </div>
            </div>
        );
    }
}