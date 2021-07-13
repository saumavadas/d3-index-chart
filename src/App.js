import { useCallback, useState, useEffect } from 'react';
//import { Circles } from './Circles';
 import { BasicLine } from './BasicLine';


const App = () =>
{
  const [data, setData] = useState([1]);

  return (
    <>      
      <BasicLine data={data} />
    </>
  );
}

export default App;

/*
function App() 
{
  const [data, setData] = useState([10, 20, 30, 40, 50, 60, 70, 80]);
  const updateData = useCallback(() => 
  {
    const count = 5 + Math.round(Math.random() * 15);
    const values = [];
    for (let i = 0; i < count; i++) 
    {
      values[i] = 10 + Math.round(Math.random() * 70);
    }
    setData(values);
  }, []);

  useEffect(() => 
  {
    const id = setInterval(updateData, 1000);
    return () => clearInterval(id);
  }, [])

  return (
    <>
      <button onClick={updateData}>Update Data</button> 
      <Circles data={data} />
    </>
  );
}

export default App;

/*import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import * as d3 from 'd3';

const Chart = () =>
{
  let containerRef = useRef(null);

  let size = 500;    
  let svg = d3.select(containerRef.current)
              .append('svg')
              .attr('width', size)
              .attr('height', size);
  let rect_width = 95;
  svg.selectAll('rect')
      .data([1,2,3])
      .enter()
      .append('rect')
      .attr('x', (d, i) => this.dataset.length + i*(rect_width + this.dataset.length))
      .attr('y', d => size - d)
      .attr('width', rect_width)
      .attr('height', d => d)
      .attr('fill', 'teal');
}


const App = () => <div ref={containerRef}></div>;

export default App;

/*class App extends React.Component 
{  
  constructor(props)
  {
    super(props);
    this.myRef = React.createRef();
    this.dataset = [100, 200, 300, 400, 50, 450];
 
  }
  componentDidMount()
  {
    let size = 500;
    
    let svg = d3.select(this.myRef.current)
                .append('svg')
                .attr('width', size)
                .attr('height', size);
    let rect_width = 95;
    svg.selectAll('rect')
       .data(this.dataset)
       .enter()
       .append('rect')
       .attr('x', (d, i) => this.dataset.length + i*(rect_width + this.dataset.length))
       .attr('y', d => size - d)
       .attr('width', rect_width)
       .attr('height', d => d)
       .attr('fill', 'teal');
  }
 render()
 {
  return (
    <div ref={this.myRef}>
      
    </div>
  );
 } 
}*/

/*

const Clock = () => 
{
    const [theX, setX] = useState('');
    const timer = () => 
    {
      axios.get('http://localhost/trials/json_server.php').then((res) => 
      { 
        console.log(res.data);
        setX(res.data.x);
      });
    }

    useEffect(() => 
    {
        const id = setInterval(timer, 1000);
        return () => clearInterval(id);
    },[theX]);

    return <div>{theX}</div>;
};

const App = () => <Clock />;

export default App;*/