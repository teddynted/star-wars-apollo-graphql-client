import {Layout} from './layout/BaseLayout';
import {ViewPerson} from './ViewPerson';
import { useLocation } from 'react-router-dom';

const PersonView = (props: any) => {
    const location = useLocation();
    const { state } : { state: any } = location;
    return (
        <Layout>
            <ViewPerson props={props} personName={state.personName} />
        </Layout>
    );
}

export default PersonView;