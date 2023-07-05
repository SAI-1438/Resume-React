import React from "react"
import './Style.css'
import store from './Store/Store'
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

function Inputs(){
    const ContextData=useContext(store)
    const Navi=useNavigate()

    const NewObj={
        Name:'',
        title:'',
        objective:'',
        contact:'',
        academics:'',
        technicalskills:'',
        softskills:'',
        certifications:'',
        strengths:'',
        hobbies:'',
        interests:'',
        languages:'',
        declaration:''
    }

    const handleChange = (e) =>{
        NewObj[e.target.name]=e.target.value;
    }

    const handleSubmit = () =>{
        ContextData.data.push(NewObj)
        Navi('/resume')
    }
    return(
        <>
        <form class="input_fields">
          <h1>Resume Generator</h1>
          <input type="text" name="Name" placeholder="Name" required onChange={handleChange}/><br/><br/>
          <input type="text" name="title" placeholder="Title-Eg:- Web Developer" required onChange={handleChange}/><br/><br/>
          <input type="text" name="objective" placeholder="Career-Objective" required onChange={handleChange}/><br/><br/>
          <input type="number" name="contact" placeholder="Profile-Contacts" required onChange={handleChange}/><br/><br/>
          <input type="text" name="academics" placeholder="Academic Details" required onChange={handleChange}/><br/><br/>
          <input type="text" name="technicalskills" placeholder="Technical-Skills" required onChange={handleChange}/><br/><br/>
          <input type="text" name="softskills" placeholder="Soft-Skills" required onChange={handleChange}/><br/><br/>
          <input type="text" name="certifications" placeholder="Certifications" required onChange={handleChange}/><br/><br/>
          <input type="text" name="strengths" placeholder="Strengths" required onChange={handleChange}/><br/><br/>
          <input type="text" name="hobbies" placeholder="Hobbies" required onChange={handleChange}/><br/><br/>
          <input type="text" name="interests" placeholder="Interests" required onChange={handleChange}/><br/><br/>
          <input type="text" name="languages" placeholder="Languags-Known" required onChange={handleChange}/><br/><br/>
          <input type="text" name="declaration" placeholder="Declaration" required onChange={handleChange}/><br/><br/>
        </form>

        <div class="btn">
            <button onClick={handleSubmit}>Preview or edit</button>
        </div>
        </>
    )
}

export default Inputs;