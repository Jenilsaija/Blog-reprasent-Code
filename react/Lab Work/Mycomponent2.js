import * as React from 'react'

class Mycomponent2 extends React.Component{
    state={
        heading :'loading....',
        content:'Loading....'
    };
    constructor(){
        super()
        setTimeout(() => {
            this.setState({
                heading: "React Loading Done",
                content: "React Content Loading Done"
            });
        }, 3000);
    }
    render(){
        const {heading,content}=this.state;

        return(
            <main>
                <h1>heading: {heading}</h1>
                <h1>content: {content}</h1>
            </main>
        )
    }
}
export default Mycomponent2