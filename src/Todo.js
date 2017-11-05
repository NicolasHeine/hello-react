import React from "react";
import "./Todo.css";

const TodoList = props => {
  const isEmpty = !!props.todos && props.todos.length === 0;
  return (
    <ul id="list">
      {isEmpty && (
        <li>
          <span>No element! Try creating one!</span>
        </li>
      )}
      {!!props.todos && props.todos.map((item, index) => {
        {if (props.filtre === '1'){
          {if (item[1]){
            return <li key={index} onClick={() => props.click(index)} className="done">{item[0]}</li>;
          }}
        }else if(props.filtre === '2'){
          {if (!item[1]){
            return <li key={index} onClick={() => props.click(index)}>{item[0]}</li>;
          }}
        }else{
          {if (item[1]){
            return <li key={index} onClick={() => props.click(index)} className="done">{item[0]}</li>;
          }else{
            return <li key={index} onClick={() => props.click(index)} >{item[0]}</li>;
          }}
        }}
      })}
    </ul>
  );
};

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.onListClick = this.onListClick.bind(this);
    this.onFiltreClick = this.onFiltreClick.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      items: [],
      value: '',
      filtre: '0'
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.state.items.push([this.state.value, false]);
    this.setState({
      items: this.state.items,
      value: ''
    });
    event.preventDefault();
  }

  componentWillMount() {
    this.setData()
  }

  setData(){
    const url = 'https://api.myjson.com/bins/9l2ez';
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        let elements = data.todos;
        return elements.map((element) => {
          this.state.items.push([element.label, element.complete])
        })
      })
      .then(() => {
        this.setState({items: this.state.items})
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onListClick(index) {
    let item = this.state.items[index][1]
    if(item){
      this.state.items[index][1] = false;
    }else{
      this.state.items[index][1] = true;
    }
    this.setState({items: this.state.items})
  }

  onFiltreClick(event){
    let button = event.target
    let value = button.value

    this.setState({filtre: value})
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label>
            Ajouter une tache :<br />
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Ajouter" />
        </form>
        <TodoList todos={this.state.items} filtre={this.state.filtre} click={this.onListClick} />
        <div>
          Filtre :
          <button value="0" onClick={this.onFiltreClick} disabled={this.state.filtre === '0'}>Tous</button>
          <button value="1" onClick={this.onFiltreClick} disabled={this.state.filtre === '1'}>Terminé</button>
          <button value="2" onClick={this.onFiltreClick} disabled={this.state.filtre === '2'}>A faire</button>
        </div>
      </div>
    );
  }
}

export default Todo;