import './App.css';
import Posts from './Component/Posts/Posts';

const ANAKIN_IMAGE = 'https://i1.sndcdn.com/avatars-000560486658-t1txpn-t240x240.jpg';
const RAY_IMAGE = 'https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale';

function App() {
  return (
    <div className='fon'>
          <div className="App">
            <Posts
        author={{
          name: "Anakin Skywalker",
          photo: ANAKIN_IMAGE,
          nickname: "@dart_vader",
        }}
        content="WTF?  Who is Ray?  Why she is Skywalker?  Luke...?"
        image={RAY_IMAGE}
        date={" 26 лютого."}
      />
    </div>
    </div>
  );
}

export default App;
