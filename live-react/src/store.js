import createStore from "unistore";
import axios from "axios";

const baseUrl = "https://api-todofancy.herokuapp.com/api/movies";

const initialState = {
    api_key: "",
    email: "",
    password: "",
    full_name: "",
    username: "",
    is_login: false,
    isLoading: true ,
    category: 'romance',
    listMovie: [],
};

export const store = createStore(initialState);

export const actions = store => ({
    // ----------------------------------------------------------
    categoryMovies: async (state, event) => {
        // const category = this.props.match.params.category;
        // const self = this;
        await axios
            .get(`${baseUrl}`)
            .then(function(response){
                store.setState({listMovie: response.data.movies, isLoading: false});
                console.log(response.data, "dataaaaaaaaaaaaaaaa");
            })
            .catch(function(error){
                store.setState({isLoading: false});
            });
            
    }
});
