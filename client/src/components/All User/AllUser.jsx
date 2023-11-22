import React, { useEffect, useState } from 'react';
import './alluser.scss';
import SideNav from '../Admin/SideNav';
import axios from 'axios';
import BasicTable from './BasicTable';
const UserData = () => {
  const [Data, setData] = useState([]);
const [count,setCount] = useState();
  const callAboutPage = async () => {
    try {
      await axios.get(`/alldata`, {
        headers: {
          Accept: 'application/json',
          'content-type': 'application/json; charset=utf-8',
        },
        credentials: 'include',
      }).then((res)=>{
        setCount(res.data.data.length);
        setData(res.data.data);
      }).catch((err)=>{
        console.log(err)
      });
    } catch (error) {
      console.log(error);
    }
  };
const Columns = [
  
  {
    header: 'ID',
    accessorKey: '_id',
  },
  {
    header: 'Name',
    accessorKey: 'name',
  },
  {
    header: 'Gmail',
    accessorKey: 'gmail',
  },
  {
    header: 'Phone No',
    accessorKey: 'mobile',
  }, {
    header: 'Pin',
    accessorKey: 'pin',
  }, {
    header: 'Group',
    accessorKey: 'blood',
  }, {
    header: 'Mark',
    accessorKey: 'mark',
  },
  {
    header: 'Date',
    accessorKey: 'date',
  },
  
]

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <>
    <BasicTable count={count} data={Data} columns={Columns}/>
    </>
  );
};

const AllUser = () => {
  return (
    <>
      <SideNav comp={<UserData />} />
    </>
  );
};

export default AllUser;
