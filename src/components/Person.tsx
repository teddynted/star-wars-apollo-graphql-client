
import {Layout} from './layout/BaseLayout';
import {ViewPerson} from './ViewPerson';

const PersonView = () => {
    return (
        <Layout>
            <ViewPerson personName='romantic' />
        </Layout>
    );
}

export default PersonView;