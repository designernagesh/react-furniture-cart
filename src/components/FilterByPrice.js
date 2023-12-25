import React from 'react'

function FilterByPrice() {
    return (
        <div className='filter'>
            <h3 className='title'>Price</h3>
            <ul>
                <li>
                    <input type='radio' id='thousand' name='price' />
                    <label htmlFor='thousand'>Under ₹1,000</label>
                </li>
                <li>
                    <input type='radio' id='twoThousand' name='price' />
                    <label htmlFor='twoThousand'>₹1,000 - ₹2,000</label>
                </li>
                <li>
                    <input type='radio' id='threeThousand' name='price' />
                    <label htmlFor='threeThousand'>₹2,000 - ₹3,500</label>
                </li>
                <li>
                    <input type='radio' id='overThreeThousand' name='price' />
                    <label htmlFor='overThreeThousand'>Over ₹3,500</label>
                </li>
            </ul>
        </div>
    )
}

export default FilterByPrice