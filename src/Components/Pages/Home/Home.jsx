import './Home.css'

import pic from '../../../assets/mypic.jpeg'

import { useTypewriter, Cursor } from 'react-simple-typewriter';

function Home() {

  const [text] = useTypewriter({
    words: ['Web developer.', 'UI/UX designer.'],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 25,
    deleteSpeed: 10,
  })

  return (
    <section className='home'>
      <h1>Home</h1>
      <div className='home-left'>
        <h1>Hi, I'm <span>VIKAS PRAJAPATI</span></h1>

        <h2>a <span>{text}</span>
          <Cursor cursorBlinking="false" CursorStyle=" | " cursorColor="ffd700" />
        </h2>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod amet itaque libero autem, dignissimos dolorem et reprehenderit neque laboriosam ea est facere rem, in consequuntur.</p>

        <button>Download CV</button>

      </div>
      <div className="home-right">
          <div className="profile-pic">
            <img src={pic} alt="Profile Picture" />
          </div>
      </div>
    </section>
  );
}

export default Home