import { useEffect, useState } from "react";
import './List.css';

function List() {
    const [search,setSearch]=useState();
    const [data,setData]=useState([]);
    const handleChange=(e)=>{
        setSearch(e.target.value);
    }
    const initSearch=async()=>{
        console.log("Search")
        const ser=await fetch('/getSearch/'+search);
        const item=await ser.json();
        setData(item);
    }
    const getData=async()=>{
        const resp=await fetch('/getList');
        const list=await resp.json();
        setData(list);
    }
    useEffect(()=>{
        getloader();
        getData();
    },[])

    const getloader=()=>{
        setTimeout(()=>{
            document.getElementById("loading").style.display="none";
            document.getElementById("loading").style.transition="all 0.7s";
        },1700)
    }
    return ( <>

            <div id="loading">
            
            </div>

        <div className="top">
            <h3>There are currently  {(data.length==0)?<span>No Contacts!!</span>:data.length+" Contacts"}</h3>
        </div>
        <div className="searchBar">
            <input type="text" value={search} placeholder="search contact" onChange={handleChange} />  <button onClick={initSearch} className="btn btn-secondary">Search</button>
        </div>
        <div className="userlist">
            {
                data.map((item)=>{
                    return(
                        <div className="card">
                            
                            <div class="card-body">
                                <h5 class="card-title">Name:  {item.name}</h5><br/>
                                <p class="card-text">Phone:  {item.phone}</p>
                                <button id="my-btn" class="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </> );
}

export default List;