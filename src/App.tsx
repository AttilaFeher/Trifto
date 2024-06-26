import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import ProtectedRoute from './components/ProtectedRoute';
import AppLayout from './components/AppLayout';
import Chats from './pages/Chats';
import Products from './pages/Products';
import NewProduct from './pages/NewProduct';
import ChatMessages from './features/chats/ChatMessages';
import Login from './pages/Login';
import Product from './pages/Product';
import NewChat from './features/chats/NewChat';

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
              <Route index element={<Navigate replace to="products" />} />
              <Route path="chats" element={<Chats />}>
                <Route path=":chatId" element={<ChatMessages />} />
                <Route path="new/:userId" element={<NewChat />} />
              </Route>
              <Route path="products/new" element={<NewProduct />} />
            </Route>
            <Route element={<AppLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Login />} />
              <Route path="products" element={<Products />}>
                <Route path=":productId" element={<Product />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'bg-neutral-50',
            color: 'bg-neutral-700',
          },
        }}
      />
    </div>
  );
}

export default App;
