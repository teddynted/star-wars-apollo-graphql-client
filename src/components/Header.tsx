import {TextEastBayTitle, TextEastBay, TextLabel} from '../components/text';
import {HeaderTitleCard, HeaderNavCard} from '../components/card';
import {NextButton, PreviousButton} from '../components/button';
import { useSelector } from 'react-redux';

export const Header = () => {
    const { page } = useSelector((state: any) => state.paginationReducer);
    return <>
        <HeaderTitleCard>
            <TextEastBayTitle>Star Wars API</TextEastBayTitle>
        </HeaderTitleCard>
        <HeaderNavCard>
            <>
                <PreviousButton>
                    <TextEastBay>Prev</TextEastBay>
                </PreviousButton>
                <TextLabel>{page}</TextLabel>
                <NextButton>
                    <TextEastBay>Next</TextEastBay>
                </NextButton>
            </>
        </HeaderNavCard>
    </>
};