import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import DefaultNavbar from "@/examples/Navbars/DefaultNavbar";
import Footer from "@/examples/Footer";

import theme from "@/assets/theme";
import { UIControllerProvider } from "./context";
import { AuthProvider } from "./auth-context/auth.context";

export default function InertiaApp({ children }) {
  let user = localStorage.getItem("user");
  user = JSON.parse(user);

  return (
    <UIControllerProvider>
      <AuthProvider userData={user}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <DefaultNavbar />

          {children}

          <Footer />
        </ThemeProvider>
      </AuthProvider>
    </UIControllerProvider>
  )
}
