import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar/SearchBar';
import DataTable from './DataTable/DataTable';
import img from './leftTopLogo_20200508.png';

// import Request from '../apis/Request';
import axios from 'axios';

const App = () => {

    //"https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141#43881141"
    // proxy solution
    const proxyurl = "https://stark-fortress-14740.herokuapp.com/";

    useState(async (username = "mickey wang", password = "123456") => {

        const url = `http://47.91.91.187/GivManage/api/login?account=${username}&password=${password}`;
        const logininfo = await axios.post(proxyurl + url, {
            withCredentials: true
          }
            );
        console.log("logged in");
        console.log(logininfo);

    });

    const [search, setSearch] = useState('');

    useEffect(() => {
        const searching = async () => {
            const url = `http://47.91.91.187/GivManage/api/inverter/getInverterInfo?serialNum=${search}`;
            const inverterdata = await axios.post(proxyurl + url, {
                withCredentials: true
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