import { HashRouter as Router , Route , Routes } from 'react-router-dom'
import HomeScreen from "./screens/HomeScreen"
import Header from './components/Header'
import Footer from './components/Footer'
import ProfileScreen from "./screens/ProfileScreen"




function App() {
  return (
    <Router>
      <Header />
          <main>
              <Routes>
                <Route   path="/"   Component={HomeScreen} exact  />
                <Route   path="profile/"   Component={ProfileScreen}   />
              </Routes>
          </main>
      <Footer />
      </Router>
  );
}

export default App;
