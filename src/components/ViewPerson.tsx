import { Query } from 'react-apollo';
import {IQueryResult, IViewPersonProps} from '../interfaces/components';
import {GET_PERSON} from '../graphql';
import {WrapperComponent} from '../components/wrapper';
import {HeaderTitleCard} from '../components/card';
import {TextWhite} from '../components/text';
import {ButtonComponent} from '../components/button';

export const ViewPerson = ({ personName }: IViewPersonProps) => {
    return (<Query<IQueryResult> query={GET_PERSON} variables={{"name": personName}}>
        {({ data }) => {
            if (!data) {
                return null;
            }
            return (
                <WrapperComponent> 
                    <>                   
                        <HeaderTitleCard>
                            <TextWhite>
                                Data Display
                            </TextWhite>
                        </HeaderTitleCard>
                        <HeaderTitleCard>
                            <ButtonComponent>
                                <TextWhite>
                                    Go Back
                                </TextWhite>
                            </ButtonComponent>
                        </HeaderTitleCard>
                    </>
                </WrapperComponent>
            );
        }}
    </Query>);
};