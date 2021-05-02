import {IViewList} from '../interfaces/components';
import {TextWhite} from '../components/text';
import {ButtonComponent} from '../components/button';

const List = ({ people, props }: IViewList) => {
    const cards = people?.people?.map((item: any, i: number) => 
        <ButtonComponent extraData={item.name} props={props} key={i}>
            <TextWhite>
                {item.name}
            </TextWhite>
        </ButtonComponent>
    );
    return cards;
};

export default List;