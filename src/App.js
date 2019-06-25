import React from 'react';
import axios from 'axios';
import PortfolioMenu from './components/PortfolioMenu';
import Portfolio from './components/Portfolio';
import './App.css';

class App extends React.Component {
    state = { 
        selectedOptions: null,
        portfolio: []
    };

    componentDidMount() {
        this.handleSelectChange = this.handleSelectChange.bind(this);

        axios
            .get('http://localhost:3000/portfolio-data.json')
            .then(result => {
                // Save array to state
                this.setState({
                    portfolio: result.data.portfolio
                });
            })
            .catch(error => {
                console.log(error)
        });
    }

    // Called when state is lifted from Select to App
    handleSelectChange = (selectedOptions) => {
        this.setState({ selectedOptions: selectedOptions });
    }

    render() {
        return (
            <div className="App">
                <PortfolioMenu 
                    handleSelectChange={this.handleSelectChange} 
                />
                <Portfolio 
                    selectedOptions={this.state.selectedOptions}
                    portfolio={this.state.portfolio} 
                />
            </div>
        );
    }
}

export default App;
