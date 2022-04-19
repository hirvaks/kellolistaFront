import React, {useState, useEffect} from "react"
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-material.css'

import IconButton from '@mui/material/IconButton'
import InfoIcon from '@mui/icons-material/Info';



export default function Watachlist() {
    
    const [Watches, setWatches] = useState([])
    /* const [Watch, setWatch] = useState({
        brand: '',
        name: '',
        movementType: '',
        caseDiameter: '',
        price: ''
    }) */
    const [id, setId] = useState('')

    // const [open, setOpen] = useState(false)
 
    useEffect(() => {
        fetchWatches()
    }, []) // [] -> ajetaan vain ensimmäisellä renderöinnillä, ilman rajoitus joutuu ikuiseen looppiin
 
    const fetchWatches = () => {
        fetch("https://akseli-watch-list.herokuapp.com/api/watches")
        .then(response => response.json())
        .then(data => setWatches(data._embedded.watches))
     }

     const columns = [
        {field: 'brand', sortable: true, filter: true},
        {field: 'name', sortable: true, filter: true},
        {field: 'movementType', sortable: true, filter: true},
        {field: 'caseDiameter', headerName: 'Diameter' , sortable: true, filter: true, width: 120},
        {field: 'price', sortable: true, filter: true, width: 120},
        {headerName: '',
        width: 100,
        field: '_links.self.href',
        cellRenderer: params => 
        <IconButton color="info" onClick={() => showWatch(params.value.slice(-1))}>
            <InfoIcon/>
        </IconButton>}
        
    ]
    
    const showWatch = (id) => {
        // setOpen(true)
        setId(id)

        /* fetch(link).then(response => response.json())
        .then(data => setWatches({
            brand: data.brand,
            name: data.name,
            movementType: data.movementType,
            caseDiameter: data.caseDiameter,
            price: data.price})) */
    };
    

    return(
         <>
            <div className="ag-theme-material" style={{height: 600, width: '90%'}}>
                <AgGridReact
                    columnDefs={columns}
                    rowData={Watches}
                    pagination={true}
                    paginationPageSize={10}
                    suppressCellFocus={true}
                />     
            </div>
         </>
     )
}