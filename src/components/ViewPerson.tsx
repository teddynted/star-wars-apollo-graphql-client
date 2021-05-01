import {IViewPersonProps} from '../interfaces/components';
import {GET_PERSON} from '../graphql';
import {WrapperComponent} from '../components/wrapper';
import {HeaderTitleCard} from '../components/card';
import {TextEastBayTitle, TextLabel} from '../components/text';
import {BackButton} from '../components/button';

import {
    useQuery,
} from "@apollo/client";

export const ViewPerson = ({ personName, props }: IViewPersonProps) => {
    const {loading, error, data} = useQuery(GET_PERSON, {
        variables:{personName},
        //pollInterval: 70000,
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    const {person} = data;
    return (
        <WrapperComponent> 
            <>                   
                <HeaderTitleCard>
                    <TextEastBayTitle>
                        {person.name}
                    </TextEastBayTitle>
                </HeaderTitleCard>
                <HeaderTitleCard>
                    <BackButton props={props}>
                        <TextLabel>
                            Go Back
                        </TextLabel>
                    </BackButton>
                </HeaderTitleCard>
            </>
        </WrapperComponent>
    );
};