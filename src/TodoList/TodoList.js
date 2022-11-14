import React , {Component} from 'react' ;

class TodoList extends Component{

    constructor(){
        super();
        this.state={
            userInput : '',
            items : []
        };
    }

    onChange(event){
        this.setState({
            userInput : event.target.value
        });
    }

    addTodo(event){
        event.preventDefault();
        this.setState({
            items : [...this.state.items,this.state.userInput],
            userInput : ''
        });
    }

    renderTodo(){

        const mystyle={
            display:"flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "stretch",
            alignContent: "stretch"
        }
        return  this.state.items.map((item)=>{
            return(
                <div 
                    className='list-group-item'
                    style={mystyle}
                >
                    <span 
                        key={item}
                    >
                    {item} </span>
                    <button 
                        className='btn btn-warning'
                        value={item} 
                        onClick={this.deleteTodo.bind(this)}  
                    >X</button>
                </div>
                    
            )
        });
    }

    deleteTodo(event){
        event.preventDefault();
        const array = this.state.items;
       const index = array.indexOf(event.target.value);
        array.splice(index,1);
        this.setState({
            items : array
        });
    }

    render(){
        const mystyle = {
            width:"90%",
            backgroundColor:"#000",
        }

        return[
            <div >
                <h1 align="center">TodoList</h1>
                <form align='cemter' className='row'>

                    <div className='col-md-9'>
                        <input 
                            className='form-control'
                            type='text' 
                            value={this.state.userInput} 
                            placeholder='entrer une tache'
                            onChange={this.onChange.bind(this)}    
                        />
                    </div>
                    <div className='col-md-3'>
                        <button 
                            onClick={this.addTodo.bind(this)} 
                            className='btn btn-primary mb-2'
                        >ajouter</button>  
                    </div> 
                </form>
                <ul className='list-group' style={mystyle}>
                    {this.renderTodo()}
                </ul>
            </div>
        ];
    }
}

export default TodoList ;