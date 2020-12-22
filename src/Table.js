import React, {Component} from 'react'

class Table extends Component {
    render (){
        return(
            <table>
                <thead>
                    <tr>
                        <th>Names</th>
                        <th>States</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Charlie</td>
                        <td>Janitor</td>
                    </tr>
                    <tr>
                        <td>Mac</td>
                        <td>Bouncer</td>
                    </tr>
                    <tr>
                        <td>Dee</td>
                        <td>Aspiring actress</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Table