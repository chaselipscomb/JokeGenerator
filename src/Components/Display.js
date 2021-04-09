import React,{ useEffect, useState } from 'react'
import './styles.css'
import Categories from './Categories'
// import { getJoke } from './API'
const Display = (props) => {

const [delivery, setDelivery] = useState('')

const [styles, setStyles] = useState({
    setup: {
    display: 'none',
    backgroundColor: '#b025b9'
        
    },
    delivery: {
    display: 'none',
    backgroundColor: '#4487cd'
}
  })
  useEffect(() => {
    if(props.data.setup != '') setStyles({setup:{display:'block', backgroundColor: '#b025b9'}})

  },[props]);
    const updateJoke = () => {
        setStyles({delivery:{display:'none'}})
        props.getJoke()
        // setStyles({setup: {display:'block'}})
    }
    const TellMeClicked = () => {
        setDelivery(props.data.delivery)

        setStyles({delivery:{display:'block', backgroundColor: '#4487cd'},setup: {display:'block', backgroundColor: '#b025b9'}})    }

    // getJoke()
    return (
        <>
        <a><img id='logo' src="https://images.cooltext.com/5519296.png" width="806" height="115" alt="Joke Generator" /></a>
        <div className='textbox'>
            <Categories data={props.data} setData={props.setData} />
        <p className='setup' style={styles.setup}>{props.data.setup}</p>
        <p className='delivery' style={styles.delivery}>{delivery}</p>
        <div className='buttons'>
        <button className='button' id="blue" onClick={TellMeClicked}>Tell me</button>
        <button className='button' id="green" onClick={() => updateJoke()}>Another Joke</button>
        <button className='button' id="red" onClick={() => props.Balls()}>Add More Balls</button>
        </div>
        </div>
        </>
    )
}

export default Display