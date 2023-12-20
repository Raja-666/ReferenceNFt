import React, { useState, useEffect } from 'react';
import style from './profile.module.scss';
import profileProfPic from '../../assets/images/profile/profileProfPic.png';
import yellowTick24px from '../../assets/images/collection/yellow-tick-24px.svg';
import shareIcon from '../../assets/images/collection/shareIcon.svg';
import ellipsisV from '../../assets/images/collection/ellipsis-v.svg';
import pennant from '../../assets/images/collection/pennant.svg';
import transferIcon from '../../assets/images/collection/transferIcon.svg';
import listIcon from '../../assets/images/collection/listIcon.svg';
import offerIcon from './assets/bestOfferIcon.svg';
import selectIcon from './assets/selectIcon.svg';
import hideIcon from './assets/hideIcon.svg';
import copyIcon from './assets/copyIcon.svg';
import settingsIcon from './assets/settingsIcon.svg';
import copyClickIcon from '../../assets/images/copyIcon.svg';
import Pencil from '../../assets/images/Pencil.svg';
import noProf from '../../assets/images/noProf.png';
import { DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, TabContent, TabPane, UncontrolledDropdown } from 'reactstrap';
import classnames from 'classnames';
import ProfileCollection from './Collected/profileItem';
import OffersProfileMain from './profileOffersMain';
import ActiveListing from './activeListing/profileActiveMain';
import AnalyticsProfileMain from './profileAnalyticsMain';
import DealsCollection from './deals/dealsMain';
import ProfileCreate from './Created/profileCreateMain';
import ProfileFavorite from './Favorites/profileFavoriteMain';
import ProfileActivity from './Activity/profileActivityMain';
import OfferMain from './offerReceived/profileOfferReceivedMain';
import OfferMade from './offerMade/profileOfferMadeMain';
import HiddenItems from './Hidden/HiddenItems';
import SettingsProfile from '../Settings/Profile';
import { useGetProfileMutation } from '../../store/ProfileEndpoint';
import { useNavigate } from 'react-router-dom';
import { useAccount } from 'wagmi';

