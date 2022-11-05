import React,{useState} from "react"
import "./calci.css"
const BmiCalci=()=>{
    const [age,setAge]=useState()
    const [weight,setWeight]=useState()
    const [height,setHeight]=useState()

      
    const [result,setResult]=useState("")
    const handleCalculation=()=>{
        const result=parseFloat(weight/((height*(10**-2))**2)).toFixed(3)

        if(age && weight && height){
            setResult(result)
        }else{
            alert("enter all fields")
        }

        
        console.log(weight,height)
    }
   const handleClear=()=>{
        setResult("")
    }
    return(
        <div className="main">

        <div className="main-left">
        Age<input type="text" onChange={e=>{setAge(e.target.value)}} />
        {handleCalculation && age>=120 ?<p className="error">Age should be in between 2-120</p>:null}
        <span>ages: 2-120</span>
        <div className="select">
        Gender<select name="Gender">
        <option type="select" name="Male">Male</option>
        <option  type="select" name="Female">Female</option>
        </select>
        </div>
        <div className="field">Height<input name="height" placeholder="cm"  onChange={e=>{setHeight(e.target.value)}}/></div>
        {handleCalculation && (height<0 ) ? <p className="error">Enter positive numbers only</p>:null}
       <div className="field"> Weight<input name="weight" placeholder="kg"  onChange={e=>{setWeight(e.target.value)}}/></div>
       {handleCalculation && (weight<0 ) ? <p className="error">Enter positive numbers only</p>:null}
        <div className="btn">
        <button onClick={handleCalculation}>Calculate
        <i class="fa fa-caret-square-o-right" aria-hidden="true"></i>

        </button>
        <button onClick={handleClear}>Clear</button>
        </div>
        </div>
        <div className="main-right">
        <div className="result">Result</div>
        <div>BMI={result}kg/m2</div>
        </div>
        </div>
    )
}
export default BmiCalci