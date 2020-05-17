import React, { Component } from 'react'
import{connect} from 'react-redux';
import MovieItem from '../MovieItem/MovieItem'
export class Home extends Component {
    render() {
        return (
            <div>
                {/* {JSON.stringify(this.props.reduxState.movies)} */}
                
                {this.props.reduxState.movies.map(item => <MovieItem key={item.id} item={item} />)}
              
            </div>
        )
    }
}

const reduxToProps = reduxState => ({reduxState});
export default connect(reduxToProps)(Home);

