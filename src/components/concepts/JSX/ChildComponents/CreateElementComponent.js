import React from "react";

const CreateElementComponent = () => {
    return(
        React.createElement('div', {style: {border: '2px solid black', borderRadius: '10px', padding: '10px', textAlign: 'center'}}),
        React.createElement('h1', null, 'Create Element Component'),
        React.createElement('p', null, 'This functional component was constructed with the React.CreateElement() method in the return statement.'),
        React.createElement('img', {src: 'https://i.morioh.com/200626/3c53255f.jpg', style: {height: '230px', width: 'auto'}})
    );
};

export default CreateElementComponent;