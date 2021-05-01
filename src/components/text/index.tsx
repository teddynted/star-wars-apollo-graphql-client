import {Text} from '../../ui/Text';
import {IChildrenProps} from '../../interfaces/components';

export const TextEastBay = ({ children }: IChildrenProps) => {
    return <Text 
        fontWeight='700'
        fontSize='14px'
    >
        {children}
    </Text>;
};

export const TextLabel = ({ children }: IChildrenProps) => {
    return <Text 
        fontWeight='700'
        fontSize='14px'
        width='50px'
    >
        {children}
    </Text>;
};

export const TextEastBayTitle = ({ children }: IChildrenProps) => {
    return <Text 
        fontWeight='700'
        fontSize='26px'
        margin='20px 0'
    >
        {children}
    </Text>;
};

export const TextWhite = ({ children }: IChildrenProps) => {
    return <Text 
        fontWeight='800'
        fontSize='14px'
        color='#fff'
    >
        {children}
    </Text>;
};

export const FooterText = ({ children }: IChildrenProps) => {
    return <Text 
        fontWeight='400'
        fontSize='14px'
    >
        {children}
    </Text>;
};