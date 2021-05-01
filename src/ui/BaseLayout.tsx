import styled from 'styled-components';
import {IBaseLayout} from '../interfaces/ui';

export const BaseLayout = styled.div<IBaseLayout>`
    padding: ${({ padding }) => padding || '5px'};
    margin: ${({ margin }) => margin || '5px auto'};
    border: ${({ border }) => border};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${({ width }) => width || '0'};
`;