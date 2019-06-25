import React from 'react';
import './Portfolio.css';

class Portfolio extends React.Component {
    render() {
        console.log(this.props.selectedOptions);
        return (
            <div className="portfolio">
                <p>Portfolio</p>
            </div>
        )
    }
}

export default Portfolio;