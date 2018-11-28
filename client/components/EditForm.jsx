import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import { EditData } from '../actions/EditData' 

class EditForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: '',
            area: ''
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
        const { name, age, area } = this.state;
        const data = {
            name: name,
            age: age,
            area: area
        }
        this.props.EditForm(data);

    }

    render() {
        return (
            <React.Fragment>
                <form>
                    <h4>5. Edit form for our lovely users </h4>
                    <input type='text' onChange={this.handleChange} name='name' />
                    <input type='text' onChange={this.handleChange} name='age' />
                    <input type='text' onChange={this.handleChange} name='area' />
                    <input type="submit" value="Submit" />
                </form>


            </React.Fragment>

        )
    }


}

export default EditForm