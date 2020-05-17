import React, { Component } from 'react'
import { connect } from 'react-redux';
export class Edit extends Component {
    state = {
        id: this.props.reduxState.getDetails.id,
        title: this.props.reduxState.getDetails.title,
        description: this.props.reduxState.getDetails.description,
        poster: this.props.reduxState.getDetails.poster
    }
    handleChangeTitle = (event) => {
        // console.log(event.target.value);
        
        this.setState({
            title: event.target.value
        })
    }

    handleChangeDes = (event) => {
        this.setState({
            description: event.target.value
        })
    }
    handleSubmit = () => {
        this.props.dispatch({
            type: 'EDIT_DETAILS',
            payload: this.state

        })
    }
    render() {
        
        return (
            <div>
                <p>{this.props.reduxState.getDetails.title}</p>
                 <p><img src={this.props.reduxState.getDetails.poster} /></p>
                <input type='text' placeholder='title' onChange={this.handleChangeTitle}/>
                <input type='text' placeholder='description' onChange={this.handleChangeDes}/>
                <button type='submit' onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

const reduxToProps = reduxState => ({ reduxState });

export default connect(reduxToProps)(Edit);
