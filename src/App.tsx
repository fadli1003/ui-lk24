import ThemeProvider from "@/context/ThemeContext";
import MainRoutes from "@/routes/MainRoutes";
// import AdminRoutes from "@/routes/AdminRoutes";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <MainRoutes />
    </ThemeProvider> 
  );
}

export default App;
