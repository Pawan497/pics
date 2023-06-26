import React from "react";
import unsplash from "../API/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component{

    state = { images: [] };

    onSearchSubmit = async (term) => {
        const response = await unsplash.get("https://api.unsplash.com/search/photos",{
            params: {query: term},
        });

        // console.log(this);
        this.setState({images: response.data.results});
        // console.log(response.data.results);
    }

    // onSearchSubmit(term){
    //     axios.get("https://api.unsplash.com/search/photos",{
    //         params: {query: term},
    //         headers: {
    //             Authorization: "Client-ID 4q1VxbsJa-mfjIVujuSVwUmRJDk8QxLvRI2VMgZJVjE"
    //         }
    //     }).then((response)=> {
    //         console.log(response.data.results);
    //     });
        
    //     console.log(term);
    // }

    render(){
        return (
            <div className="ui container" style={{marginTop: "10px"}}>
                <SearchBar
                onSubmitProp={this.onSearchSubmit}
                />
                <ImageList 
                images={this.state.images}/>
            </div>
        );
    }

}

export default App;