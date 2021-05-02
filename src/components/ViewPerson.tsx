import {IViewPersonProps} from '../interfaces/components';
import {GET_PERSON} from '../graphql';
import {WrapperComponent} from '../components/wrapper';
import {HeaderTitleCard} from '../components/card';
import {BodyText, TextLabel, FooterText} from '../components/text';
import {BackButton} from '../components/button';
import {ColorPalette} from '../theme';
import {useQuery} from "@apollo/client";
import {Link, Person, Wc, Height, FitnessCenter} from '@material-ui/icons';

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
                    <>
                        <Person fontSize="large" style={{color: ColorPalette.mountainMeadow}} />
                        <BodyText>
                            {person[0].name}
                        </BodyText>
                    </>
                </HeaderTitleCard>
                <HeaderTitleCard>
                    <>
                        <Wc style={{color: ColorPalette.cadetBlue}} />
                        <FooterText>
                            {person[0].gender}
                        </FooterText>
                    </>
                </HeaderTitleCard>
                <HeaderTitleCard>
                    <>
                        <Height style={{color: ColorPalette.cadetBlue}} />
                        <FooterText>
                            {person[0].height}
                        </FooterText>
                    </>
                </HeaderTitleCard>
                <HeaderTitleCard>
                    <>
                        <FitnessCenter style={{color: ColorPalette.cadetBlue}} />
                        <FooterText>
                            {person[0].mass}
                        </FooterText>
                    </>
                </HeaderTitleCard>
                <HeaderTitleCard>
                    <>
                        <Link style={{color: ColorPalette.cadetBlue}} />
                        <FooterText>
                            {person[0].homeworld}
                        </FooterText>
                    </>
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