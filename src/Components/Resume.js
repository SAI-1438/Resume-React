import React from "react"
import pic from '../pic.1.jpg'
import './Style.css'
import store from './Store/Store'
// import { useNavigate } from "react-router-dom"
import { useContext } from "react"

const Resume = () =>{
    // const Navi=useNavigate()
    const ContextData=useContext(store)
    return(
        <>
        <div class="main">
            {ContextData.data.map((item,index)=>{
                return(
                    <>
                     <div class="left" key={{data:index}}>
             <br/>
             <div class="picture"><img src={pic} alt="loading..."/></div>
             <br/>
             <div class="box">
                 <div class="heading">
                     <h1>PROFILE</h1>
                 </div>
                 <h3 class="p1">{item.contact}</h3>
             </div>
             <br/>
             <div class="box">
                 <div class="heading">
                     <h1>TECHNICAL SKILLS</h1>
                 </div>
                 
                 <h3 class="p1">{item.technicalskills}</h3>
             </div>
             <br/>
             <div class="box">
                 <div class="heading">
                     <h1>SOFT SKILLS</h1>
                 </div>
                 <h3 class="p1">{item.softskills}</h3>            
             </div>
             <br/>
             <div class="box">
                 <div class="heading">
                     <h1>CERTIFICATIONS</h1>
                 </div>
                 <h3 class="p1">{item.certifications}</h3>           
             </div>
             <br/>
             <div class="box">
                 <div class="heading">
                     <h1>LANGUAGES KNOWN</h1>
                 </div>
                 <h3 class="p1">{item.languages}</h3>           
             </div>
         </div>
     
         <div class="right" key={{data:index}}>
             <div class="name">
                 <h1 class="bsk">{item.Name}</h1>
                 <h3 class="role">{item.title}</h3>
             </div>
             <br/>
             <div class="box">
                 <div class="headingryt">
                     <h2>CAREER OBJECTIVE:</h2>
                 </div>
                 <p class="p1">{item.objective}</p>
             </div>
             <br/>
             <div class="box">
                 <div class="headingryt">
                     <h2>EDUCATIONAL QUALIFICATIONS:</h2>
                 </div>
                 <h3 class="p1">{item.academics}</h3>
             </div>
             <br/>
             <div class="box">
                 <div class="headingryt">
                     <h2>STRENGTHS:</h2>
                 </div>
                 <h3 class="p1">{item.strengths}</h3>
             </div>
             <br/>
             <div class="box">
                 <div class="headingryt">
                     <h2>INTERESTS:</h2>
                 </div>
                 <h3 class="p1">{item.interests}</h3>
             </div>
             <br/>
             <div class="box">
                 <div class="headingryt">
                     <h2>HOBBIES:</h2>
                 </div>
                 <h3 class="p1">{item.hobbies}</h3>
             </div>
             <br/>
             <div class="box">
                 <div class="headingryt">
                     <h2>DECLARATION:</h2>
                 </div>
                 <p class="p1">{item.daclaration}</p>
             </div>
             <br/>
             <p class="sign">{item.Name}<br/>(Signature)</p>
         </div>
                    </>
                )
            })}
        
        </div>
        {/* <div class="btn">
              <button onClick={print()}>Print Resume</button>
        </div> */}
        </>
    )
}
 
export default Resume