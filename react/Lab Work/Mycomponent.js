import *  as React from 'react'

class Mycomponent extends React.Component{
    state={
        first: false,
        second: true
    }
    render(){
        const {first,second}=this.state;
        return (
            <main>
                <section>
                    <button disabled={first}>first</button> 
                </section>
                <section>
                    <button disabled={second}>second</button> 
                </section>
            </main>
        )
    }
}

export default Mycomponent


