import './App.scss';
import Header from './components/header/Header';
import MyRoutes from './layout/MyRoutes';
import Footer from './components/footer/Footer';
import { BasketPrivader } from './context/BasketContext';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
function App() {
  const queryClient = new QueryClient()

  return (
    <>
    <BasketPrivader>
    <QueryClientProvider client={queryClient}>
      <Header/>
      <MyRoutes/>
    </QueryClientProvider>
    </BasketPrivader>
    
    <Footer/>
    </>
  );
}

export default App;
