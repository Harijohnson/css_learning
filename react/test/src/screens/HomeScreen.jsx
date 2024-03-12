// import React from 'react'
// import hari from '../images/hari.jpeg'
// import hari2 from '../images/hari2.jpg'
// import rose from '../images/rose.jpg'
// import { Link } from 'react-router-dom'
// function HomeScreen() {

//   return (
//     <main>
//         <section className="grid">
//         <section>
//             <h2>Hari Photos</h2>
//             <figure>
//                 <Link to={{pathname:'/profile',state:{name:hari}}}>
//                 <img src={hari} alt="Hari Photo" title="hari photo" height="750" width="750"></img>
//                 <figcaption> &#8220;Hari&#8217; Photos&#8221;</figcaption>  
//                 </Link>
//             </figure>
//         </section>
//         <section>
//             <h2>Hari Photos 2</h2>
//             <figure>
//             <Link to={{pathname:'/profile',state:{name:hari2}}}>
//                 <img src={hari2} alt="Hari Photo2" title="hari photo2" height="750" width="750"></img>
//                 <figcaption>&#8220;Hari&#8217; Photos 2&#8221;</figcaption>
//             </Link>
//             </figure>
//         </section>
//         <section >
//             <h2>Rose Photos</h2>
//             <figure>
//             <Link to={{pathname:'/profile',state:{name:rose}}}>
//                 <img src={rose}  alt="Rose Photo" title="Rose photo" height="750" width="750"></img>
//                 <figcaption> &#8220;Rose&#8217; Photos&#8221;</figcaption>
//                 </Link>
//             </figure>
//         </section>
//     </section>
//     </main>
//   )
// }

// export default HomeScreen
// HomeScreen.js
import React from 'react';
import hari from '../images/hari.jpeg';
import hari2 from '../images/hari2.jpg';
import rose from '../images/rose.jpg';
import { Link } from 'react-router-dom';

function HomeScreen() {
  return (
    <main>
      <section className="grid">
        <section>
          <h2>Hari Photos</h2>
          <figure>
            <Link to={{ pathname: '/profile', state: { name: hari } }}>
              <img src={hari} alt="Hari Photo" title="Hari photo" height="750" width="750" />
              <figcaption>&#8220;Hari&#8217;s Photos&#8221;</figcaption>
            </Link>
          </figure>
        </section>
        <section>
          <h2>Hari Photos 2</h2>
          <figure>
            <Link to={{ pathname: '/profile', state: { name: hari2 } }}>
              <img src={hari2} alt="Hari Photo 2" title="Hari photo 2" height="750" width="750" />
              <figcaption>&#8220;Hari&#8217;s Photos 2&#8221;</figcaption>
            </Link>
          </figure>
        </section>
        <section>
          <h2>Rose Photos</h2>
          <figure>
            <Link to='/profile' state ={ { name: 'rose' } }>
              <img src={rose} alt="Rose Photo" title="Rose photo" height="750" width="750" />
              <figcaption>&#8220;Rose&#8217;s Photos&#8221;</figcaption>
            </Link>
          </figure>
        </section>
      </section>
    </main>
  );
}

export default HomeScreen;
