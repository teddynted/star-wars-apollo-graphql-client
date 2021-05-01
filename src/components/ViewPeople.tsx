import { Query } from 'react-apollo';
import List from './List';
import {IQueryResult, IViewPeopleProps} from '../interfaces/components';
import {GET_PEOPLE} from '../graphql';
import {WrapperComponent} from '../components/wrapper';

export const ViewPeople = ({ page, props }: IViewPeopleProps) => {
    return (<Query<IQueryResult> query={GET_PEOPLE} variables={{"page": page}}>
        {({ data }) => {
            if (!data) {
                return null;
            }
            return (
                <WrapperComponent>                    
                    <List props={props} people={data} />
                </WrapperComponent>
            );
        }}
    </Query>);
};