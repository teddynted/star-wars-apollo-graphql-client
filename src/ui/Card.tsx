import styled from 'styled-components';
import {ICardProps} from '../interfaces/ui';
import {ColorPalette} from '../theme';

export const Card = styled.div<ICardProps>`
    background-color: ${({ backgroundColor }) => backgroundColor || ColorPalette.athensGray};
    margin: ${({ margin }) => margin || '10px 0'};
    padding: ${({ padding }) => padding || '10px 0'};
    width: ${({ width }) => width || '90%'};
    height: ${({ height }) => height || '100%'};
    box-shadow: ${({ boxShadow }) => boxShadow || `1px 1px #ccc`};
    border: ${({ border }) => border || 'none'};
    border-radius: ${({ borderRadius }) => borderRadius || 'none'};
    display: flex;
    flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
    justify-content: ${({ justifyContent }) => justifyContent || 'center'};
    align-items: ${({ alignItems }) => alignItems || 'center'};
`;