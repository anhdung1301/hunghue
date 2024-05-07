import React from 'react';
import { Button } from 'react-admin';
import { useNavigate } from 'react-router';


const BackButton = (useNavigate) => {
    // const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <Button label="Back" onClick={handleBack} />
    );
};

export default BackButton;