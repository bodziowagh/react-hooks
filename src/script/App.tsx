import React from "react";
import { SimpleInput } from "./components/SimpleInput";
import { Section } from "./components/Section";
import { UseEffectInput } from "./components/UseEffectInput";

export const App = () => {
    return (
        <>
            <Section title="Simple input">
                <SimpleInput />
            </Section>
            <Section title="Effect input">
                <UseEffectInput />
            </Section>
        </>
    );
}
