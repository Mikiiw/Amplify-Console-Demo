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

   axios.defaults.withCredentials = true;
   //axios.defaults.exposedHeaders = 'Authorization'

    useState(async (username = "mickey wang", password = "123456") => {

    const url = `http://www.givenergy.cloud/GivManage/api/login?account=GivEnergy Training 2&password=123456`;
        const logininfo = await axios.post( url );

        console.log("logged in");
      console.log(logininfo);

    fetch( proxyurl + url, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
//   body: JSON.stringify({
//     // account: 'yourValue',
//     // password: 'yourOtherValue',
//   })
})

    });

    

    const [search, setSearch] = useState('');

    useEffect(() => {
        const searching = async () => {
            const url = `http://47.91.91.187/GivManage/api/inverter/getInverterInfo?serialNum=${search}`;
            
            const inverterdata = await axios.post( url);
            console.log("called inverter data");
            console.log(inverterdata);
        };
        // console.log(search);
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