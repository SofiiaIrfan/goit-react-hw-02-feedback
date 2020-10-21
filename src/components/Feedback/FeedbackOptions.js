import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

import style from './Feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div className={style.button_container}>
        {options.map(nameBtn => (
            <Button
                key={nameBtn}
                nameBtn={nameBtn}
                onLeaveFeedback={onLeaveFeedback}
            />
        ))}
    </div>
);

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;