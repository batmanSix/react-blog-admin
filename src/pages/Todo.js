
import React, { useState, useEffect } from 'react';
import { Layout, Menu, Breadcrumb, Icon, Card, Button, Input } from 'antd';
function Todo(props) {

  let [list,submitClick] = useState([])

  const [count, setCount] = useState(0);

  const [inputval, setInput] = useState('')

  // 添加函数
  const add = () => {
    list.push(inputval)
    submitClick([...list])
  }


  // 删除
  const deleteval = (e) =>{
    list.splice(e,1);
    submitClick([...list])
  }

  const style = {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 20,
  }

  useEffect(() => {

  }, [])

  return (

    <div>

      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
      </button>
      </div>
      <div className="btn-menu" style={style}><Button onClick={add}>添加</Button>   <Button>删除</Button></div>
      <Input placeholder='请输入task' style={style} value={inputval} onChange={e => {
        setInput(e.target.value)
      }}></Input>
      <Card title="todo app" style={style}>
        {list.map((item, index) => {
          return  <li key={index} onClick={(e)=>deleteval(index)}>{item}</li>
        })}
      </Card>
    </div>

  )
}

export default Todo