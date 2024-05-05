import React, { useState } from 'react'

function Todo() {
    const [acitivity,setacitivity] = useState("");
    const [listdata,setlistdata] = useState([]);

    function addacitivity () {
        if(acitivity === ""){

        }else{
            setlistdata((listdata)=>{
                const updatelist = [...listdata,acitivity];
                setacitivity("");
                return updatelist;
            })
        }
    }
    function rembut(i){
        const updata = listdata.filter((elem,id) =>{
            return i!=id;
        })
        setlistdata(updata);
    }
    function remall(){
        setlistdata('');
    }
  return (
    <>
    <div className='container'>
        <div className='header'>Todo List</div>
        <input type='text' placeholder='Acitivity' value={acitivity} onChange={(e) =>setacitivity(e.target.value)}/>
        <button onClick={addacitivity}>Add</button>
        {listdata.length>0 ?<p className='List-heading'>Here is your List </p>:<p className='List-heading'>Create Your List</p>}
        {listdata !=[] && listdata.map((data,i) =>{
            return (
                <>
                <p key={i}>
                  <br/>
                    <div className='listData'>{data}</div>
                    <button className='btn-position' onClick={() =>rembut(i)}>Remove</button>
                </p>
                </>
                
            )
        })}
        {listdata.length>0 && <button onClick={remall}>Remove All</button>}
        
        
        </div>
    </>
  )
}

export default Todo
