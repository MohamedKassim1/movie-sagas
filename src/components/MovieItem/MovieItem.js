import React, { Component } from 'react'
import{connect} from 'react-redux';
export class MovieItem extends Component {

    
    render() {
        
        return (
            <div>
                 {JSON.stringify(this.props.item.title)}
            </div>
        )
    }
}

const reduxToProps = reduxState => ({reduxState});

export default connect(reduxToProps)(MovieItem);
