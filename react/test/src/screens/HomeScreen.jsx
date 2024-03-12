import React from 'react'
import hari from '../images/hari.jpeg'
import hari2 from '../images/hari2.jpg'
import rose from '../images/rose.jpg'

function HomeScreen() {
  return (
    <main>
        <section class="grid">
        <section>
            <h2>Hari Photos</h2>
            <figure>
                <img src={hari} alt="Hari Photo" title="hari photo" height="750" width="750"></img>
                <figcaption> &#8220;Hari&#8217; Photos&#8221;</figcaption>
            </figure>
        </section>
        <section>
            <h2>Hari Photos 2</h2>
            <figure>
                <img src={hari2} alt="Hari Photo2" title="hari photo2" height="750" width="750"></img>
                <figcaption>&#8220;Hari&#8217; Photos 2&#8221;</figcaption>
            </figure>
        </section>
        <section >
            <h2>Rose Photos</h2>
            <figure>
                <img src={rose}  alt="Rose Photo" title="Rose photo" height="750" width="750"></img>
                <figcaption> &#8220;Rose&#8217; Photos&#8221;</figcaption>
            </figure>
        </section>
    </section>
    </main>
  )
}

export default HomeScreen
