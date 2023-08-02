//import logo from './logo.svg';
import { Header } from './header';
import './App.css';
import { Body } from './body';
import Hook from './statehook.js'
import Useeffect from './useeffect.js'
import Changingcolor from './changingcolor.js'
import Changingcolorif from './changingcolor.js'
function App() {
  return (
    <div>
      <Header />
      <Body />
      <Hook/>
      <Useeffect/>
      <Changingcolor/>
      <Changingcolorif/>
    </div>
  );
}

export default App;
