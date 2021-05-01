
import {Layout} from './components/layout/BaseLayout';
import { useSelector } from 'react-redux';
import {ViewPeople} from './components/ViewPeople';

const App = (props: any) => {
    const { page } = useSelector((state: any) => state.paginationReducer);
    return (
        <Layout>
            <ViewPeople page={page} props={props}  />
        </Layout>
    );
}

export default App;
