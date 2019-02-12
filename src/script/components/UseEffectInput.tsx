import * as React from "react";
import { useState, useEffect, ChangeEvent } from "react";

export const UseEffectInput = () => {

    const [ value, setValue ] = useState("");

    const handleChange = ({ target: { value: newValue } }: ChangeEvent<any>) => setValue(newValue);

    // When no arguments are provided, effect fires on every occasion (mount, render etc)
    useEffect(() => {
        console.log("Effect (no arguments) fired");

        // Unmount callbacks run in an order of declaration - in this configuration, "one" runs before "two"
        return () => console.log("Unmount number one");
    });

    // onComponentDIDMount equivalent (not onComponentWILLMount, runs after the component has rendered for the first time)
    useEffect(() => {
        console.log("Effect (empty array []) fired");

        return () => console.log("Unmount number two");
    }, []);

    console.log("Render");

    return (
        <input value={ value } onChange={ handleChange } />
    );
}
