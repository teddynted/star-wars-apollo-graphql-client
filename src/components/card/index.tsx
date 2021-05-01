import {Card} from '../../ui/Card';
import {IChildrenProps} from '../../interfaces/components';

export const CardComponent = ({ children }: IChildrenProps) => {
    return <Card
        border='solid 1px #f1f2f3'
        borderRadius='10px'
        backgroundColor='#fff'
    >
        {children}
    </Card>;
};

export const HeaderTitleCard = ({ children }: IChildrenProps) => {
    return <Card
        border='solid 1px #f1f2f3'
        borderRadius='10px'
        backgroundColor='#fff'
        boxShadow='none'
        width='100%'
    >
        {children}
    </Card>;
};

export const HeaderNavCard = ({ children }: IChildrenProps) => {
    return <Card
        border='solid 1px #f1f2f3'
        borderRadius='10px'
        backgroundColor='#fff'
        boxShadow='none'
        flexDirection='row'
        width='100%'
    >
        {children}
    </Card>;
};