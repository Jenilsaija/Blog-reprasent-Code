import * as React from 'react'

class Mycomponent3 extends React.Component{

    state ={
        first: "Loading....",
        second: "Loading....",
        third: "Loading....",
        fourth: "Loading....",
        last: "All Privious Component Loaded"
    };
    constructor(){
        super()
        setTimeout(() => {
            this.setState({first:"Done"})
        }, 1000);
        
        setTimeout(() => {
            this.setState({second:"Done"})
        }, 2000);
        
        setTimeout(() => {
            this.setState({third:"Done"})
        }, 3000);
        
        setTimeout(() => {
            this.setState({fourth: this.state.last})
        }, 4000);
    }
    render(){
        return (
            <div>
                <ul>
                    <h1>Component 3</h1>
                    {Object.keys(this.state).filter((keys=>keys!=='last')).map((key)=>{
                       return <li key={key}>{key}:{this.state[key]}</li>
                    })}
                </ul>
            
            </div>
        )
    }

}
export default Mycomponent3