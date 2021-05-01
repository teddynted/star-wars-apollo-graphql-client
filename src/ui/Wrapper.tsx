import styled from 'styled-components';
import {IWrapperProps} from '../interfaces/ui';

export const Wrapper = styled.div<IWrapperProps>`
    background-color: ${({ backgroundColor }) => backgroundColor || '#fff'};
    margin: ${({ margin }) => margin || 0};
    padding: ${({ padding }) => padding || 0};
    width: ${({ width }) => width || '100%'};
    height: ${({ height }) => height || '100%'};
    border: ${({ border }) => border};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;