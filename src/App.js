import { useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import Loader from './components/Loader/Loader';
import Navbar from './components/Navbar/Navbar';

function App() {
    const [user , setUser] = useState(null)
    const [isLoading , setIsLoading] = useState(false)
    const [isDataFetched, setIsDataFetched] = useState(false)

  const get_data = () =>{
    setIsLoading(true)
      fetch('https://reqres.in/api/users?page=1')
      .then((response) => response.json())
      .then((data) => {
        setUser(data.data)
        setIsDataFetched(true)
        setIsLoading(false)
});

  }

  return (
    <div className="App">
      <Navbar get_data={get_data}/>
      {!isDataFetched && <p> click on the button right at the corner to get the users data</p>}
      <div className='user-grid'>
        {isLoading && <Loader/>}
      {isDataFetched && user.map((row) => <Card key={row.id} {...row}/> )  }    
      </div>
    </div>
  );
}

export default App;
