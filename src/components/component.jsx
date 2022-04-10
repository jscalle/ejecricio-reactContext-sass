import React, { useContext, useState } from 'react'
import AppContext from '../context/AppContext';
import { Button, TextField } from '@mui/material';
import Card from './Card'

export default function Component () {
    const [dead, setDead] = useState(0)
    const { Sum, Rest, Reset } = useContext(AppContext)
    return (
        <div className='App'>
            <div className='App-header'>
                <div className='Content'>
                    <div className="Content_Input">
                        <TextField
                            id='Textfield'
                            size='small'
                            label="¿Cuántos más mató John?"
                            variant='standard'
                            color='info'
                            focused
                            onChange={(e)=>setDead(e.target.value)}
                        />
                    </div>
                    <div className='Content__cont-btn'>
                        <Button size="small" variant='outlined' className='Content__cont-btn__btn' onClick={()=>Sum(dead)}>Sumar</Button>
                        <Button size="small" variant='outlined' className='Content__cont-btn__btn' onClick={()=>Rest()}>Restar</Button>
                        <Button size="small" variant='outlined' className='Content__cont-btn__btn' onClick={()=>Reset()}>Resetear</Button>
                    </div>
                    <Card />
                </div>
            </div>
        </div>
    )
}