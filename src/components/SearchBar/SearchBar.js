import React, { useState, useEffect } from 'react';


const SearchBar = ( {onFormSubmit}) => {

    const [searchTerm, setSearchTerm] = useState('');


    const onSubmit = event => {
        event.preventDefault();
        onFormSubmit(searchTerm);
    }

    return (
        <div className="search-bar ui segment">
            <form className="ui form">
                <div className="field">

                    <label>Search Fields</label>

                    <div className="ui grid">

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
                                onChange={(event) => { setSearchTerm(event.target.value); }
                                }
                            ></input>
                        </div>

                        <div className="two wide column">
                            <button  
                            onClick={onSubmit}
                            className="ui black basic button" >
                                <i className="search icon"></i>
                            </button>
                        </div>

                    </div>

                </div>
            </form>
        </div>

    )


}

export default SearchBar;