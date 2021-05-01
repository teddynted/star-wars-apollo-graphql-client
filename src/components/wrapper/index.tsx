import {Wrapper} from '../../ui/Wrapper';
import {IChildrenProps} from '../../interfaces/components';

export const WrapperComponent = ({ children }: IChildrenProps) => {
    return <Wrapper>{children}</Wrapper>;
};