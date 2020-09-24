import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar/SearchBar';
import DataTable from './DataTable/DataTable';
import img from './leftTopLogo_20200508.png';

const App = () => {

    return (

        <div>
            <div className="ui container">

                <div className="ui grid">
                    <div className="three wide column">
                        <img height="45" src={img}></img>
                    </div>

                    
                    <div className="three wide column">
                    <button>Logout</button>
                    </div>
                </div>

            </div>
            <div className="ui container">
                <SearchBar />
            </div>

            <br></br>
            <div className="ui container">
                <DataTable />
            </div>

            <br></br>
            <div className="ui container">
                <DataTable />
            </div>

            <br></br>
            <div className="ui container">
                <DataTable />
            </div>
        </div>
    )

}

export default App;