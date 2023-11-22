import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useEffect, useState } from 'react'
import "./table.scss"
import Pagination from '@mui/material/Pagination';
import Checkbox from '@mui/material/Checkbox';
import {MdDelete} from "react-icons/md"
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function BasicTable({ data, columns ,count}) {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [sorting, setSorting] = useState([])
  const [filtering, setFiltering] = useState('')
  const [userinfo, setUserInfo] = useState({
    id: [],
    response: [],
  });
  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { id } = userinfo;
      
    // console.log(`${value} is ${checked}`);
     
    // Case 1 : The user checks the box
    if (checked) {
      setUserInfo({
        id: [...id, value],
        response: [...id, value],
      });
    }
  
    // Case 2  : The user unchecks the box
    else {
      setUserInfo({
        id: id.filter((e) => e !== value),
        response: id.filter((e) => e !== value),
      });
    }
  };
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    enableMultiRowSelection:true,
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  })
    const deleteUser =async()=>{
    try {
      for(let i=0 ;i<userinfo.id.length;i++){
        await axios.delete(`/deleteuser/${userinfo.id[i]}`,
        {
            headers: {
              'Access-Control-Allow-Origin' : '*',
              'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
              'content-type':'application/json; charset=utf-8'
            }
              }).then((res)=>{
                window.location.reload();
               toast.success(res.data.message);
              })
          .catch((err)=>{
            console.log(err);         
        });
      }
        
      
        
    } catch (error) {
      console.log(error);
    }
  
   }
   useEffect(()=>{
    deleteUser();
   },[])
  return (
    <>
    <div className='w3-container' style={{marginBottom:"9px"}}>
     Total Count : <span style={{color:"#d93444"}}>{count}</span>
      <div className='header_table'>
      <input className='search_table' 
        type='text'
        value={filtering}
        onChange={e => setFiltering(e.target.value)}
      /><MdDelete onClick={deleteUser} className='delete_btn' style={{color:"#d93444",cursor:"pointer"}}/></div>
      <table  className='w3-table-all'>
        <thead >
          {table.getHeaderGroups().map(headerGroup => (
            <tr style={{backgroundColor:"#d93444",color:"white"}} key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {header.isPlaceholder ? null : (
                    <div>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {
                        { asc: '🔼', desc: '🔽' }[
                          header.column.getIsSorted() ?? null
                        ]
                      }
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
                    <Checkbox {...label} value={row.original._id} onClick={handleChange}/>
            </tr>
          ))}
        </tbody>
        
      </table>
      
    </div>
      <Pagination style={{border:"none",outline:"none"}} onClick={(e)=>{table.setPageIndex((e.target.textContent)-1)}} count={table.getPageCount()} color="primary"  />   
      <ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    </>
  )
}
