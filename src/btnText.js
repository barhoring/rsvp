import React from 'react';
import PropTypes from 'prop-types';

const btnText = props => {
    if(props.isEditting)
        return (<button id="btnEditSave" onClick={props.handleToggleEditting} >save</button>);
    return (<button id="btnEditSave" onClick={props.handleToggleEditting} >edit</button>);
}


btnText.propTypes = {
    isEditting: PropTypes.bool.isRequired
};