import React, {Component} from 'react'

class List extends Component {
    constructor(){
        super();
    }

    render(){
        let list = this.props.tasks.map((element, index) => {
            return <Todo key={index} task={element}/>
        })
        return(
            <div>
                {list}
            </div>
        )
    }
}

export default List