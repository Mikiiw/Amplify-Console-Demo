import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar/SearchBar';
import DataTable from './DataTable/DataTable'
import img from './leftTopLogo_20200508.png';
import Route from './Route.js';

// import Request from '../apis/Request';
import axios from 'axios';

const App = () => {

    //"https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141#43881141"
    // proxy solution
    const proxyurl = "https://stark-fortress-14740.herokuapp.com/";

    axios.defaults.withCredentials = true;
    //axios.defaults.exposedHeaders = 'Authorization'

    useState(async (username = "mickey wang", password = "123456") => {

        const url = `http://47.91.91.187/GivManage/api/login?account=GivEnergy Training 2&password=123456&session=123`;
        //     const logininfo = await axios.post( url );

        //     console.log("logged in");
        //   console.log(logininfo);

        // fetch( proxyurl + url, {
        //     method: 'POST',
        //     credentials: 'include',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     }

        // })
        //  const logininfo = await axios({
        //     method: 'get',
        //     url: 'https://api.octopushome.net/api/v1/user',
        //     headers: {
        //         'Authorization': 'Bearer eyJraWQiOiJTVEJYakFzNzd0elhJVWcwXC8zZ3lGN29sK1wvRUZuR0ZiOVwvbkxMVjdyM3dFPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJjZTM5NGI4My00YjY4LTQxYTItYjkzMS05YmVjZDI0OWU5YTgiLCJjb2duaXRvOmdyb3VwcyI6WyJVc2VycyJdLCJldmVudF9pZCI6IjEzYjVhOGM1LWNhMWYtNDA1NS1hYThlLTY1OTliNDViZWNmMCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2MDEzOTEzOTAsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTIuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0yX2VKVVhQU0ZmUSIsImV4cCI6MTYwMTQ2MjU1MSwiaWF0IjoxNjAxNDU4OTUxLCJqdGkiOiJhZDMxZGE4MC0yZmM1LTRhNDktYjQyYy0yOWEyMDk5OTkwMzkiLCJjbGllbnRfaWQiOiI3NjQ4OHZkOXUydGJzdWQxb2Rybm84NWxmciIsInVzZXJuYW1lIjoiY2UzOTRiODMtNGI2OC00MWEyLWI5MzEtOWJlY2QyNDllOWE4In0.UDK_gBHEg8PPAzl96XdQltcsKrup7HY5Fd2pM4owQb9tVkV4FBPwMqr_EkGoD6KURJNlQtc-YDXq7PLY2pGElhY9IpB-HqT8351UoNVywOAmFHBnr-Ad6f2t1utjC54XkHWih2vH9GM-mEuut8oe6tjk_cIDvvkhNkVr4UEF6UYel-T5ig_GjbOdSkw9cfI6HQLCCFj1_AFQFLLRG7x74w4s5gYWFAzPGrMA3u_z2wkcxk81lHSObdIzmaz7SK5NXESnV2g59qO7aX65J9cXqifSnZq22UAnN_WZwBcW3wTEKnQgUSs4c7Va2Y1FvZBXZ195dnC8X4Zjd4ODTQ94xg',
        //     },
        //     data: {
        //     }
        //   });
        const axiosInstance = axios.create({ baseURL: proxyurl + url });
        const createSession = async () => {
            console.log("create session");
            const authParams = {
                username: username,
                password: password
            };
            const resp = await axios.post(proxyurl + url, authParams);
            // const cookie = resp.headers["set-cookie"][0]; // get cookie from request
            // axiosInstance.defaults.headers.Cookie = cookie;   // attach cookie to axiosInstance for future requests
        };

        createSession();
    });



    const [search, setSearch] = useState('');

    useEffect(() => {
        const searching = async () => {
            const url = `http://47.91.91.187/GivManage/api/inverter/getInverterInfo?serialNum=${search}&session=123`;

            // const inverterdata = await axios.post( url);

            fetch(proxyurl + url, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                //   body: JSON.stringify({
                //     // account: 'yourValue',
                //     // password: 'yourOtherValue',
                //   })
            })
            console.log("called inverter data");
        };
        // console.log(search);
        if (search !== "") {
            searching();
        };
    }, [search]);

    return (

        <div>
            <Route path="/GivManage">
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
            </div>*/}
            </Route>
            
        </div >

    )

}

export default App;