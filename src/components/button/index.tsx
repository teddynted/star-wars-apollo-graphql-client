import {Button} from '../../ui/Button';
import {IChildrenProps} from '../../interfaces/components';  
import {IStyleProps} from '../../theme';
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../../app/slices/pagination';

export const ButtonComponent = ({ children, props:{history}, extraData }: IChildrenProps) => {
    return <Button
        borderRadius='10px'
        padding='8px 0'
        onClick={() => {
            history.push({
                pathname: '/person',
                state: { personName: extraData }
            });
        }}
    >
        {children}
    </Button>;
};

export const NextButton = ({ children }: IChildrenProps) => {
    const dispatch = useDispatch();
    const { page } = useSelector((state: any) => state.paginationReducer);
    return <Button
        {...IStyleProps}
        onClick={() => {
            dispatch(changePage({ page: page + 1 }));
        }}
    >
        {children}
    </Button>;
};

export const PreviousButton = ({ children }: IChildrenProps) => {
    const dispatch = useDispatch();
    const { page } = useSelector((state: any) => state.paginationReducer);
    return <Button
        {...IStyleProps}
        onClick={() => {
            if( page > 1) {
                dispatch(changePage({ page: page - 1 }));
            }
        }}
    >
        {children}
    </Button>;
};

export const BackButton = ({ children, props:{ history } }: IChildrenProps) => {
    return <Button
        {...IStyleProps}
        width='50%'
        onClick={() => {
            history.push('/');
        }}
    >
        {children}
    </Button>;
};