import Navbar from "./components/Navbar";
import Home from './components/Home'

export default function Page() {
  return (
    <div className="container mx-auto">
      <Navbar/> 
      <Home />
    </div>
  );
}
