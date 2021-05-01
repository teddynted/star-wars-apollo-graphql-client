import { ReactChildren, ReactChild } from 'react';
interface ICommon {
    name: string;
    height: string;
    mass: string;
    gender: string;
    homeworld: string;
}

export interface IPeople extends ICommon {}

export interface IPerson extends ICommon {}

export interface IQueryResult {
    people: IPeople;
}

export interface IViewPeopleProps {
    page: number;
    props?: any
}

export interface IViewPersonProps {
    personName: string;
}
export interface IViewList {
    people: any;
    props?: any
}

export interface IChildrenProps {
    children: ReactChild | ReactChildren
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    props?: any
}