import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function NotPermitted() {
    

    return (
        <div className="App">
            <header className="App-header">
                <span>You are not permitted to view this page.</span> 
                <span>Please sign in as a user with appropriate permissions.</span>
            </header>

        </div>
    );
}

export default NotPermitted;
