import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Score from "../contexts/Context";

function Home () {
    const { contents } = useContext(Score);
    const [ ax, setAx ] = useState(document.getElementsByClassName("delete-checkbox"));
    const { array, setArray } = useContext(Score);

    useEffect(() => {
        setAx(document.getElementsByClassName("delete-checkbox"));
        if (ax.length > 0){
            setArray(Array(ax.length).fill('false'));
            for (let i=0; i<ax.length;i++){
                ax[i].onclick = function() {dos();};
            }
        }
    }, [ax])
    
    const dos = () => {    
        var sq = [...array];
        for (let i=0;i < ax.length;i++){
            if(ax[i].checked === true){
                sq[i] = 'true';
                setArray(sq);
            } else if(ax[i].checked === false){
                sq[i] = 'false';
                setArray(sq);
            }
        }     
    }

    const handleClick = () => {  
        for (let i=array.length-1;i>=0;i--){
            if (array[i] === 'true'){
                document.getElementsByClassName("box")[i].remove();  
                contents.splice(i, 1);
                array.splice(i, 1);        
            }
        }
    }

  return (
    <div className="container">
        <div className="upper">
            <div>
                <span id="id1">Product List</span>
            </div>
            <div>
                <span id="id2"><button><Link to="/addproduct">ADD</Link></button></span>
                <span id="delete-product-btn" onClick={() => handleClick()}><button>MASS DELETE</button></span>
            </div>
        </div>
        <hr className="up"></hr>
        <div className="boxes">
            {contents}
        </div>
        <hr className="bottom"></hr>
        <div className="lower">
            Scandiweb Test assignment
        </div>
    </div>
  )
}

export default Home