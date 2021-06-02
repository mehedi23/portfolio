import './App.css';
import Topintro from './component/Topintro';
import Services from './component/Services';
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

cursor.over(".or-color", {
  color: "#F6AE2D",
});

cursor.over(".or-bg-color", {
  background: "#F6AE2D"
});


function App() {
  return (
    <div>
      <Topintro/>
      <Services/>
    </div>
  );
}

export default App;
