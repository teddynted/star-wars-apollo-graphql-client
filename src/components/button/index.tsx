import {Button} from '../../ui/Button';
import {IChildrenProps} from '../../interfaces/components';  
import {IStyleProps} from '../../theme';
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../../app/slices/pagination';

export const ButtonComponent = ({ children, props:{history} }: IChildrenProps) => {
    return <Button
        borderRadius='10px'
        padding='8px 0'
        onClick={() => {
            console.log(history);
            console.log('Route!');
            history.push("/person");
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