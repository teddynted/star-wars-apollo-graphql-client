
import {Layout} from './components/layout/BaseLayout';
import { useSelector } from 'react-redux';
import {ViewPeople} from './components/ViewPeople';
import ApiConfig from "./config/ApiConfig";
const App = (props: any) => {
    const { page } = useSelector((state: any) => state.paginationReducer);
    console.log(`${ApiConfig}`);
    console.log(`${page}`);
    return (
        <Layout>
            <ViewPeople page={page} props={props}  />
        </Layout>
    );
}

export default App;
