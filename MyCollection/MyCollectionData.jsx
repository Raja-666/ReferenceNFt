import React from 'react';

import '../Profile/listviewItem.scss';
import style from '../Profile/profile.module.scss';

import tblUserImg1 from '../../assets/images/collection/userImage.png';
import tblUserImg2 from '../../assets/images/itemIcons/deGods.png';
import tblUserImg3 from '../../assets/images/profile/profileProfPic.png';
// import tblUserImg5 from '../../assets/images/collection/tblUserImg5.png';
// import tblUserImg6 from '../../assets/images/collection/tblUserImg6.png';
// import tblUserImg7 from '../../assets/images/collection/tblUserImg7.png';
// import tblUserImg8 from '../../assets/images/collection/tblUserImg8.png';
// import tblUserImg9 from '../../assets/images/collection/tblUserImg9.png';
// import tblUserImg10 from '../../assets/images/collection/tblUserImg10.png';
// import tblUserImg11 from '../../assets/images/collection/tblUserImg11.png';
// import tblUserImg12 from '../../assets/images/collection/tblUserImg12.png';
import yellowTick from '../../assets/images/collection/yellow-tick_20px.svg';
import settingsIcon from '../../assets/images/mycollection/settingsIcon.svg';
import ethIconSm from '../../assets/images/ethIconSm.png';
import bnbIconSm from '../../assets/images/bnbIconSm.png';
import maticIconSm from '../../assets/images/maticIconSm.png';
import { useNavigate } from 'react-router-dom';

const tableImg = [
    {
        imgsrc: tblUserImg1,
        ownername: 'Azuki',
        verTick: yellowTick,
        coinIcon: ethIconSm,
        code: '248298'
    },
    {
        imgsrc: tblUserImg2,
        ownername: 'De Gods',
        verTick: '',
        coinIcon: maticIconSm,
        code: '532'
    },
    {
        imgsrc: tblUserImg3,
        ownername: 'My Collection',
        verTick: yellowTick,
        coinIcon: bnbIconSm,
        code: '123'
    }

]



const ListViewItem = ({ data }) => {
    console.log('daffdfdsf', data)
    const navigate = useNavigate()
    const handlecreateNft = id => {
        navigate('/createmint', { state: id })
    }

    const listViewrow = data?.map((item, index) =>
        <>
            <tr
            style={{cursor:'pointer'}}
            onClick={() => handlecreateNft(item._id)}>
                <td>
                    <div className='d-flex align-items-center'>
                        <div className='tblImg'><img src={item.logo} alt={`item.imgsrc`} /></div>
                        <div>
                            <div className='smTxt dark-text-secondary'>{item.code}</div>
                            <div className='fw-600'>{item.collectionName} <img src={item.verTick} height="18" className="ml-1" /> <img src={item.coinIcon} height="18" /></div>
                        </div>
                    </div>
                </td>
                <td>
                    <div>
                        <div className='smTxt dark-text-secondary'>Volume</div>
                        <div className='fw-600'>0 ETH</div>
                    </div>
                </td>
                <td>
                    <div>
                        <div className='smTxt dark-text-secondary'>Floor Price</div>
                        <div className='fw-600'>0 ETH</div>
                    </div>
                </td>
                <td>
                    <div>
                        <div className='smTxt dark-text-secondary'>Sales</div>
                        <div className='fw-600'>0</div>
                    </div>
                </td>
                <td>
                    <div>
                        <div className='smTxt dark-text-secondary'>Owners</div>
                        <div className='fw-600'>0</div>
                    </div>
                </td>
                <td>
                    <div>
                        <div className='smTxt dark-text-secondary'>Items</div>
                        <div className='fw-600'>0</div>
                    </div>
                </td>
                <td className='text-right'>
                    <button className={style.iconBtn}><img src={settingsIcon} /></button>
                </td>
            </tr>
        </>
    )

    // const rows = [];
    // for (let i = 0; i < 12; i++) {
    //     rows.push(

    //     );
    // }

    return (
        <>
            <div className='table-responsive'>
                <table className='table table-borderless listViewTable collapseTable'>
                    <tbody>
                        {listViewrow}
                        {/* <tr>
                            <td>
                                <label class="cuschk mr-2 mb-0" For="checkbx12">
                                    <input type="checkbox" id="checkbx12" />
                                    <span class="checkmark"></span>
                                </label>
                            </td>
                            <td>
                                <div className='d-flex'>
                                    <div><img src="" alt="" /></div>
                                    <div>Azuki #1249</div>
                                </div>
                            </td>
                            <td>--</td>
                            <td>3.7364 ETH</td>
                            <td>3.73 ETH</td>
                            <td>Ahmad Dokidis</td>
                            <td>22s</td>
                            <td>
                                <button className='btnBuynow'>3.7364 ETH</button>
                            </td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ListViewItem;