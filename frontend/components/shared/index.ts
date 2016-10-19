import baseComponent from './component/baseComponent';
import storeComponent from './component/storeComponent';
import authorizedComponent from './component/authorizedComponent';

export var DefaultComponent: __React.ComponentClass<any> = baseComponent;
export var StoreComponent: __React.ComponentClass<any> = storeComponent;
export var AuthorizedComponent: __React.ComponentClass<any> = authorizedComponent;

export var SingleSelect = <T>(id: T, items: T[]): T[] => {
    let [ item ] = items;
    if (!!item && item === id) {
        return [];
    } else {
        return [ id ];
    }
};

export var MultipleSelect = <T>(id: T, items: T[]): T[] => {
    let selectedItems = [ ...items ];
    if (selectedItems.filter(u => u === id).length > 0) {
        selectedItems = [...selectedItems.filter(u => u !== id)];
    } else {
        selectedItems = [...selectedItems, id];
    }
    return selectedItems;
};
