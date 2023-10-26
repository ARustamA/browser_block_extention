import { HomePage } from "@/pages/home.page";
import { AppProvider } from "./app-provider";
import { NotAuthPage } from "@/pages/not-auth.page";

export function App() {
  return (
    <AppProvider>
      <NotAuthPage />
      <HomePage />
    </AppProvider>
  );
}
