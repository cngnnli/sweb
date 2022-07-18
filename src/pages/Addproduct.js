import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Score from "../contexts/Context";


function Addproduct () {
    const [ divek, setDivek ] = useState();
    const [ a, setA ] = useState("");
    const [ valDvd, setValDvd ] = useState(0);
    const [ valFur, setValFur ] = useState([0, 0, 0]);
    const [ valBook, setValBook] = useState(0);
    const [ specs, setSpecs ] = useState([0, 0, 0]);


    const Navigate = useNavigate();
    const { deneme, setDeneme } = useContext(Score);
    
    function delay(ms) {
        return new Promise((resolve) => {
           setTimeout(resolve, ms);
        })
      } 
    
    async function handleClick () {
            let squs = [...deneme];
            if (a === "DVD"){
                squs.push(
                    <div key={new Date().valueOf()} className='box'>
                        <div>
                            <input className="checks" type="checkbox"></input>
                        </div>
                        <div>
                            <div>
                                <span>{specs[0]}</span>
                                <span>{specs[1]}</span>
                                <span>{specs[2]} $</span>
                                <span>Size: {valDvd} MB</span>
                            </div>
                        </div>
                    </div>
                )
            } else if (a === "Furniture"){
                squs.push(
                    <div key={new Date().valueOf()} className='box'>
                        <div>
                            <input className="checks" type="checkbox"></input>
                        </div>
                        <div>
                            <div>
                                <span>{specs[0]}</span>
                                <span>{specs[1]}</span>
                                <span>{specs[2]} $</span>
                                <span>Dimension: {valFur[0]}x{valFur[1]}x{valFur[2]}</span>
                            </div>
                        </div>
                    </div>
                )
            } else if (a === "Book"){
                squs.push(
                    <div key={new Date().valueOf()} className='box'>
                        <div>
                            <input className="checks" type="checkbox"></input>
                        </div>
                        <div>
                            <div className="col1">
                                <span>{specs[0]}</span>
                                <span>{specs[1]}</span>
                                <span>{specs[2]} $</span>
                                <span>Weight: {valBook}KG</span>
                            </div>
                        </div>
                    </div>
                )
            }
            setDeneme(squs);
            await delay(25);
            Navigate("/");
    }

    const div1 = () => {
        return (
            <div>
                <div>
                    <span>Size (MB)</span>
                </div>
                <div>
                    <input id="fdvd" type="text" onChange={() => fdvd()} autoComplete="off"></input>
                </div>
            </div>
        )
    }

    const fdvd = () => {
        setValDvd(document.getElementById("fdvd").value);        
    }

    const div2 = () => {
        return (
            <div>
                <div>
                    <span>Height</span>
                    <span>Width</span>
                    <span>Length</span>
                </div>
                <div>
                    <input id="ffur1" type="text" onChange={() => ffur()} autoComplete="off"></input>
                    <input id="ffur2" type="text" onChange={() => ffur()} autoComplete="off"></input>
                    <input id="ffur3" type="text" onChange={() => ffur()} autoComplete="off"></input>
                </div>
            </div>
        )
    }

    const ffur = () => {
        setValFur([document.getElementById("ffur1").value, document.getElementById("ffur2").value, document.getElementById("ffur3").value]);        
    }

    const div3 = () => {
        return (
            <div>
                <div>
                    <span>Weight (KG)</span>
                </div>
                <div>
                    <input id="fbook" type="text" onChange={() => fbook()} autoComplete="off"></input>
                </div>
            </div>
        )
    }

    const fbook = () => {
        setValBook(document.getElementById("fbook").value);        
    }
    

    const handie = () => {
         setA(document.querySelector("#selection").value);
         var b = document.querySelector("#selection").value;
        if (b === "DVD"){
            setDivek(div1)
        } else if (b === "Furniture"){
            setDivek(div2)
        } else if (b === "Book"){
            setDivek(div3)
        } else (
            setDivek()
        )
    }

    const spec = () => {
        setSpecs([document.getElementById("sku").value, document.getElementById("name").value, document.getElementById("price").value]);        
    }

    
  return (
    <div>
        <div className="upper">
            <div>
                <span id="id1">Product Add</span>
            </div>
            <div>
                <span id="id2"><button onClick={() => handleClick()}><Link to="/">Save</Link></button></span>
                <span id="id3">Cancel</span>
            </div>
        </div>
        <div className='forms'>
            <div className="col1">
                <span>SKU</span>
                <span>Name</span>
                <span>Price ($)</span>
            </div>
            <div className="col2">
                <span><input id="sku" type="text" onChange={() => spec()} autoComplete="off"></input></span>
                <span><input id="name" type="text" onChange={() => spec()} autoComplete="off"></input></span>
                <span><input id="price" type="text" onChange={() => spec()} autoComplete="off"></input></span>
            </div>
        </div>
        <div>
            Type Switcher 
            <select id="selection" onChange={() => handie()}>
                <option value="">Type Switcher</option>
                <option value="DVD">DVD</option>
                <option value="Furniture">Furniture</option>
                <option value="Book">Book</option>
            </select>
        </div>
        <div className="specs2">
                {divek}
        </div>
    </div>
  )
}

export default Addproduct