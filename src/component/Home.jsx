import React from 'react'
import Mainimg from './Mainimg';
import Special from './Special';
import Menus from './Menus';
import Center from './Center';
import Background from './Background';
import Ending from './Ending';
function Home() {
    return ( 
        <div>
            <Mainimg/>
            <Special/>
            <Menus/>
            <Center/>
            <Background/>
            <Ending/>
        </div>
     );
}

export default Home;