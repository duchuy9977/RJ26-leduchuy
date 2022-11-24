import React, { Component } from 'react';

interface IClothing{
    name : string;
    type : string;

}

interface IProps{
    clothProps: IClothing;
}

type State = {}

class ItemClothClass extends Component<IProps, State> {
    state = {}
    render() {
        return <div>
            <div>{this.props.clothProps.name}</div>
            <div>{this.props.clothProps.type}</div>
        </div>;
    }
}

export default ItemClothClass;