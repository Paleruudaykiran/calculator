import React from 'react' 
import "../Calci/Calci.css"
let a = 0;
let b = 0;
let op = ''
class Calci extends React.Component { 
    constructor(props) { 
        super(props)
        this.ans = 0;
        this.state = { 
            inputField : "",
        }
    }
    handleClick = (event) => { 
        this.setState({inputField : this.state.inputField + event.target.value})
    }
    handleOpClick = (event) => { 
        a = parseFloat(this.state.inputField) 
        op = event.target.value 
        this.setState({inputField : ''})
    }
    findResult = (e) => {
        b = parseFloat(this.state.inputField) 
        switch (op) {
            case '+':
                a += b
                break;
            case '-' :
                a -= b
                break;
            case 'x' :
                a *= b
                break;
            case '/' :
                a /= b
                break;
        }
        this.setState({inputField : a})
    }
    render() { 
       return (
           <div className='container-fluid bg-secondary text-center header'>
               <h1 className='text-white'>claculator</h1>
           <div className = "container bg-dark p-2"> 
               <div className = "row"> 
                   <div className="col-sm-12 my-auto align-items-center"><input type="text" className='input' placeholder={this.state.inputField} vlaue={this.state.inputField} />
                   </div>
               </div>
                   <div className = "row mt-2">
                       <div className="col-3"><button className="btn btn-outline-primary btn-block col-12" value = "1" onClick = {this.handleClick}>1</button></div>
                       <div className="col-3"><button className="btn btn-outline-primary btn-block col-12" value = "2" onClick = {this.handleClick}>2</button></div>
                       <div className="col-3"><button className="btn btn-outline-primary btn-block col-12" value = "3" onClick = {this.handleClick}>3</button></div>
                       <div className="col-3"><button className="btn btn-outline-primary btn-block col-12" value = "+" onClick= {this.handleOpClick}>+</button></div>
                   </div>
                   <div className = "row mt-1">
                       <div className="col-3"><button className="btn btn-outline-primary btn-block col-12" value = "4" onClick = {this.handleClick}>4</button></div>
                       <div className="col-3"><button className="btn btn-outline-primary btn-block col-12" value = "5" onClick = {this.handleClick}>5</button></div>
                       <div className="col-3"><button className="btn btn-outline-primary btn-block col-12" value = "6" onClick = {this.handleClick}>6</button></div>
                       <div className="col-3"><button className="btn btn-outline-primary btn-block col-12" value = "-" onClick= {this.handleOpClick}>-</button></div>
                   </div>
                   <div className = "row mt-1">
                       <div className="col-3"><button className="btn btn-outline-primary btn-block col-12" value = "7" onClick = {this.handleClick}>7</button></div>
                       <div className="col-3"><button className="btn btn-outline-primary btn-block col-12" value = "8" onClick = {this.handleClick}>8</button></div>
                       <div className="col-3"><button className="btn btn-outline-primary btn-block col-12" value = "9" onClick = {this.handleClick}>9</button></div>
                       <div className="col-3"><button className="btn btn-outline-primary btn-block col-12" value = "x" onClick= {this.handleOpClick}>x</button></div>
                   </div>
                   <div className = "row mt-1">
                       <div  className="col-3"><button className="btn btn-outline-primary btn-block col-12" value = "0" onClick = {this.handleClick}>0</button></div>
                       <div className="col-3"><button className="btn btn-outline-primary btn-block col-12" value = "." onClick = {this.handleClick}>.</button></div>
                       <div className="col-3"><button className="btn btn-outline-primary btn-block col-12" value = "/" onClick= {this.handleOpClick}>/</button></div>
                       <div className="col-3"><button className="btn btn-outline-primary btn-block col-12" value = "=" onClick= {this.findResult}>=</button></div>
                   </div>
                   <div className='row'>
                       <div className="col-sm-12 mt-1"><button className='btn btn-outline-primary btn-block col-sm-12'value='clear' onClick={e => this.setState({inputField : ''})}>clear</button></div>
                   </div>
           </div>
           </div>
       )
    }
}
export default Calci