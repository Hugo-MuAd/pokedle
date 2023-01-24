
import { Input, Layout } from 'antd';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import CSVReader from './components/csvReader'


const { Content } = Layout;
const { Search } = Input;
function App() {
  return (
    <Layout>
      <Header/>
      <Content>
        <Search size="large"/>
      </Content>
      <CSVReader/>
      <Footer/>
    </Layout>
  );
}

export default App;
