import React, { Component } from 'react'
import { connect } from 'react-redux';
export class MovieItem extends Component {
    // componentDidMount() {
    //     this.props.dispatch({type: 'SET_GENRES'})
    //   }
    handleClick = () => {
        // console.log('clicked', this.props.item.id);
        // console.log('in item', this.props)
        this.props.dispatch({type: 'FETCH_GENRES', payload: this.props.item.id});
        this.props.dispatch({type: 'FETCH_DETAILS', payload: this.props.item});
        this.props.history.push('/details')
    }

    render() {

        return (
            <div className="movieDisplay">
                {/* {JSON.stringify(this.props.item.title)} */}
                <span>{this.props.item.title}</span>
                <p onClick={this.handleClick}>{<img src={this.props.item.poster} />}</p>
                <span>{this.props.item.description}</span>
            </div>
        )
    }
}

const reduxToProps = reduxState => ({ reduxState });

export default connect(reduxToProps)(MovieItem);
