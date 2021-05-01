import {TextEastBay, TextLabel} from './text';
import {HeaderNavCard} from './card';
import {NextButton, PreviousButton} from './button';
import { useSelector } from 'react-redux';

export const Navigation = () => {
    const { page } = useSelector((state: any) => state.paginationReducer);
    return(
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
    );
};