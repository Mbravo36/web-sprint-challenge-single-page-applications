import React from 'react';

export default function PizzaForm(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors
    } = props
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
        }
    const onChange = evt => {
        const {name, value, checked, type} = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change (name, valueToUse)
    }
return (

<form className='pizza-form' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Create your Order!</h2>

        <button disabled={disabled}>submit</button>

        <div className='errors'>
          <div>{errors.name}</div>
          <div>{errors.size}</div>
        </div>
      

        {/* ////////// TEXT INPUTS ////////// */}
<label>name
    <input
        id = 'name-input'
        value={values.name}
        onChange={onChange}
        name='name'
        type='text'
    />
</label>

<label>special
    <input
        id = 'special-text'
        value={values.special}
        onChange={onChange}
        name='special'
        type='text'
    />
</label>

        {/* ////////// DROPDOWN ////////// */}
<label>size
    <select
        id = 'size-input'
        onChange={onChange}
        value={values.size}
        name='size'
>
    <option value=''>- Select an option -</option>
    <option value='small'>Small</option>
    <option value='medium'>Medium</option>
    <option value='large'>Large</option>
    </select>
</label>

        {/* ////////// CHECKBOXES ////////// */}
<label>pepperoni
    <input
        id = 'pepperoni-check'
        type='checkbox'
        name='pepperoni'
        checked={values.pepperoni}
        onChange={onChange}
    />
</label>

<label>ham
    <input
        id = 'ham-check'
        type='checkbox'
        name='ham'
        checked={values.ham}
        onChange={onChange}
    />
</label>

<label>meatballs
    <input
        id = 'meatballs-check'
        type='checkbox'
        name='meatballs'
        checked={values.meatballs}
        onChange={onChange}
    />
</label>

<label>mushrooms
    <input
        id = 'mushrooms-check'
        type='checkbox'
        name='mushrooms'
        checked={values.mushrooms}
        onChange={onChange}
    />
            </label>
        </div>
    </form>
    )
}
