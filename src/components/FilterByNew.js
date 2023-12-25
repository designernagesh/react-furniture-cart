import React from 'react'

function FilterByNew() {
    return (
        <div className='filter'>
            <h3 className='title'>New Arrivals</h3>
            <ul>
                <li>
                    <input type='radio' id='thirtyColors' name='days' />
                    <label htmlFor='thirtyColors'>Last 30 days</label>
                </li>
                <li>
                    <input type='radio' id='ninetyColors' name='days' />
                    <label htmlFor='ninetyColors'>Last 90 days</label>
                </li>
            </ul>
        </div>
    )
}

export default FilterByNew
