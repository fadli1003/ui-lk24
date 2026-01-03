import "./App.css";
import { ThemeProvider } from "@/context/ThemeContext";
import MainRoutes from "@/routes/MainRoutes";

function App() {
  return (
    <ThemeProvider>
      <MainRoutes />
    </ThemeProvider> 
  );
}

export default App;
