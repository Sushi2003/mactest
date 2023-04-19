import React, {useEffect, useState} from 'react';

function APIComponent() {

  const [properties, setProperties] = useState([]);

  // Get the data from the localhost:4123/api endpoint

  useEffect(() => {
    (async function () {
      const response = await fetch('http://localhost:4123/properties');
      console.log('response: ', response);
      const data = await response.json();
      console.log(data);
      setProperties(data);
    }())
  }, []);



    return (
        <div>
            <h1>API Component</h1>
          <div>
            {properties.map(p => <div>{p.name}</div>)}
          </div>
        </div>
    );
}

export default APIComponent;