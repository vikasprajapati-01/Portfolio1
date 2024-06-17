import './Home.css'

import pic from '../../../assets/mypic.jpeg'

import { useTypewriter, Cursor } from 'react-simple-typewriter';

function Home() {

  const [text] = useTypewriter({
        words: ['Web developer.', 'UI/UX designer.'],
        loop: true,
        delaySpeed: 2000,
        typeSpeed: 40,
        deleteSpeed: 25,
      })

  return (
    <section className="home section grid">
      <img src={pic} alt="" className="home_img" />

      <div className="home_page">
        <div className="home_data">
          <h1 className="home_title">
            I'm  <span>Vikas Prajapati</span> <br />
            a  <span>{text}</span>
            <Cursor cursorBlinking="false" CursorStyle=" | " cursorColor="ffd700" />
          </h1>

          <p className="home_description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit tempore cum fugiat quae totam reiciendis perspiciatis nostrum, excepturi, sapiente alias fugit beatae rerum sunt atque, ea in? Cupiditate, dolore aliquam.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home