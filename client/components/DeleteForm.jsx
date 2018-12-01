import React, { Component } from 'react';
import { connect } from 'react-redux';
import {deleteUser} from '../actions/deleteFormAction'

class DeleteForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: ''    
            
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }
//add handleChange
handleChange(e) {
    this.setState({
        [e.target.name]: e.target.value
    })
}

    //handleSubmit
    handleSubmit(e) {
        e.preventDefault();
       const { id} =this.state;
       

       this.props.deleteUser(id)
       
       
    }

    render() {
        return (
            <div>

                <h4>4. Delete user by id</h4>
<p>{this.props.message}</p>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} name="id" placeholder="enter ID here" type="number" />
                    <input type="submit" value="Submit" />
                </form>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        message: state.deleteUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteUser: data => {
            return dispatch(deleteUser(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteForm)



