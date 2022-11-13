import React, { Component } from "react";

class List extends Component {
  render() {
      let { list, actions } = this.props;

      return Array.isArray(list) && list.length ? (
          <>
              <div className='list'
                   style={{
                    border: '2px solid black',
                    padding: '5px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                    }}>
                  <ul>
                      {list.map((item => <li key={item.id}>{item.title}</li>))}
                  </ul>
                  <div>{actions.map((item, index) => <button key={index} onClick={item.action}>{item.btn}</button>)}</div>
              </div>  
          </>
      ) : null;
  }
}

export default List;