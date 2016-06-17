import { Component } from 'react';
declare namespace __involvedUi {
    type StringNumeric = string | number;

    interface IInputProps {
        className: string;
        value: StringNumeric;
    }

    var Input: Component<IInputProps, any>
}
