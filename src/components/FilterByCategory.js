
function FilterByCategory({ filterByCategory }) {

  const categoryHandler = (e) => {
    filterByCategory(e.target.name);
  }

  return (
    <div className='filter category-filter'>
      <h3 className='title'>Category</h3>
      <ul>
        <li>
          <label>
            <input type='checkbox' name="barstool" onChange={ categoryHandler } />
            Barstool
          </label>
        </li>
        <li>
          <label>
            <input type='checkbox' name="Chair Pillow" onChange={ categoryHandler } />
            Chair Pillow
          </label>
        </li>
        
      </ul>
    </div>
  )
}

export default FilterByCategory


// const CategoryInput = () => {
  //   return ( 
  //     <li>
  //         <label>
  //           <input type='checkbox' id="barstool" onChange={ categoryHandler } />
  //           Barstool
  //         </label>
  //       </li>
  //   )
  // }

{/* <li>
          <label>
            <input type='checkbox' />
            Chair Pillow
          </label>
        </li>
        <li>
          <label>
            <input type='checkbox' />
            Cushion Chair
          </label>
        </li>
        <li>
          <label>
            <input type='checkbox' />
            Folding Chair
          </label>
        </li>
        <li>
          <label>
            <input type='checkbox' />
            Office Chair
          </label>
        </li>
        <li>
          <label>
            <input type='checkbox' />
            Parsons Chair
          </label>
        </li>
        <li>
          <label>
            <input type='checkbox' />
            Task Chair
          </label>
        </li>
        <li>
          <label>
            <input type='checkbox' />
            Wooden Chair
          </label>
        </li> */}