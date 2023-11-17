import React, {Component} from "react";
import NytResults from "./NytResults";

const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = 'qOrCZekYissHAqgL6czGFGwUp28RNMHS';

class NytApp extends Component{
    constructor(){
        super('')
        this.state = {
            search: '',
            startDate: '',
            endDate: '',
            pageNumber: 0,
            results: []
        };
    }

    fetchResults = () => {
        let url = `${baseURL}?api-key=${key}&page=${this.state.pageNumber}&q=${this.state.search}`;

        url = this.state.startDate ? url + `&begin_date=${this.state.startDate}` : url;
        url = this.state.endDate ? url + `&end_date=${this.state.endDate}` : url;

        fetch(url)
        .then(res => res.json())
        .then(data => this.setState({results: data.response.docs}))
        .catch(err => console.log(err));
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ pageNumber: 0 });
        this.fetchResults();

        // The setTimeout function gives the state variable time to set, so we can console.log the value the line after setting it.
        setTimeout(() => {
            console.log(this.state.results)
        }, 1000)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: [event.target.value]
        });
    }

    changePageNumber = (event, direction) => {
        event.preventDefault()
        if (direction === 'down') {
            if (this.state.pageNumber > 0) {
                this.setState({ pageNumber: this.state.pageNumber - 1 })
                this.fetchResults();
            }
        }
        if (direction === 'up') {
            this.setState({ pageNumber: this.state.pageNumber + 1 })
            this.fetchResults();
        }
    }
    
    render(){
        return(
            <div className="main">
                <div className="mainDiv">
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        <span>Enter a single search term (required) : </span>
                        <input
                            type="text"
                            name="search"
                            onChange={(e) => this.handleChange(e)}
                            required
                        />
                        <br/>
                        <span>Enter a start date: </span>
                        <input
                            type="date"
                            name="startDate"
                            pattern="[0-9]{8}"
                            onChange={(e) => this.handleChange(e)}
                        />

                        <br/>
                        <span>Enter an end date: </span>
                        <input
                            type="date"
                            name="endDate"
                            pattern="[0-9]{8}"
                            onChange={(e) => this.handleChange(e)}
                        />
                        <br/>
                        <button className="submit">Submit search</button>
                    </form>
                    {
                        this.state.results.length > 0 ? <NytResults results={this.state.results} 
                        changePage={this.changePageNumber}
                        /> : null
                    }
                </div>
            </div>
        );
    }
}

export default NytApp;