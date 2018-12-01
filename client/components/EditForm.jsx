import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editUser } from '../actions/EditForm' 

class EditForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: '',
            area: '',
            id: ''
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick(e) {
        e.preventDefault();
        const { name, age, area, id } = this.state;
        const data = {
            name,
            age,
            area,
            id
        }

        this.props.editUser(data);

    }

    render() {
        return (
                <form>
                    <h4>5. Edit form for our lovely users </h4>
                    <input type='text' onChange={this.handleChange} placeholder="name" name='name' />
                    <input type='text' onChange={this.handleChange} placeholder="age" name='age' />
                    <input type='text' onChange={this.handleChange} placeholder="area" name='area' />
                    <input type='text' onChange={this.handleChange} placeholder="id" name='id' />
                    <input type="submit" onClick={this.handleClick} value="Submit" />
                </form>
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
        editUser: data => {
            return dispatch(editUser(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditForm)