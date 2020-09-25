import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar/SearchBar';
import DataTable from './DataTable/DataTable';
import img from './leftTopLogo_20200508.png';

// import Request from '../apis/Request';
import axios from 'axios';

const App = () => {

    //"https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141#43881141"
    // proxy solution
    const proxyurl = "https://cors-anywhere.herokuapp.com/";

    useState(async (username = "mickey wang", password = "123456") => {
        const testaxios = axios.create({
            baseURL: 'http://47.91.91.187/GivManage/api',
            })
        const url = `/login?account=${username}&password=${password}`; // site that doesn’t send Access-Control-*
        const logininfo = await testaxios.post(url, 
            );
        console.log("logged in");
        console.log(logininfo);

    });

    const [search, setSearch] = useState('');

    useEffect(() => {
        const searching = async () => {
            const url = `http://47.91.91.187/GivManage/api/inverter/getInverterInfo?serialNum=${search}`;
            const inverterdata = await axios.post( url, {
                
            });
            console.log("called inverter data");
            console.log(inverterdata);
        };
        console.log(search);
        if(search !== "") {
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
                <SearchBar onFormSubmit={setSearch} />
            </div>

            {/* <br></br>
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
            </div> */}
        </div>
    )

}

export default App;