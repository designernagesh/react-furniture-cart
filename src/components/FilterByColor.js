import React from 'react'

function FilterByColor() {
    return (
        <div className='filter'>
            <h3 className='title'>Color</h3>
            <ul>
                <li>
                    <input type='radio' id='neutralColors' name='colors' />
                    <label htmlFor='neutralColors'>Neutral Colors</label>
                </li>
                <li>
                    <input type='radio' id='woodTones' name='colors' />
                    <label htmlFor='woodTones'>Wood Tones</label>
                </li>
                <li>
                    <input type='radio' id='boldColors' name='colors' />
                    <label htmlFor='boldColors'>Bold Accent Colors</label>
                </li>
            </ul>
        </div>
    )
}

export default FilterByColor
