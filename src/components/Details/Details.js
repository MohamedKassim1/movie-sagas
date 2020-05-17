import React, { Component } from 'react'
import { connect } from 'react-redux';
export class Details extends Component {
    //  componentDidMount() {
    //     this.props.dispatch({type: 'SET_GENRES'})
    //   }
    backToList = () =>{
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                {/* <h3>In Details</h3> */}
                <button onClick={this.backToList}>Back to List</button>
                <button>Edit</button>
                {/* {JSON.stringify(this.props.reduxState.getDetails)} */}
                <p><img src={this.props.reduxState.getDetails.poster} /></p>
                <p>{this.props.reduxState.getDetails.description}</p>
                {this.props.reduxState.genres.map(item => <li>{item.name}</li>)}
            </div>
        )
    }
}

const reduxToProps = reduxState => ({ reduxState });

export default connect(reduxToProps)(Details);
