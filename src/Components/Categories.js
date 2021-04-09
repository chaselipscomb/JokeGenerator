import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { ButtonGroup, ToggleButton, radioValue, setRadioValue } from 'react-bootstrap'

const Categories = (props) => {

    const [styles, setStyles] = useState({
        colors: {
            backgroundColor: 'red'
        }
    })
    
    const [radioValue, setRadioValue] = useState('Any');
    
    const radios = [
        { name: 'Programming', value: 'Programming' },
        { name: 'Dark', value: 'Dark' },
        { name: 'Christmas', value: 'Christmas' },
        { name: 'Random', value: 'Any' },
    ];

    useEffect(() => {
        props.setData({category: radioValue})
      },[radioValue]);

    return (
        <ButtonGroup toggle>
        {radios.map((radio, idx) => (
          <ToggleButton
          className='button'
            key={idx}
            type="radio"
            variant="secondary"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    )
}

export default Categories