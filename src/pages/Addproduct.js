import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Score from "../contexts/Context";


function Addproduct () {
    const [ divek, setDivek ] = useState();
    const [ dyn, setDyn ] = useState("");
    const [ valDvd, setValDvd ] = useState(0);
    const [ valFur, setValFur ] = useState([0, 0, 0]);
    const [ valBook, setValBook] = useState(0);
    const [ specs, setSpecs ] = useState([0, 0, 0]);


    const Navigate = useNavigate();
    const { contents, setContents } = useContext(Score);
    
    function delay(ms) {
        return new Promise((resolve) => {
           setTimeout(resolve, ms);
        })
      } 
    
    async function handleClick () {
            let squs = [...contents];
            if (dyn === "DVD"){
                squs.push(
                    <div key={new Date().valueOf()} className='box'>
                        <div>
                            <input className="delete-checkbox" type="checkbox"></input>
                        </div>
                        <div>
                            <div className="col3">
                                <span>{specs[0]}</span>
                                <span>{specs[1]}</span>
                                <span>{specs[2]} $</span>
                                <span>Size: {valDvd} MB</span>
                            </div>
                        </div>
                    </div>
                )
            } else if (dyn === "Furniture"){
                squs.push(
                    <div key={new Date().valueOf()} className='box'>
                        <div>
                            <input className="delete-checkbox" type="checkbox"></input>
                        </div>
                        <div>
                            <div className="col3">
                                <span>{specs[0]}</span>
                                <span>{specs[1]}</span>
                                <span>{specs[2]} $</span>
                                <span>Dimension: {valFur[0]}x{valFur[1]}x{valFur[2]}</span>
                            </div>
                        </div>
                    </div>
                )
            } else if (dyn === "Book"){
                squs.push(
                    <div key={new Date().valueOf()} className='box'>
                        <div>
                            <input className="delete-checkbox" type="checkbox"></input>
                        </div>
                        <div>
                            <div className="col3">
                                <span>{specs[0]}</span>
                                <span>{specs[1]}</span>
                                <span>{specs[2]} $</span>
                                <span>Weight: {valBook}KG</span>
                            </div>
                        </div>
                    </div>
                )
            }
            setContents(squs);
            await delay(25);
            Navigate("/");
    }

    const div1 = () => {
        return (
            <div className="general">
                <div id="DVD">
                    <div className="col1">
                        <span>Size (MB)</span>
                    </div>
                    <div className="col2">
                        <input id="fdvd" type="text" onChange={() => fdvd()} autoComplete="off" placeholder="#size"></input>
                    </div>
                </div>
                <div className="info">
                    Please provide size of DVD in MB (Megabyte).
                </div>
            </div>
        )
    }

    const fdvd = () => {
        setValDvd(document.getElementById("fdvd").value);        
    }

    const div2 = () => {
        return (
            <div className="general">
                <div id="Furniture">
                    <div className="col1">
                        <span>Height (CM)</span>
                        <span>Width (CM)</span>
                        <span>Length (CM)</span>
                    </div>
                    <div className="col2">
                        <input id="ffur1" type="text" onChange={() => ffur()} autoComplete="off" placeholder="#height"></input>
                        <input id="ffur2" type="text" onChange={() => ffur()} autoComplete="off" placeholder="#width"></input>
                        <input id="ffur3" type="text" onChange={() => ffur()} autoComplete="off" placeholder="#length"></input>
                    </div>
                </div>
                <div className="info">
                    Please provide dimensions in H x W x L format.
                </div>
            </div>
        )
    }

    const ffur = () => {
        setValFur([document.getElementById("ffur1").value, document.getElementById("ffur2").value, document.getElementById("ffur3").value]);        
    }

    const div3 = () => {
        return (
            <div className="general">
                <div id="Book">
                    <div className="col1">
                        <span>Weight (KG)</span>
                    </div>
                    <div className="col2">
                        <input id="fbook" type="text" onChange={() => fbook()} autoComplete="off" placeholder="#weight"></input>
                    </div>
                </div>
                <div className="info">
                    Please provide size of book weight in KG (Kilogram).
                </div>
                
            </div>
        )
    }

    const fbook = () => {
        setValBook(document.getElementById("fbook").value);        
    }
    

    const handie = () => {
         setDyn(document.querySelector("#productType").value);
         var b = document.querySelector("#productType").value;
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
    <div className="container">
        <div className="upper">
            <div>
                <span id="id1">Product Add</span>
            </div>
            <div>
                <span id="id2"><button onClick={() => handleClick()}><Link to="/">Save</Link></button></span>
                <span id="id3"><button><Link to="/">Cancel</Link></button></span>
            </div>
        </div>
        <hr className="up"></hr>
        <div id="product_form">
            <div className="col1">
                <span>SKU</span>
                <span>Name</span>
                <span>Price ($)</span>
            </div>
            <div className="col2">
                <span><input id="sku" type="text" onChange={() => spec()} autoComplete="off" placeholder="#sku"></input></span>
                <span><input id="name" type="text" onChange={() => spec()} autoComplete="off" placeholder="#name"></input></span>
                <span><input id="price" type="text" onChange={() => spec()} autoComplete="off" placeholder="#price"></input></span>
            </div>
        </div>
        <div id="typeSwitcher">
            Type Switcher 
            <select id="productType" onChange={() => handie()}>
                <option value="">Type Switcher</option>
                <option value="DVD">DVD</option>
                <option value="Furniture">Furniture</option>
                <option value="Book">Book</option>
            </select>
        </div>
        <div className="specs2">
                {divek}
        </div>
        <hr className="bottom"></hr>
        <div className="lower">
            Scandiweb Test assignment
        </div>
    </div>
  )
}

export default Addproduct