import React from 'react';
import Select from 'react-select';

const options = [
    { value: 'responsive', label: 'Responsive' },
    { value: 'wordpress', label: 'WordPress' },
    { value: 'drupal', label: 'Drupal' },
    { value: 'microsite', label: 'Microsite' },
    { value: 'react', label: 'React' }
];

class PortfolioMenu extends React.Component {
    state = {
        selectedOptions: null
    };

    componentDidMount() {
        // Bind function to handle changes from Select, to handle lifting state
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = selectedOptions => {
        this.setState({ selectedOptions });
        this.props.handleSelectChange(selectedOptions);
    };

    render() {
        const { selectedOptions } = this.state;

        return (
            <div className="portfolioSelect">
                <Select
                    value={selectedOptions}
                    onChange={this.handleChange}
                    options={options}
                    isMulti
                />
            </div>
        );
    }
}

export default PortfolioMenu;