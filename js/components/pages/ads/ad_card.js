class AdCard extends React.Component {
    render() {
        return(
            <div className={this.props.classAttributes}>
                <div className="card gta-ad-card">
                    <a href={this.props.page.route}>
                        <img alt={this.props.page.name} className="card-img-top" src={this.props.page.image} />
                    </a>
                </div>
            </div>
        );
    }
}