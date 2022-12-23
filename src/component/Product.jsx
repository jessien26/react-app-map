import './style.css'


function Product(props) {
    console.log(props.test)
    console.log(props.id)
    return (
        <div className="container">
            <div className='leftContainer'>
                <img className='img' src={props.image}></img>
            </div>
            <div className='rightContainer'>
                <div className="tagline">{props.name}</div>
                <div className="information">{props.desc}</div>
                <div className='priceButton'>
                    <div className="price">{props.price}</div>
                    <div>
                        <button className="button">
                            MUA NGAY
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Product;
  