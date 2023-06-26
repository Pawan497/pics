import React from "react";

class SearchBar extends React.Component {
    state = { term: ""};
    // onInputChange(event){
    //     console.log(event.target.value);
    // }

    onFormSubmit(event){
        event.preventDefault();

        this.props.onSubmitProp(this.state.term)
        // console.log(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={(event) => this.onFormSubmit(event)} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        {/* <input type = "text" onChange={this.onInputChange}/> */}
                        {/* <input type = "text" onChange={(event) => {console.log(event.target.value)}}/> */}
                        {/* <input type = "text" onChange={(e) => {console.log(e.target.value)}}/> */}
                        <input type="text" 
                            value={this.state.term} 
                            onChange={(e) => { this.setState({ term: e.target.value }) }} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;