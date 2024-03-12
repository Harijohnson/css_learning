// import React from 'react'

// function ProfileScreen(props) {
//     const { name } = props.location.state   
//   return (
//     <>
//     <section>
//           <h2>Profile</h2>
//       </section>
//       <section>
//               <figure>

//                   {/* <img src={x} alt='' ></img> */}
//               </figure>
//                 <figcaption>{name}</figcaption>
//           </section>
//     </>

//   )
// }

// export default ProfileScreen
// ProfileScreen.js
import React from 'react';

function ProfileScreen(props) {
  const name = props.location.state && props.location.state.name; // Validate props.location.state
  return (
    <>
      <section>
        <h2>Profile</h2>
      </section>
      <section>
        <figure>
          {/* <img src={x} alt='' ></img> */}
        </figure>
        <figcaption>{name}</figcaption>
      </section>
    </>
  );
}

export default ProfileScreen;
