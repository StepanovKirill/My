import React from 'react';
import PropTypes from 'prop-types';

const Button = ({onClick, children}) => {
    // получаем пропсами функцию, которая вызывается при клике
    // и дочерний компонент, который будет отрисован на кнопке
    const handleClick = (evt) => {
        if (typeof onClick !== 'function') {
            return;
        }
        onClick(evt);
    };

    return (
        <div>
            <button onClick={handleClick}>
                {children}
            </button>
        </div>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
};

export default Button;
