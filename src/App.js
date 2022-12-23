import logo from './logo.svg';
import './App.css';
import Product from './component/Product';
import {products} from './data/milk'

function App() {
  return (
    <div className="App">
      {products.map((item,index,array) => {
        return  <Product 
        name={item.name}
        desc={item.desc}
        price={item.price}
        image={item.image}
        ></Product>
      })}
     

    </div>
  );
}

export default App;
