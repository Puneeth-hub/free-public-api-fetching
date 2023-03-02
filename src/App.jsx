import React, { useState, useEffect } from 'react';


/*import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  console.log(data)

  useEffect(() => {
    axios.get("https://api.publicapis.org/entries").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div >
      {data.entries.map((each, index) => (
        <div >
        <p key={index}>{index}</p>
        <p >API: {each.API}</p>
        <p>LINK: {each.Link}</p>
        <p>CORS: {each.Cors}</p>
        <p>DESCRIPTION: {each.Description}</p>
        <p>CATEGORY: {each.Category}</p><br/>
        </div>
      ))}
    </div>
  );
}

export default App;

*/



























































function App() {
  const [data, setData] = useState([]);
  console.log(data)
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.publicapis.org/entries');
      const data1 = await response.json();
      

      setData(data1);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.entries.map((each, index)=>(
        <>
        <p key={index}>{index}</p>
        <p>{each.API}</p>
        </>
        ))}
    </div>
  );
}

export default App;
