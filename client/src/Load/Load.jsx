import "./Load.css";

function Load() {
    const getloader=()=>{
        setTimeout(()=>{
            document.getElementById("loading").style.display="none";
            document.getElementById("loading").style.transition="all 0.7s";
        },2000)
    }
    window.addEventListener("load",getloader);
    
    return ( <>
        <div id="loading">
            
        </div>
    </> );
}

export default Load;