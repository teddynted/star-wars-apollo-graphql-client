interface ICommon {
    width?: string,
    border?: string,
    padding?: string,
    margin?: string,
    borderRadius?: string,
    backgroundColor?: string,
    flexDirection?: string,
    justifyContent?: string,
    alignItems?: string,
}

export interface ITextProps extends ICommon {
    color?: string,
    fontSize?: string,
    fontWeight?: string
}

export interface IButtonProps extends ICommon {
    color?: string,
    fontSize?: string,
    height?: string,   
    display?: string,
    cursor?: string
}
export interface ICardProps extends ICommon {
    height?: string,
    boxShadow?: string,
}
export interface IWrapperProps extends ICommon {
    height?: string,
    boxShadow?: string,
}

export interface IBaseLayout extends ICommon {}