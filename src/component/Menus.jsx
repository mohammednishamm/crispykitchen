import React from 'react'
import data from '../Data';
// import {data} from '../Data'
function Menus() {
    return ( 

        
        <div className='mian11'>
         
   
           {data.map((item)=>
            <div className='special'>
              <div className='raj'>  <img className='food-img' src={item.img} alt="" /></div>
                <div className='dollar'><h3 className='heading'>{item.name}</h3> <p className='dollar1'>{item.price}</p></div>
                <div className='ratingdiv'><p className='rating'>{item.rating}</p><img className='star' src="https://cdn-icons-png.flaticon.com/128/9715/9715468.png"/>
                <img className='star' src="https://cdn-icons-png.flaticon.com/128/9715/9715468.png"/>
                <img className='star' src="https://cdn-icons-png.flaticon.com/128/9715/9715468.png"/>
                <img className='star' src="https://cdn-icons-png.flaticon.com/128/9715/9715468.png"/>
                <img className='star' src='https://t4.ftcdn.net/jpg/05/70/03/51/240_F_570035168_rMxIeGIOmYqwJZcoQ5MWHvOdyoQVm0i3.jpg'/> <p className='review'>{item.review}</p>
             
                </div>

            </div>
            )}
                 
            {/* <div className='special'>
                <img className='food-img' src="https://www.tooplate.com/templates/2129_crispy_kitchen/images/lunch/farhad-ibrahimzade-MGKqxm6u2bc-unsplash.jpg" alt="" />
                <div className='dollar'><h3 className='heading'>Tooplate Soup</h3> <p className='dollar1'>$24.50</p></div>
                <div className='ratingdiv'><p className='rating'>3/5</p><img className='star' src="https://cdn-icons-png.flaticon.com/128/9715/9715468.png"/>
                <img className='star' src="https://cdn-icons-png.flaticon.com/128/9715/9715468.png"/>
                <img className='star' src="https://cdn-icons-png.flaticon.com/128/9715/9715468.png"/>
                <img className='star' src="https://cdn-icons-png.flaticon.com/128/9715/9715468.png"/>
                <img className='star' src='https://t4.ftcdn.net/jpg/05/70/03/51/240_F_570035168_rMxIeGIOmYqwJZcoQ5MWHvOdyoQVm0i3.jpg'/> <p className='review'>50 Reviews</p>
             
                </div>

            </div>
                 
            <div className='special'>
                <img className='food-img' src="https://www.tooplate.com/templates/2129_crispy_kitchen/images/dinner/keriliwi-c3mFafsFz2w-unsplash.jpg" alt="" />
                <div className='dollar'><h3 className='heading'>Premium Steak</h3> <p className='dollar1'>$40</p></div>
                <div className='ratingdiv'><p className='rating'>3/5</p><img className='star' src="https://cdn-icons-png.flaticon.com/128/9715/9715468.png"/>
                <img className='star' src="https://cdn-icons-png.flaticon.com/128/9715/9715468.png"/>
                <img className='star' src="https://cdn-icons-png.flaticon.com/128/9715/9715468.png"/>
                <img className='star' src="https://cdn-icons-png.flaticon.com/128/9715/9715468.png"/>
                <img className='star' src='https://t4.ftcdn.net/jpg/05/70/03/51/240_F_570035168_rMxIeGIOmYqwJZcoQ5MWHvOdyoQVm0i3.jpg'/> <p className='review'>86 Reviews</p>
             
                </div>

            </div>
                 
            <div className='special'>
                <img className='food-img' src="https://www.tooplate.com/templates/2129_crispy_kitchen/images/dinner/farhad-ibrahimzade-ZipYER3NLhY-unsplash.jpg" alt="" />
                <div className='dollar'><h3 className='heading'>Seafood Set</h3> <p className='dollar1'>$86</p></div>
                <div className='ratingdiv'><p className='rating'>3.4/5</p><img className='star' src="https://cdn-icons-png.flaticon.com/128/9715/9715468.png"/>
                <img className='star' src="https://cdn-icons-png.flaticon.com/128/9715/9715468.png"/>
                <img className='star' src="https://cdn-icons-png.flaticon.com/128/9715/9715468.png"/>
                <img className='star' src="https://cdn-icons-png.flaticon.com/128/9715/9715468.png"/>
                <img className='star' src='https://t4.ftcdn.net/jpg/05/70/03/51/240_F_570035168_rMxIeGIOmYqwJZcoQ5MWHvOdyoQVm0i3.jpg'/> <p className='review'>40 Reviews</p>
             
                </div>

            </div>
            <div className='special'>
                <img className='food-img' src="https://www.tooplate.com/templates/2129_crispy_kitchen/images/breakfast/louis-hansel-dphM2U1xq0U-unsplash.jpg" alt="" />
                <div className='dollar'><h3 className='heading'>Burger Set</h3> <p className='dollar1'>$20.50</p></div>
                <div className='ratingdiv'><p className='rating'>4.3/5</p><img className='star' src="https://cdn-icons-png.flaticon.com/128/9715/9715468.png"/>
                <img className='star' src="https://cdn-icons-png.flaticon.com/128/9715/9715468.png"/>
                <img className='star' src="https://cdn-icons-png.flaticon.com/128/9715/9715468.png"/>
                <img className='star' src="https://cdn-icons-png.flaticon.com/128/9715/9715468.png"/>
                <img className='star' src='https://t4.ftcdn.net/jpg/05/70/03/51/240_F_570035168_rMxIeGIOmYqwJZcoQ5MWHvOdyoQVm0i3.jpg'/> <p className='review'>102 Reviews</p>
             
                </div>

            </div>
    
            <div className='special'>
                <img className='food-img' src="https://www.tooplate.com/templates/2129_crispy_kitchen/images/breakfast/brett-jordan-8xt8-HIFqc8-unsplash.jpg" alt="" />
                <div className='dollar'><h3 className='heading'>Healthy Soup</h3> <p className='dollar1'>$34.50</p></div>
                <div className='ratingdiv'><p className='rating'>3/5</p><img className='star' src="https://cdn-icons-png.flaticon.com/128/9715/9715468.png"/>
                <img className='star' src="https://cdn-icons-png.flaticon.com/128/9715/9715468.png"/>
                <img className='star' src="https://cdn-icons-png.flaticon.com/128/9715/9715468.png"/>
                <img className='star' src="https://cdn-icons-png.flaticon.com/128/9715/9715468.png"/>
                <img className='star' src='https://t4.ftcdn.net/jpg/05/70/03/51/240_F_570035168_rMxIeGIOmYqwJZcoQ5MWHvOdyoQVm0i3.jpg'/> <p className='review'>60 Reviews</p>
             
                </div>

            </div>
     */}

    
    </div>
     );
}

export default Menus;