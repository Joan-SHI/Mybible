import React, { Component } from 'react';
import { connect } from 'react-redux';
import {deleteUser} from '../actions/deleteFormAction'

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
       const { name, age, area} =this.state;
       const data = {
           name: name,
           age: age,
           area: area
       }

       this.props.deleteUser(data);
    }

    render() {
        return (
            <div>

                <h4>4. Delete user by id</h4>

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



