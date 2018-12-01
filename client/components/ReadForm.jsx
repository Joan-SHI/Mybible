import React, { Component } from 'react';
import { connect } from 'react-redux'

//import action 
import {getUser} from '../actions/readFormActions' 
import {CreateData} from '../actions/CreateData'



class ReadForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            age:'',
            area:'',
            id: ''
        }
this.handleChange = this.handleChange.bind(this)
this.handleSubmit = this.handleSubmit.bind(this)
this.handleGetUser = this.handleGetUser.bind(this)
    }


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleGetUser(event){
        console.log(event.target.value);
        
        event.preventDefault()
        this.props.getUser(Number(this.state.id))
    }

    handleSubmit(event) {
        event.preventDefault();
        //send the this.state contents to your action
       
        //action function
        const { name, age, area } = this.state;
        const data = {
            name: name,
            age: age,
            area: area

        }
        this.props.CreateData(data);

        setTimeout(() => {
            this.props.getUser(this.props.state.createdData[0])

        }, 400);

    }

    render() {
        return (
            <div>

                <h4>2.Create new user again, really???</h4>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" name="name" />
                    <input onChange={this.handleChange} type="number" name="age" />
                    <input onChange={this.handleChange} type="text" name="area" />
                    <input type="submit" value="Submit" />
                </form>

                {this.props.state.getUser.length > 0 && 
                <p>ID: {this.props.state.getUser[0].id}, name: {this.props.state.getUser[0].name}, age: {this.props.state.getUser[0].age}, area: {this.props.state.getUser[0].area}</p>}
                <h4>3.find user by id  :)</h4>
                        <form onSubmit={this.handleGetUser}>
                            <input onChange={this.handleChange} name="id" placeholder="enter ID here" type="number"/>
                            <input type="submit" value="Submit"/>
                        </form>
                       


                        

            </div>

        )
    }
}
// connect me to redux

function mapStateToProps(state) {
    return {
        state: state
    }
}

function mapDispatchToProps(dispatch){
    return {
        getUser: (id) => {
            dispatch(getUser(id))
        },
        CreateData: data => {
            return dispatch(CreateData(data));
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReadForm)