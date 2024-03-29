import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from '../layout/home';
import Developer from '../components/developer';
import Mentor from '../components/mentor';
import Partner from '../components/partner';
import Choseus from '../section/choseus';
import Help from '../section/help';
import TopAbout from '../layout/topAbout';
import Motivation from '../section/motivation';

const About = () => {
  return (
    <>
      <Home>
        <Motivation />
        <Developer />
        <Partner />
        <Choseus />
        <Mentor />
        <Help />
      </Home>
    </>
  );
};

export default About;
