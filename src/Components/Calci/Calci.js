import React from 'react' 
import "../Calci/Calci.css"
class Calci extends React.Component { 
    constructor(props) { 
        super(props)
        this.ans = 0;
        this.state = { 
            inputField : "",
            resultField : "",
        }
    }
    handleClick = (event) => { 
        this.setState({resultField : event.target.value})
    }
    handleBtnClick = (event) => { 
        
    }
    render() { 
       return (
           <div className = "calculator"> 
               <div className = "display"> 
                   <div className = "input-field">{this.state.inputField}</div>
                   <input type="text"  placeholder = "type here..." className = "result-field"></input>
               </div>
               <table className = "keys">
                   <tr className = "row">
                       <td><button value = "1" onClick = {this.handleBtnClick}>1</button></td>
                       <td><button value = "2">2</button></td>
                       <td><button value = "3">3</button></td>
                       <td><button value = "+">+</button></td>
                   </tr>
                   <tr className = "row">
                       <td><button value = "4">4</button></td>
                       <td><button value = "5">5</button></td>
                       <td><button value = "6">6</button></td>
                       <td><button value = "-">-</button></td>
                   </tr>
                   <tr className = "row">
                       <td><button value = "7">7</button></td>
                       <td><button value = "8">8</button></td>
                       <td><button value = "9">9</button></td>
                       <td><button value = "x">x</button></td>
                   </tr>
                   <tr className = "row">
                       <td><button value = "0">7</button></td>
                       <td><button value = ".">8</button></td>
                       <td><button value = "/">9</button></td>
                       <td><button value = "=">x</button></td>
                   </tr>
               </table>
           </div>
       )
    }
}
export default Calci