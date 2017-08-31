import React from 'react';
import { Button } from 'react-bootstrap';
import ReactDataGrid from 'react-data-grid';
import DatePicker from 'react-day-picker/DayPickerInput'
import { Editors, Formatters, Toolbar } from 'react-data-grid-addons';
const { DropDownEditor, CheckboxEditor } = Editors;
const { DropDownFormatter } = Formatters;

class Grid extends React.Component {

    constructor(props) {
        super(props);

        this.defaultState = [{
            "id": 1,
            "title": "long title",
            "description": "3",
            "goal": "4",
            "startDate": "7",
            "isItTrue": false
        }];

        this.state = {

            data: this.defaultState

        };

        this.getNewValues = this.getNewValues.bind(this);
        this.handleGridRowsUpdated = this.handleGridRowsUpdated.bind(this);
        this.rowGetter = this.rowGetter.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);

        this.columnsEditMode = [
            {
                key: 'title',
                name: 'Title',
                editable: true
            },
            {
                key: 'description',
                name: 'Description',
                editable: true
            },
            {
                key: 'goal',
                name: 'Goal',
                editable: true
            },
            {
                key: 'startDate',
                name: 'Start Date',
                editable: true,
                editor: <DatePicker
                    name="dateChoice"
                    placeholder="DD/MM/YYYY"
                    format="DD/MM/YYYY"

                    onSelect={this.handleDateChange}/>
            },
            {
                key: 'isItTrue',
                name: 'is it true',
                editable: true,
                editor: <CheckboxEditor />
            }]
    }


    getNewValues() {
        return {
            data: this.state.data
        };
    }

    handleDateChange(d) {
        console.log(d);
    }

    handleGridRowsUpdated(e) {
        let allRows = this.state.data.slice();
        const rowId = e.fromRow;
        let rowsCopy = this.state.data[rowId];

        rowsCopy[e.cellKey] = e.updated[e.cellKey];
        allRows[rowId] = rowsCopy;
        this.setState({ data: allRows });
    }


    rowGetter(rowIdx) {
        return this.state.data[rowIdx];
    }



    render() {
        const { data } = this.state;
        return (
            <gridContainer>
                <ReactDataGrid
                    ref={node => this.grid = node}
                    enableCellSelect={true}
                    onGridRowsUpdated={this.handleGridRowsUpdated}
                    columns={this.columnsEditMode}
                    rowGetter={this.rowGetter}
                    rowsCount={data.length}
                    rowHeight={50}
                    minHeight={200}
                />
            </gridContainer>
        )
    }

}
export default Grid;