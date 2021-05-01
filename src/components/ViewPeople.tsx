import List from './List';
import {IViewPeopleProps} from '../interfaces/components';
import {GET_PEOPLE} from '../graphql';
import {WrapperComponent} from '../components/wrapper';
import {Navigation} from './Navigation';
import { useQuery } from "@apollo/client";

export const ViewPeople = ({ page, props }: IViewPeopleProps) => {
    const {loading, error, data} = useQuery(GET_PEOPLE, {
        variables:{page},
        //pollInterval: 70000,
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <WrapperComponent>  
            <> 
                <Navigation />                 
                <List props={props} people={data} />
            </>
        </WrapperComponent>
    );
};