//import { Message } from "@material-ui/icons";
import React,{useState} from "react";
import './Page.css';
function Page(){
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[mobile,setMobile]=useState("");
    const[message,setMessage]=useState("")

    const handlesubmit = async (e)=> {
        e.preventDefault();
        try{
            let res = await fetch("https://httpbin.org/post",{
                method:"POST",
                body: JSON.stringify({
                    name:name,
                    email:email,
                    mobile:mobile,
                }),
            })
            const resJson = await res.json();
            if(res.status === 200){
                setName("");
                setEmail("");
                setMobile("");
                setMessage("User Created successfully");
            }else{
                setMessage("Some error occured");
            }
        }catch (err){
            console.log(err)
        }
    };
    return(
        <div className="App">
<form onSubmit={handlesubmit}>
    <input type="text"placeholder="Enter Your Name"value={name}onChange={(e)=> setName(e.target.value)}/>
    <input type="text"placeholder="Enter You email"value={email}onChange={(e)=> setEmail(e.target.value)}/>
    <input type="text"placeholder="Enter Your Mobile Number"value={mobile}onChange={(e)=> setMobile(e.target.value)}/>
    <button type="submit">Create</button>;
    <div className="message">{message ? <p>{message}</p>:null}</div>
</form>
        </div>
    )
}
export default Page;