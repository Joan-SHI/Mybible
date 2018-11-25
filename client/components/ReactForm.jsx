
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {CreateData} from '../actions/CreateData'

// const ReactForm = ({name,age,area}) =>(
//     <div>
// <form>
//     <input type='text' name='name' />
//     <input type='text' name='age' />
//     <input type='text' area='New Zealand' />

// </form>
//  </div>
// )

class ReactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            area: ''
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(e) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }

    handleClick(e) {
        e.preventDefault();
        const { name, age, area } = this.state;
        const data = {
            name: name,
            age: age,
            area: area

        }
        this.props.CreateData(data);


    }

    render() {
        return (
            <React.Fragment>
                <form>
                    <input type='text' onChange={this.handleChange} name='name' />
                    <input type='text' onChange={this.handleChange} name='age' />
                    <input type='text' onChange={this.handleChange} name='area' />

                </form>
                <button onClick={this.handleClick}>
                    
                  submit
                
                
                </button>

                

            </React.Fragment>


        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        CreateData: data => {
            return dispatch(CreateData(data));
        }
    };
};

export default connect(null, mapDispatchToProps)(ReactForm)
