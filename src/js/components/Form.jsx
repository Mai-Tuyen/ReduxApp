import React, {Component} from 'react';
import {connect} from 'react-redux';
import uuidv1 from "uuid";
import { addArticle } from './../actions/index';

function mapDispatchToProps (dispathch) {
    return {
        addArticle: article => dispathch(addArticle(article)),
    };
};


class ConnectedForm extends Component {
    constructor() {
        super();
        this.state = {
            titlle:""
        };
    }

    handleChangeInput = (e) => {
        this.setState({
            ...this.state,
            title: e.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        const {title} = this.state;
        const id = uuidv1();
        this.props.addArticle({id,title});
        this.setState({
            title: ""
        });
    }

    
    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <div className = "form-group">
                    <label>Title</label>
                    <input 
                        type="text"
                        className = "form-control"
                        id = "title"
                        value = {this.state.title}
                        onChange = {this.handleChangeInput}
                    />
                </div>
                <button type="submit" className = "btn btn-success btn-lg">
                    SAVE
                </button>
            </form>
        );
    }
}

const Form = connect (null,mapDispatchToProps)(ConnectedForm);
export default Form;
