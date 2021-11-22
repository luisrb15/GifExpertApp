import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(categories => [inputValue, ...categories]);
            //de esta manera uso un callback y no tengo que pedir categories por parametro, modifico el estado anterior.
            setInputValue('');
        }
    }

    return (
        <>
            <form onSubmit = { handleSubmit } >
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>

        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
