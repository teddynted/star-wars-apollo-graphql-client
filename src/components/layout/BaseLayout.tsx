import {BaseLayout} from '../../ui/BaseLayout';
import {IChildrenProps} from '../../interfaces/components';
import {Header} from './Header';
import {Footer} from './Footer';

export const Layout = ({ children }: IChildrenProps) => {
    return(
        <BaseLayout
            width='50%'
        >
            <Header />
            {children}
            <Footer />
        </BaseLayout>
    );
};