export const ProfilePage = () => {  
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('1');

  const { address, isConnected } = useAccount();

  const [getProfileMutation] = useGetProfileMutation()

  const [profileData, setProfileData] = useState(null);
  const fetchProfileData = async () => {
    try {

      let addr = address;
      const res = await getProfileMutation({
        address: addr
      })

      console.log('fetched profile data:', res.data, addr)

      if (res?.data?.success) {
        setProfileData(res?.data?.data)
      } else {
        setProfileData({})
        console.error('Failed to fetch profile data');

      }

    } catch (error) {
      console.error('Error fetching profile data:', error);
    }
  };


  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }


  useEffect(() => {
    console.log('profileData:', 'res.data')

    fetchProfileData();
  }, [address]);



  console.log('profileDataprofileData', profileData)
  // URL.createObjectURL(profileData?.profileImage)

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-lg-2 text-center ml-auto">
            <div className={style.userDetails}>
              <div className="imgtag">
                <div className={style.editCnt} onClick={() => {
                  navigate('/settingsprofile', { state: 'update' })
                }}>
                  <img src={profileData && profileData?.profileImg || profileProfPic} alt="userImg" />

                  {/* <img src={noProf} alt="noprof" /> */}
                  <div className={style.editIconCnt}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.4062 2.78125C17.1875 3.5625 17.1875 4.8125 16.4062 5.59375L5.375 16.625L1.8125 17C1.34375 17.0625 0.9375 16.6562 1 16.1875L1.375 12.625L12.4062 1.59375C13.1875 0.8125 14.4375 0.8125 15.2188 1.59375L16.4062 2.78125ZM13.4375 7.15625L10.8438 4.5625L3.84375 11.5625H4.9375V13.0625H6.4375V14.1562L13.4375 7.15625ZM4.9375 15.6562L5.5625 15.0312V13.9375H4.0625V12.4375H2.96875L2.34375 13.0625L2.125 14.9062L3.09375 15.875L4.9375 15.6562ZM15.6875 4.90625C16.0938 4.5 16.0938 3.875 15.6875 3.46875L14.5312 2.3125C14.125 1.90625 13.5 1.90625 13.0938 2.3125L11.5312 3.875L14.125 6.46875L15.6875 4.90625Z" fill="#0A0A0B" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="userName">
                  {profileData && profileData?.userName || 'Loading...'}
                  <img
                    src={yellowTick24px}
                    alt="yellowTick24px"
                    className="ml-2"
                    style={{display:profileData && profileData?.status === 1 ? "" : 'none' }}
                  />
                </div>
              </div>
              <div className="text-center d-flex justify-content-center mb-3">
                <div className="userName d-flex">
                  {profileData && profileData?.userEmail || 'Loading...'}
                  <span className="mx-2">|</span>
                  <span>{profileData && profileData?.website || 'Loading...'}<img src={copyClickIcon} className="ml-2 hover" /></span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 order-lg-3 text-center text-lg-right">
            <div className={`justify-content-center justify-content-lg-end ${style.socialmediaBtnGrid}`}>
              <UncontrolledDropdown>
                <DropdownToggle className={style.iconBtn}>
                  <img src={shareIcon} alt="shareIcon" />
                </DropdownToggle>
                <DropdownMenu right className={style.dropdownMenu}>
                  <DropdownItem className='mb-2'>
                    <i class="fab fa-twitter-square mr-2"></i> Twitter
                  </DropdownItem>
                  <DropdownItem className='mb-2'>
                    <i class="fab fa-telegram mr-2"></i> Telegram
                  </DropdownItem>
                  <DropdownItem className='mb-2'>
                    <i class="fab fa-facebook mr-2"></i> Facebook
                  </DropdownItem>
                  <DropdownItem className='mb-2'>
                    <i class="fas fa-envelope mr-2"></i> Email
                  </DropdownItem>
                  <DropdownItem className='mb-2'>
                    <i class="fas fa-link mr-2"></i> Copy Link
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown>
                <DropdownToggle className={style.iconBtn}>
                  <img src={ellipsisV} alt="ellipsisV" />
                </DropdownToggle>
                <DropdownMenu right className={style.dropdownMenu}>
                  <DropdownItem>
                    <img src={pennant} alt="pennant" className='mr-2' /> Report
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

            </div>
          </div>
        </div>
      </div>
      <div className={`mb-4 ${style.borderbottom}`}></div>
      <div className='container'>
        <div className="row">
          <div className="col-lg-10 d-flex flex-wrap">
            <Nav tabs className={style.mycollectiontabs}>
              <NavItem>
                <NavLink className={classnames({ active: activeTab === '1' })} onClick={() => { toggle('1'); }}>
                  Collected
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={classnames({ active: activeTab === '2' })} onClick={() => { toggle('2'); }}>
                  Active Listings
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={classnames({ active: activeTab === '3' })} onClick={() => { toggle('3'); }}>
                  Created
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={classnames({ active: activeTab === '4' })} onClick={() => { toggle('4'); }}>
                  Deals
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={classnames({ active: activeTab === '5' })} onClick={() => { toggle('5'); }}>
                  Favorites
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={classnames({ active: activeTab === '6' })} onClick={() => { toggle('6'); }}>
                  Activity
                </NavLink>
              </NavItem>
            </Nav>
            <UncontrolledDropdown>
              <DropdownToggle className={`ml-2 mb-4 ${style.collectOfferBtn}`}>
                More
              </DropdownToggle>
              <DropdownMenu right className={style.dropdownMenu}>
                <DropdownItem onClick={() => { toggle('7'); }}>
                  Offers Received
                </DropdownItem>
                <DropdownItem onClick={() => { toggle('8'); }}>
                  Offers Made
                </DropdownItem>
                <DropdownItem onClick={() => { toggle('9'); }}>
                  Hidden
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
          <div className="col-lg-2 text-right">
            <button className={style.iconBtn}><img src={settingsIcon} alt="settingsIcon" /></button>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                {activeTab === "1" &&
                  <ProfileCollection />
                }
              </TabPane>
              <TabPane tabId="2">
                {activeTab === "2" &&
                  <ActiveListing />
                }
              </TabPane>
              <TabPane tabId="3">
                {activeTab === "3" &&
                  <ProfileCreate />
                }
                <h3>3</h3>
              </TabPane>
              <TabPane tabId="4">
                {activeTab === "4" &&
                  <DealsCollection />
                }
              </TabPane>
              <TabPane tabId="5">
                {activeTab === "5" &&
                  <ProfileFavorite />
                }
              </TabPane>
              <TabPane tabId="6">
                {activeTab === "6" &&
                  <ProfileActivity />
                }
              </TabPane>
              <TabPane tabId="7">
                {activeTab === "7" &&
                  <OfferMain />
                }
              </TabPane>
              <TabPane tabId="8">
                {activeTab === "8" &&
                  <OfferMade />
                }
              </TabPane>
              <TabPane tabId="9">
                {activeTab === "9" &&
                  <HiddenItems />
                }
              </TabPane>
            </TabContent>
          </div>
        </div>
      </div>


    </>
  );
};

export default ProfilePage;