import styled from "styled-components";
import {IButtonProps} from '../interfaces/ui';
import {ColorPalette} from '../theme';

export const Button = styled.a<IButtonProps>`
    background-color: ${({ backgroundColor }) => backgroundColor || ColorPalette.mountainMeadow};
    color: ${({ color }) => color || ColorPalette.white};
    padding: ${({ padding }) => padding || '5px'};
    margin: ${({ margin }) => margin || '5px 0'};
    display: ${({ display }) => display || 'block'};
    cursor: ${({ cursor }) => cursor || 'pointer'};
    width: ${({ width }) => width || '100%'};
    border-radius: ${({ borderRadius }) => borderRadius || '0'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;