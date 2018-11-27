import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import {DeleteData} from '../actions/DeleteData'

class DeleteForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: '',
            area: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)

    }
    //handleSubmit
    handleSubmit(e) {
        e.preventDefault();
        

    }

    render() {
        return (
            <div>

                <h4>4. Delete user by id</h4>

                <form onSubmit={this.handleDelete}>
                    <input onChange={this.handleChange} name="id" placeholder="enter ID here" type="number" />
                    <input type="submit" value="Submit" />
                </form>
            </div>

        )
    }
}
export default DeleteForm



