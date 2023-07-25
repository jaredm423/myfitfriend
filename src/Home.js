import Navigation from './Components/Navigation'
import WelcomeMsg from './Components/WelcomeMsg';
import Newsfeed from './Components/Newsfeed';

function Home () {
    return (
      <div className="App">
        <Navigation/>
        <WelcomeMsg/>
        <Newsfeed/>
      </div>
    );
  }
export default Home;