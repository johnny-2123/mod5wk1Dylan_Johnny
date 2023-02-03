import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import { Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <h1>Hello from App</h1>

      <Route path='/components'>
        <GalleryNavigation galleries={harvardArt.records} />
      </Route>

    </div>
  )
}

export default App;
