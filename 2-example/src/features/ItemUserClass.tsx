import React, { Component } from 'react';

interface IUser{
    name : string;
    age : number;
}

interface IProps{
    userProps: IUser;
}

type State = {}

class ItemUserClass extends Component<IProps, State> {
    state = {}
    render() {
        return <div>
            <div>{this.props.userProps.name}</div>
            <div>{this.props.userProps.age}</div>
        </div>;
    }
}

export default ItemUserClass;