import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import LoginForm from "./compo/Login";
import RegistrationForm from "./compo/Register";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/login"
          element={(
            <motion.div
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100vw", opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <LoginForm />
            </motion.div>
          )}
        />
        <Route
          path="/"
          element={(
            <motion.div
              initial={{ x: "100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100vw", opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <RegistrationForm />
            </motion.div>
          )}
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      
      {/* Animated Routes */}
      <AnimatedRoutes />

    </BrowserRouter>
  );
}
