import AppRoutes from './routes/AppRoutes';

import Logo from './components/Logo/logo';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
      <Logo />
    </div>
  );
}

export default App;
