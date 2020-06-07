import React from 'react';
import { getItems, getSupplierList } from '../../Api/InventoryService';

import AddItems from './AddItems';
import EditItems from './EditItems';
import AddSuppliers from './AddSuppliers';

//import components
import Banner from '../../UI/Dashboard/Banner';
import ResultTable from './ResultTable';

import '../../../styles/packingslips.css';

export default class Inventory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Inventory",
            data: [],
            supplierList: [],
            itemCategoryList: ['Fruit', 'Vegetable', 'Spices'],

            //search data
            searchItemId: '',
            searchItemName: '',
            searchCategory: '',
            searchSupplierName: '',

            //edit data from child
            editDataFromChild: '',
            
            isLoading: false,
            isAddItem: false,
            isEditItem: false,
            isAddSupplier: false,
            isProcessing: false,
            searchResults: [],
        }

        this.toggleAddSupplierMode = this.toggleAddSupplierMode.bind(this);
        this.toggleEditItemMode = this.toggleEditItemMode.bind(this);
        this.toggleAddItemMode = this.toggleAddItemMode.bind(this);
        this.resetData = this.resetData.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        // Output
        // [
        //     {
        //     "id": 1,
        //     "itemName": "test1",
        //     "category": "2",
        //     "description": "test",
        //     "supplier_id": 1,
        //     "unitPrice": 234,
        //     "created_at": "2020-05-16T12:14:57.000000Z",
        //     "updated_at": "2020-05-16T12:14:57.000000Z",
        //     "supplier": {
        //     "id": 1,
        //     "supplierName": "tester_supplier",
        //     "created_at": "2020-05-16T12:14:51.000000Z",
        //     "updated_at": "2020-05-16T12:14:51.000000Z"
        //     }
        // ]
        this.resetData();
    }

    onChange(event) {
        this.setState( 
            { [event.target.name]: event.target.value }
        ); 
    }

    valueVerification(data) {
        if(data) {
            return data;
        } else {
            return null;
        }
    }

    resetData() {
        this.setState({ isLoading: true });
        getItems()
        .then(res => {
            this.setState({ data: res.data, isLoading: false, searchItemId: '', searchItemName: '', searchCategory: this.state.itemCategoryList[0], searchSupplierName: '' });
        })
        .catch(err => {
            console.log(err);
        })
        getSupplierList()
        .then(res =>{
            this.setState({ 
                supplierList: res.data
            });
        })
        .catch(err => {
            console.log(err);
        })
    }

    toggleAddItemMode() {
        this.state.isAddItem ? this.setState({ isAddItem: false }) : this.setState({ isAddItem: true })
    }

    toggleEditItemMode() {
        this.state.isEditItem ? this.setState({ isEditItem: false }) : this.setState({ isEditItem: true })
    }

    toggleAddSupplierMode() {
        this.state.isAddSupplier ? this.setState({ isAddSupplier: false }) : this.setState({ isAddSupplier: true })
    }

    editDataCallBack = (dataFromChild) => {
        this.setState({ editDataFromChild: dataFromChild });
    }

    onSearch(event) {
        event.preventDefault();
        this.setState({ isLoading: true });
        let targetData = this.state.data;
        const hasItemId = this.valueVerification(this.state.searchItemId);
        const hasItemName = this.valueVerification(this.state.searchItemName);
        const hasItemCategory = this.valueVerification(this.state.searchCategory);
        const hasSupplierName = this.valueVerification(this.state.searchSupplierName);

        if(hasItemId) {
            targetData = targetData.filter(d => {
                return d.id.toString() === hasItemId;
            });
        }
        if(hasItemName) {
            targetData = targetData.filter(d => {
                return d.itemName === hasItemName;
            });
        }
        if(hasItemCategory) {
            targetData = targetData.filter(d => {
                return d.category === hasItemCategory;
            });
        }
        if(hasSupplierName) {
            targetData = targetData.filter(d => {
                return d.supplier.supplierName === hasSupplierName;
            });
        }

        this.setState({ data: targetData, isLoading: false });
    }

    render() {
        let result = ''
        let categoryList =
        <select name="searchCategory" id="searchCategory" onChange= { this.onChange }>
          { this.state.itemCategoryList.map((data, index) => <option key={index} value={data}>{data}</option>) }
        </select>;

        if(!this.state.isEditItem && !this.state.isAddItem && this.state.isLoading) {
            result = 
            //Loading element
            <div><strong>Loading...</strong></div>;
        }

        //searchView
        const searchView = 
        <div className="filter">
        <div>
            <input type="button" onClick={ this.toggleAddItemMode } value="Add new item" />
            <input type="button" onClick={ this.toggleAddSupplierMode } value="Add new supplier" />
        </div>
        <h2>Search Item</h2>
        <form onSubmit={ this.onSearch }>
            <table>
                <tbody>
                    <tr>
                        <td>Item Number:</td>
                        <td><input type="number" id="searchItemId" name="searchItemId" onChange={ this.onChange }></input></td>
                    </tr>
                    <tr>
                        <td>Item Name:</td>
                        <td><input type="text" id="searchItemName" name="searchItemName" onChange={ this.onChange }></input></td>
                    </tr>
                    <tr>
                        <td>Category:</td>
                        <td>{categoryList}</td>
                    </tr>
                    <tr>
                        <td>Supplier Name:</td>
                        <td><input type="text" id="searchSupplierName" name="searchSupplierName" onChange={ this.onChange }></input></td>
                    </tr>
                </tbody>
            </table>
            <button type="submit">Submit</button>
            <input type="reset" onClick= { this.resetData }></input>
        </form>
        </div>;

        if(!this.state.isLoading && !this.state.isAddItem && !this.state.isEditItem && !this.state.isAddSupplier) {
            result = 
            //Table elements
            <ResultTable 
                data={this.state.data} 
                resetData={this.resetData}
                toggleEditItemMode={this.toggleEditItemMode}
                editDataCallBack={this.editDataCallBack}
                supplierList={this.state.supplierList}
                itemCategoryList={this.state.itemCategoryList}
            />
        }

        let inputField = searchView;
        if(this.state.isAddItem) {
            inputField = <AddItems 
                            toggleAddItemMode={this.toggleAddItemMode}
                            resetData={this.resetData}
                            supplierList={this.state.supplierList}
                            itemCategoryList={this.state.itemCategoryList}
                        />;
        }
        if(this.state.isEditItem) {
            inputField = <EditItems 
                            toggleEditItemMode={this.toggleEditItemMode}
                            data={this.state.editDataFromChild}
                            resetData={this.resetData}
                            supplierList={this.state.supplierList}
                            itemCategoryList={this.state.itemCategoryList}
                        />;
        }
        if(this.state.isAddSupplier) {
            inputField = <AddSuppliers 
                            toggleAddSupplierMode={this.toggleAddSupplierMode}
                            resetData={this.resetData}
                        />;
        }

        return (
            <div className="col-12 padding-fix">
                <Banner name={this.state.name} />
                <div className="wrapper">
                    { inputField }
                    { result }
                </div>
            </div>
        );
    }
}