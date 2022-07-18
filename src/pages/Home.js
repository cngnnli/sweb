import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Score from "../contexts/Context";


function Home () {
    const { deneme, setDeneme } = useContext(Score);
    const [ ax, setAx ] = useState(document.getElementsByClassName("checks"));
    const { array, setArray } = useContext(Score);

    // const [ bx, setBx ] = useState(document.getElementsByClassName("box"));




    useEffect(() => {
        setAx(document.getElementsByClassName("checks"));
        if (ax.length > 0){
            setArray(Array(ax.length).fill('false'));
            for (let i=0; i<ax.length;i++){
                ax[i].onclick = function() {dos();};
            }
        }
    }, [])
    
    // function delay(ms) {
    //     return new Promise((resolve) => {
    //        setTimeout(resolve, ms);
    //     })
    //   } 

    const dos = () => {
        console.log(array)
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
        let squs = [...deneme];
        for (let i=array.length-1;i>=0;i--){
            if (array[i] == 'true'){
                document.getElementsByClassName("box")[i].remove();
                let axy = [...array];
                axy.splice(i, 1);
                setArray(axy);
                console.log(squs)
                

            }
        }

        // if(array[1] == 'true'){
        //     const element = document.getElementsByClassName("box")[1].remove();;
        //     element.remove();

        //     //bağlı özellikleri slice ile sil
        // }
        
    }

    
    // const { counter, setCounter } = useContext(Score);
    // const { a, setA } = useContext(Score);


    // useEffect(() => {
    //     handleClick();
    // }, []);

    // const handleClick = () => {
    //     if (counter === 0){
    //         setCounter(1);
    //     } else {
    //         let squs = [...deneme];
    //         squs.push(
    //         <div key={new Date().valueOf()} className='box'>
    //             <div>
    //                 <input className="checks" type="checkbox"></input>
    //             </div>
    //             <div className="specs">
    //                 <span>Name</span>
    //                 <span>Name 2</span>
    //                 <span>Price</span>
    //                 <span>Price 2</span>
    //             </div>
    //         </div>);
    //         setDeneme(squs);
    //         console.log(squs);
    //     }
    // }

    // const handleClick = () => {
    //     // setDeneme(squs);
    // }

  return (
    <div className="container">
        <div className="upper">
            <div>
                <span id="id1">Product List</span>
            </div>
            <div>
                <span id="id2"><button><Link to="/addproduct">ADD</Link></button></span>
                <span id="id3" onClick={() => handleClick()}><button>MASS DELETE</button></span>
            </div>
        </div>
        <div className="boxes">
            {deneme}
        </div>
        <div className="lower">
            {array}

        </div>
    </div>
  )
}

export default Home