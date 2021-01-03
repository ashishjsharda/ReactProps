import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Title extends Component {
  render(){
    return (
      <h1>
        {this.props.title}
      </h1>
    )
  }
}

class List extends Component {
  render(){
    return (
      <ol>
        {this.props.tasks.map(task => <li>{task}</li>)}
      </ol>
    )
  }
}

class Main extends Component {
  render(){
    return (
      <div>
        <Title title="Sample Task Lists"/>,
        <List tasks={['Get Ready','Go to Grocery'] }/>
        <List tasks={['Iron Clothes','Order Lunch'] }/>
      </div>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);

