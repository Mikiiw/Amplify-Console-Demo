import React, { useState } from 'react';


const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="search-bar ui segment">
            <form className="ui form">
                <div className="field">

                    <label>Search Fields</label>

                    <div class="ui grid">

                        <div className="three wide column">
                            <select className="ui dropdown">
                                <option value="1">Inverter</option>
                                <option value="0">User</option>
                            </select>
                        </div>

                        <div className="three wide column">
                        <select className="ui dropdown">
                                <option value="0">All</option>
                                <option value="1">Firmware</option>
                                <option value="2">Bat Cell Data</option>
                                <option value="3">Meter Data</option>
                                <option value="4">System Data</option>

                            </select>
                        </div>

                        <div className="eight wide column">
                            <input
                                type="text"
                                value={searchTerm}
                            ></input>
                        </div>

                        <div className="two wide column">
                            <button className="ui black basic button" >
                                <i class="search icon"></i>
                            </button>
                        </div>

                    </div>

                </div>
            </form>
        </div>

    )


}

export default SearchBar;