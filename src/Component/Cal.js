import React,{useState} from "react";
import './Rj.css';
function Cal(){

    const[state,setState]=useState("");

    const handleSubmit = (e)=> {
        setState(state.concat(e.target.value));
    }
    const Clardis = ()=> {
        setState("");
    }
    const Equal = ()=> {
        setState(eval(state).toString())
    }
    return(
        <div className="calc">
<input type="text"placeholder="0" id="answer" value={state}/>
<input type="button"value="9"className="button" onClick={handleSubmit}/>
<input type="button"value="8"className="button"onClick={handleSubmit}/>
<input type="button"value="7"className="button"onClick={handleSubmit}/>
<input type="button"value="6"className="button"onClick={handleSubmit}/>
<input type="button"value="5"className="button"onClick={handleSubmit}/>
<input type="button"value="4"className="button"onClick={handleSubmit}/>
<input type="button"value="3"className="button"onClick={handleSubmit}/>
<input type="button"value="2"className="button"onClick={handleSubmit}/>
<input type="button"value="1"className="button"onClick={handleSubmit}/>
<input type="button"value="0"className="button"onClick={handleSubmit}/>
<input type="button"value="."className="button"onClick={handleSubmit}/>
<input type="button"value="+"className="button"onClick={handleSubmit}/>
<input type="button"value="-"className="button"onClick={handleSubmit}/>
<input type="button"value="x"className="button"onClick={handleSubmit}/>
<input type="button"value="/"className="button"onClick={handleSubmit}/>
<input type="button"value="%"className="button"onClick={handleSubmit}/>
<input type="button"value="Clear"className="button button1"onClick={Clardis}/>
<input type="button"value="="className="button button1"onClick={Equal}/>

        </div>
    )
}
export default Cal;