import React, { useEffect, useState } from 'react';
//import style from './myCollection.scss';
import profileProfPic from '../../assets/images/profile/profileProfPic.png';
import yellowTick24px from '../../assets/images/collection/yellow-tick-24px.svg';
import shareIcon from '../../assets/images/collection/shareIcon.svg';
import ellipsisV from '../../assets/images/collection/ellipsis-v.svg';
import pennant from '../../assets/images/collection/pennant.svg';
import transferIcon from '../../assets/images/collection/transferIcon.svg';
import listIcon from '../../assets/images/collection/listIcon.svg';
import offerIcon from '../Profile/assets/bestOfferIcon.svg';
import selectIcon from '../Profile/assets/selectIcon.svg';
import hideIcon from '../Profile/assets/hideIcon.svg';
import copyIcon from '../Profile/assets/copyIcon.svg';
import settingsIcon from '../Profile/assets/settingsIcon.svg';
import copyClickIcon from '../../assets/images/copyIcon.svg';
import noItemfoundImage from '../../assets/images/collection/noItemfoundImage.svg';
import { DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, TabContent, TabPane, UncontrolledDropdown } from 'reactstrap';
import classnames from 'classnames';
import MyCollectionData from './MyCollectionData';
//import './myCollection.scss';
import '../../assets/scss/mycollecion_mint.scss';
import { useNavigate } from 'react-router-dom';


import { useCollectionListMutation } from '../../store/Endpoint';
import { useAccount } from 'wagmi';


export const MyCollection = () => {
  const { address, isConnected } = useAccount()

  const navigate = useNavigate()
  const [collectionList, { isError, isLoading, isSuccess, data }] = useCollectionListMutation()

  const getList = async () => {

    const addr = address

    if (!addr) {
      return
    }

    const result = await collectionList({
      address: addr
    }).unwrap();
    console.log('result3333', result)
  }

  useEffect(() => {
    getList()
  }, [])
    return (
      <div className=''>
        <div className="row">
          <div className="col-12 d-flex align-items-center">
            <h3 className="collectionSecHeading">My Collections</h3>
            <button className='btn gradientBtn ml-auto' onClick={() => navigate('/createcollection')} >Create Collection</button>
          </div>

          <div className="col-12">
            <div className="table-responsive">
              <MyCollectionData data={data?.data}/>
            </div>
            {/* <div className='noItemFound'>
              <div className='text-center'>
                  <img src={noItemfoundImage} alt="noItemfoundImage" className='img-fluid'/>
              </div>
              <div className='nofounttxt mb-4'>
                  No items were found. Try to broaden your search.
              </div>
              <div>
                <button className='applyBtn'>Apply</button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
};

export default MyCollection;