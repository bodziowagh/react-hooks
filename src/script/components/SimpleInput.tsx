import * as React from "react";
import { useState, ChangeEvent } from "react";

export const SimpleInput = () => {

    const [ value, setValue ] = useState("");

    function handleChange(event: ChangeEvent<any>) {
        const newValue = event.target.value;

        console.log(`Updating value from \"${ value }\" to \"${ newValue }\"`);

        setValue(newValue);
    }

    return (
        <input value={ value } onChange={ handleChange } />
    );
}
