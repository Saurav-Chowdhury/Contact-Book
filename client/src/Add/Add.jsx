import { useState } from 'react';
import './Add.css';
import axios from 'axios';

function Add() {
    const [color,setColor]=useState('red')
    const [feedBack,setFeedback]=useState('');
    const [name,setName]=useState('');
    const [phone,setPhone]=useState('');

    //namehandler

    const nameChange=(e)=>{
        setName(e.target.value)
    }

    //phonehandler

    const phoneChange=(e)=>{
        setPhone(e.target.value)
    }

    //POST CALL

    const postCall= async (e)=>{
        console.log(name);
       e.preventDefault();
       const data=await fetch('/add',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                phone: phone
            })
        })
        let resp=await data.json()
        if(resp[0]=="Contact Added"){
            setColor("white")
        }
        setFeedback(resp[0])
    }
    return (
        <>
            <div className="form">
                <form>
                    <div className="form-content">
                        <input name='name' onChange={nameChange} value={name} type="text" placeholder='Name'/>
                        <input name='phone' onChange={phoneChange} value={phone} type="number" placeholder='Phone number'/><br/>
                    </div>
                    <button onClick={postCall} className='add'>Add</button><br/><br/>
                    <span style={{color: color,marginLeft: "8%"}}>{feedBack}</span>
                </form>
            </div>
        </>
    );
}

export default Add;