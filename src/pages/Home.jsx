import '../styles/Home.css'
import ReserveButton from '../components/ReserveButton'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

const Home = () => {
  console.log('Github Repo: https://github.com/ofins/mock-01')
  return (
    <div className="home--container">
      <LazyLoadImage src="./images/home-main.jpg" alt="bg-image" />
      {/* <h2>Tamsui Kickboxing</h2> */}
      <h2>功夫門人</h2>
      <ReserveButton />
    </div>
  )
}

export default Home