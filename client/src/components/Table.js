import React, { Component } from 'react';
import { Data } from './data';

export default class Table extends Component {

    render() {
        return (
            <div className="table">
                <h1>Table</h1>
                <div>
                    {Data.map(companies => {
                        console.log(companies);
                        return(
                            <li key={companies.id}>
                                {companies.company}
                            </li>
                        )
                    })}
                </div>
            </div>
        )
    }
}


