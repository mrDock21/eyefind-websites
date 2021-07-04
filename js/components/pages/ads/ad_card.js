class AdCard extends React.Component {
    render() {
        return(
            <div className={this.props.classAttributes}>
                <div className="card">
                    <a href={this.props.page ? this.props.page : "#"}>
                        <img href="#" alt="" className="card-img-top" src={this.props.image} />
                    </a>
                </div>
            </div>
        );
    }
}