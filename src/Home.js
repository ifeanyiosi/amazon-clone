import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
         <div className="home-container">
            {/* <img className='home_image' src="https://i.ytimg.com/vi/RsumuJ-MxjM/maxresdefault.jpg" alt="" /> */}

            <div className="home_row">
                <Product
                title= "Playstation 5"
                price={360000}
                image= "https://m.media-amazon.com/images/I/61W3QAWieSL._AC_SL1500_.jpg"
                rating={5}
                />
                <Product
                title="Hisense 55A6G 55-Inch 4K Ultra HD Android Smart TV with  Alexa Compatibility (2021 Model)"
                price={654250}
                image= "https://cdn.shopify.com/s/files/1/0523/8439/9556/products/32_40_43A4G-Product_Page_Page_1400x830-1_2048x2048.jpg?v=1630923369"
                rating= {4}
                />

            </div>

            <div className="home_row">
                <Product
                title= "Samsung SRF9700BFH 810L Family Hub French Door Fridge"
                price= {2700000}
                image= "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/523201-Product-1-I-637741143758955129_1080x.jpg"
                rating={4}
                />

                <Product
                title="Boston WH01 Electric Fireplace 79inch TV Stand"
                price= {242500}
                image= "https://cdn.shopify.com/s/files/1/2781/6416/products/black_87a03b6c-b3ee-4b9e-b99f-9ccd200ecad0_large.jpg?v=1606088039"
                rating={5}
                />

                <Product
                title= "Alienware x17 R1, 17.3 inch FHD 360Hz Non-Touch Gaming Laptop - Intel Core i7-11800H, 16GB DDR4 RAM, 1TB SSD, NVIDIA GeForce RTX 3060 6GB GDDR6"
                price= {1080000}
                image= "https://m.media-amazon.com/images/I/71gWQYhqlqL._AC_UY218_.jpg"
                rating={5}
                />

            </div>

            <div className="home_row">
                <Product
                title= "Rolex Wrist Watch"
                price = {5000000}
                image = "https://cdn.shopify.com/s/files/1/1468/9008/products/WatchGuyNYC_RN824_Rolex_Datejust_28_Chocolate_Dial_Fluted_Bezel_Jubilee_Ladies_Watch_279171_59e8032b-4b76-40ba-b7e7-057508096e9b_300x.jpg?v=1585151385"
                rating={5}
                />

            </div>

         </div>
        </div>
  )
}

export default Home