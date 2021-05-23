import React,{Component} from 'react';
import axios from 'axios'
import './form.css';


class Form extends Component{
 constructor(){
     super();
 
     this.state = { 
      Name : "",
      Email : "",
      Phone : "",
      Salary : ""
  
    }

 }

 
  
changeHandler = (e) => {
 this.setState({ [e.target.name] : e.target.value })   
}

submitHandler = e =>{
    e.preventDefault();
    console.log(this.state)
axios.post('https:localhost//',this.state)
.then(res=>{console.log(res)})
.catch(err=>{console.log(err)})
    
}

  render(){
    const {Name,Email,Phone,Salary} = this.state
  return(
            <div className="time"> 
               <h1>EMPLOYEE FROM</h1>
               <form  onSubmit={this.submitHandler}>
         <div>  Name:  <input  value={Name}   name = "Name"     placeholder="Name"   onChange={this.changeHandler}  type="text"/></div>
         <div> Email:  <input  value={Email}  name = "Email"    placeholder="Email"  onChange={this.changeHandler}  type="text"/></div>
         <div> Phone:  <input  value={Phone}  name = "Phone"    placeholder="Phone"  onChange={this.changeHandler}  type="text"/></div>
         <div> Salary: <input  value={Salary} name = "Salary"   placeholder="Salary" onChange={this.changeHandler}  type="text"/></div>
          <br/> <div><button type="submit" class="button">Submit</button></div>
              </form>
              <button type="submit"> fetch dat</button>
                     </div>
           
        )
    }
}

export default Form;