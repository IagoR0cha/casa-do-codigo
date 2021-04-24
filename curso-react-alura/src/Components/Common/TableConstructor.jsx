import React, {Component} from 'react';

export default class TableConstructor extends Component{

    // constructor(props){
    //     super(props);

    //     this.state = {
    //         headerItems: props.headerItems,
    //         bodyItems: props.bodyItems
    //     }
    // }

    render(){
        const { headerItems, bodyItems } = this.props;
        return (
            <table className="highlight centered">
                <TableHeaderConstructor headerItems={headerItems} />
                <TableBodyConstructor bodyItems={bodyItems}/>
            </table>
        )
    }
}

const TableHeaderConstructor = props => {
    const rowsHeader = props.headerItems.map((item, index) => {
        return (
            <th key={index}>{item.label}</th>
        )
    });

    return (
        <thead>
            <tr>
                {rowsHeader}
            </tr>
        </thead>
    )
}

const TableColumnBodyConstructor = props => {

    const columnItems = props.columnItems;

    const keysItems = Object.keys(columnItems);
    const column = keysItems.map((key, index) => {
        return(
            <td key={index}>{columnItems[key]}</td>
        )
    });

    return column;
}

const TableBodyConstructor = props => {
    const rows = props.bodyItems.map((item, index) => {
        return (
            <tr key={index}>
                <TableColumnBodyConstructor columnItems={item} />
            </tr>
        )
    });

    return (
        <tbody>
            {rows}
        </tbody>
    )
}