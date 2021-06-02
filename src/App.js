import './App.css';
import Topintro from './component/Topintro';
import curDot from 'cursor-dot';

const cursor = curDot({
  diameter: 80,
  borderWidth: 1,
  borderColor: '#fff',
  easing: 4,
  background: 'transparent',
  zindex: 99999999
})

cursor.over("body", {
  background: "#fff",
  zindex: 99999999
});


function App() {
  return (
    <div>
      <Topintro/>
    </div>
  );
}

export default App;
