import React, { Component } from 'react';
import logo from './video.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './MovieCollection.css';

class MovieCollection extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // best place to do network calls for something simple like this is in the componentDidMount
    componentDidMount() {
        let api_get_list = 'https://api.themoviedb.org/4/list/26738?page=1&api_key=c55e6775d18b112814741a1e152df039';

        fetch(api_get_list)
        .then(d => d.json())
        .then(d => {
            console.log(d);
            this.setState({ movieList: d.results });
        });
    }

    render() {
        if(!this.state.movieList) {
            return <p>loading...</p>
        } else {
            let api_base_img_url = 'https://image.tmdb.org/t/p/w500/';

            let movieList = this.state.movieList.map((movie, i)=>
                <div key={i} className="col-xs-12 col-sm-6 col-lg-4 movieContainer">
                    <div className="row">
                        <div className="col-xs-6">
                            <img src={api_base_img_url + movie.poster_path} className="img-width" alt="" />
                        </div>
                        <div className="col-xs-6 text-left">
                            <span><strong>title:</strong> { movie.title }</span>
                            <span><strong>release date:</strong> { movie.release_date }</span>
                            <p><strong>overview:</strong> { movie.overview }</p>
                        </div>
                    </div>
                </div>
            );

            return (
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h2>Movie Collection</h2>
                    </div>

                    {movieList}
                </div>
            );
        }
    }
}

export default MovieCollection;
