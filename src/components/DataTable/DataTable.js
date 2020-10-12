import React, {useState} from 'react';

const DataTable = ({input, input2}) => {
    
    if(input == "" || input2 == ""){
        return null;
    } else {
    return (
        <table id="example" className="ui celled table">
        <thead>
            <tr>
                <th>Email</th>
                <th>ID</th>
                <th>Address</th>
                <th>Inverter SN</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{input.email}</td>
                <td>{input.octopus.id}</td>
                <td>{input.octopus.home.address}</td>
                <td>{input2["0"].data.serial}</td>
            </tr>
        </tbody>
        {/* <tfoot>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
            </tr>
        </tfoot> */}
    </table>
    )
    }
}

export default DataTable;