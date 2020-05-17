import React, { Component } from 'react'
import { connect } from 'react-redux';
export class MovieItem extends Component {


    render() {

        return (
            <div className="movieDisplay">
                {/* {JSON.stringify(this.props.item.title)} */}
                    <span>{this.props.item.title}</span>
                    <p>{<img src={this.props.item.poster}/>}</p>
                    <span>{this.props.item.description}</span>
                
            </div>
        )
    }
}

const reduxToProps = reduxState => ({ reduxState });

export default connect(reduxToProps)(MovieItem);
