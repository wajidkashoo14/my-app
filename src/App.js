import './App.css';
// import LoadMore from './components/LoadMore';
import TreeView from './components/treeView';
import menus from './components/treeView/data';
// import ImageSlider from './components/image-slider';
// import StarRating from './components/starSelection';
// import Accordian from './components/accordian';
// import RandomColor from './components/randomColor';

function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating /> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={'10'} /> */}
      {/* <LoadMore /> */}
      <TreeView menus={menus} />
    </div>
  );
}

export default App;
