import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar/SearchBar';
import DataTable from './DataTable/DataTable'
import img from './leftTopLogo_20200508.png';
import Routers from './Route.js';

// import Request from '../apis/Request';
import axios from 'axios';

const App = () => {

    const [results, setResults] = useState([]);
    const [resultsDevice, setResultsDevice] = useState([]);
    const [search, setSearch] = useState('');

    //"https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141#43881141"
    // proxy solution
    // const proxyurl = "https://stark-fortress-14740.herokuapp.com/";

    // axios.defaults.withCredentials = true;
    useState(async () => {



    });


    useEffect(() => {
        const searching = async () => {
            await axios({
                method: 'get',
                url: 'https://api.octopushome.net/api/v1/user',
                headers: {
                    'Authorization': search,
                },
                data: {
                }
              }).then(JSONresults => {
                setResults(JSONresults.data);
              });
    
    
    
            await axios({
                method: 'get',
                url: 'https://api.octopushome.net/api/v1/brands/12/devices',
                headers: {
                    'Authorization': search,
                },
                data: {
                }
              }).then(JSONresultsDevice => {
                setResultsDevice(JSONresultsDevice.data.content);
              });
        };
        // console.log(search);
        if (search !== "") {
            searching();
        };
    }, [search]);

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
                <SearchBar onFormSubmit={setSearch}/>
            </div>

            <br></br>
            <div className="ui container">
                <DataTable input={results} input2={resultsDevice}/>
            </div>
{/* 
            <br></br>
            <div className="ui container">
                <DataTable />
            </div>

            <br></br>
            <div className="ui container">
                <DataTable />
            </div> */}
            
        </div >

    )

}

export default App;