import * as React from "react";
import { useState } from "react";

export const Section: React.StatelessComponent<any> = ({
    children,
    title
}) => {

    const [ isMounted, setIsMounted ] = useState(true);

    const handleToggle = () => setIsMounted(!isMounted);

    return (
        <div className="section">
            <div className="title">
                <button className="toggle-button" onClick={ handleToggle } > Toggle </button>
                { title }
            </div>

            {
                isMounted &&
                <div className="content">
                    { children }
                </div>
            }

        </div>
    )
}
