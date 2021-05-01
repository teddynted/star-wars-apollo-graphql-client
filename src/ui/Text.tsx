import styled from "styled-components";
import {ITextProps} from '../interfaces/ui';
import {ColorPalette} from '../theme';

export const Text = styled.p<ITextProps>`
    color: ${({ color }) => color || ColorPalette.eastBay};
    font-size: ${({ fontSize }) => fontSize || '12px' };
    margin: ${({ margin }) => margin || 0};
    padding: ${({ padding }) => padding || 0};
    width: ${({ width }) => width || 'auto'};
    border: ${({ border }) => border || 'none'};
    font-weight: ${({ fontWeight }) => fontWeight || 'light'};
`;