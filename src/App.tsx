import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Chats from "./pages/Chats";
import NewProduct from "./pages/NewProduct";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="chats" />} />
              <Route path="chats" element={<Chats />} />
              <Route path="newproduct" element={<NewProduct />} />
            </Route>
            <Route path="login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
