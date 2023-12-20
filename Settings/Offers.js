import React, { useState } from 'react';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown, Modal, UncontrolledPopover, PopoverBody, UncontrolledTooltip } from 'reactstrap';
import angleDown from "../../assets/images/angleDown.svg";
import aiPfpClub from '../../assets/images/itemIcons/aiPfpClub.png';
import IconModal from '../../assets/images/IconModal.png';
import walletLoaderCnt from "../../assets/images/walletLoader.png";
import yellowTick from "../../assets/images/collection/yellow-tick_20px.svg";
import copyIcon from '../../assets/images/copyIcon.svg';
import logoImg from '../../assets/images/logoImg.png';
import coverImg from '../../assets/images/coverImg.png';
import Pencil from '../../assets/images/Pencil.svg';
import twitter from '../../assets/images/twitterNew.svg';
import instagram from '../../assets/images/instagram.svg';
import globe from '../../assets/images/globe.svg';
import infoIcon from '../../assets/images/infoIcon.svg';
import facebook from '../../assets/images/facebook.svg';
import twitterNew from '../../assets/images/twitterNew.svg';
import telegram from '../../assets/images/telegram-plane.svg';
import checkIcon from '../../assets/images/toast/checkIcon.svg';
import noItemfoundImage from '../../assets/images/collection/noItemfoundImage.svg';
import userImage from '../../assets/images/collection/userImage.png';
import deGods from '../../assets/images/itemIcons/deGods.png';
import tick from '../../assets/images/collection/yellow-tick_20px.svg';
import eth from '../../assets/images/ethIconSm.png';
import bnb from '../../assets/images/bnbIconSm.png';
//import '../MyCollection/myCollection.scss';
import '../../assets/scss/mycollecion_mint.scss';
import './Settings.scss';

export const SettingsOffers = () => {

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const CheckTick = () => {
    return (
    <>
      <svg className="ml-auto" width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.1953 0.46875C10.3125 0.351562 10.5 0.351562 10.5938 0.46875L11.2734 1.125C11.3672 1.24219 11.3672 1.42969 11.2734 1.52344L4.24219 8.55469C4.125 8.67188 3.96094 8.67188 3.84375 8.55469L0.703125 5.4375C0.609375 5.32031 0.609375 5.13281 0.703125 5.03906L1.38281 4.35938C1.47656 4.26562 1.66406 4.26562 1.78125 4.35938L4.03125 6.63281L10.1953 0.46875Z" fill="#55f764"/>
      </svg>
    </>
  )
}

    return (
      <>
        <div className="d-flex align-items-center mb-3">
          <h3 className="settingsHeading mb-0">Offers</h3>
          </div>
          <div className="createCollectionCard mb-3">
            <form className="w-100">
              <div className="form-row">
                <div className="col-12 mb-3">
                  <div className="freezeCnt">
                    <div>
                      <span className="formLabel">Offer Protection</span>
                      <p>Check for item trait changes and items flagged as stolen before a offer is accepted.</p>
                    </div>
                    <div className="ml-auto">
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                      </label>
                    </div>
                  </div>
                </div>

                <hr className="w-100" />

                <div className="col-12 mb-3">
                  <span className="formLabel">Set Minimum Offer</span>
                  <p className="greyTxt mb-3">Set a minimum offer for collections to ignore low offers.</p>
                  <button className="btn darkBtn">View My Offers</button>
                </div>                

                <div className="col-12">
                  <div className="borderedCnt offerRow mb-3">
                    <div className="row align-items-center w-100 mx-0">
                      <div className="col-md-8 col-lg-12 col-xl-8 d-flex flex-wrap align-items-center">
                        <img src={userImage} height="92" className="mr-2 mb-2" />
                        <div className="d-flex flex-column">
                          <h5 className="fs-16 fw-600 mr-2">Azuki <img src={eth} className="ml-2" /></h5>
                          <p className="fs-12 greyTxt">Floor Price: <span className="">1.2 ETH</span></p>
                          <p className="fs-12 greyTxt mb-0">3 Items</p>
                        </div>
                      </div>
                      
                      <div className="col-md-4 col-lg-12 col-xl-4">
                        <p className="fs-12 greyTxt text-xl-right">Minimum Offer</p>
                        <div className="input-group verified mb-2">
                          <input type="text" value="0.5" className="form-control" />
                          <div className="input-group-append">
                            <div className="input-group-text">
                              <span className="greyTxt">ETH</span>
                            </div>
                          </div>
                        </div>
                        <p className="fs-12 greyTxt text-xl-right">$900.23</p>
                      </div>
                    </div>
                  </div>

                  <div className="borderedCnt offerRow mb-3">
                    <div className="row align-items-center w-100 mx-0">
                      <div className="col-md-8 col-lg-12 col-xl-8 d-flex flex-wrap align-items-center">
                        <img src={deGods} height="92" className="mr-2 mb-2" />
                        <div className="d-flex flex-column">
                          <h5 className="fs-16 fw-600 mr-2">DeGods<img src={tick} className="ml-2" /><img src={bnb} className="ml-2" /></h5>
                          <p className="fs-12 greyTxt">Floor Price: <span className="">1.2 ETH</span></p>
                          <p className="fs-12 greyTxt mb-0">30,000 Items</p>
                        </div>
                      </div>
                      
                      <div className="col-md-4 col-lg-12 col-xl-4">
                        <p className="fs-12 greyTxt text-xl-right">Minimum Offer</p>
                        <div className="input-group verified mb-2">
                          <input type="text" value="0.5" className="form-control" />
                          <div className="input-group-append">
                            <div className="input-group-text">
                              <span className="greyTxt">ETH</span>
                            </div>
                          </div>
                        </div>
                        <p className="fs-12 greyTxt text-xl-right">$900.23</p>
                      </div>
                    </div>
                  </div>

                  <div className="borderedCnt offerRow mb-3">
                    <div className="row align-items-center w-100 mx-0">
                      <div className="col-md-8 col-lg-12 col-xl-8 d-flex flex-wrap align-items-center">
                        <img src={logoImg} height="92" className="mr-2 mb-2" />
                        <div className="d-flex flex-column">
                          <h5 className="fs-16 fw-600 mr-2">My Collection<img src={tick} className="ml-2" /><img src={eth} className="ml-2" /></h5>
                          <p className="fs-12 greyTxt">Floor Price: <span className="">1.2 ETH</span></p>
                          <p className="fs-12 greyTxt mb-0">52 Items</p>
                        </div>
                      </div>
                      
                      <div className="col-md-4 col-lg-12 col-xl-4">
                        <p className="fs-12 greyTxt text-xl-right">Minimum Offer</p>
                        <div className="input-group verified mb-2">
                          <input type="text" value="0.5" className="form-control" />
                          <div className="input-group-append">
                            <div className="input-group-text">
                              <span className="greyTxt">ETH</span>
                            </div>
                          </div>
                        </div>
                        <p className="fs-12 greyTxt text-xl-right">$900.23</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="col-12">
                  <div className='noItemFound'>
                    <div className='text-center'>
                        <img src={noItemfoundImage} alt="noItemfoundImage" className='img-fluid'/>
                    </div>
                    <div className='nofounttxt mb-2'>
                      No collections to manage offers.
                    </div>
                    <p className="greyTxt mb-4">No collections to manage offers.</p>
                  </div>
                </div> */}
              </div>
            </form>
          </div>
          
          <Modal isOpen={modal} toggle={toggle} centered="true" className="curMdl createScsMdl" backdropClassName="selCurBp">
            <div className="createContent">
              <button className="btn closeBtn" onClick={toggle}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.46875 6L10.8438 9.375C11.0312 9.5625 11.0312 9.90625 10.8438 10.0938L10.0625 10.875C9.875 11.0625 9.53125 11.0625 9.34375 10.875L6 7.5L2.625 10.875C2.4375 11.0625 2.09375 11.0625 1.90625 10.875L1.125 10.0938C0.9375 9.90625 0.9375 9.5625 1.125 9.375L4.5 6L1.125 2.65625C0.9375 2.46875 0.9375 2.125 1.125 1.9375L1.90625 1.15625C2.09375 0.96875 2.4375 0.96875 2.625 1.15625L6 4.53125L9.34375 1.15625C9.53125 0.96875 9.875 0.96875 10.0625 1.15625L10.8438 1.9375C11.0312 2.125 11.0312 2.46875 10.8438 2.65625L7.46875 6Z" fill="#595F6A" />
                </svg>
              </button>

              <div className="w-100">
                <div className="d-flex justify-content-center">
                  <img src={IconModal} />
                </div>
                <h3 className="walletHeading my-2">Are you sure?</h3>
                <h3 className="walletSubHeading mb-3 ">By turning this feature off you may receive items that are reported stolen or no longer match the traits you've specified.</h3>
                <button type="button" className="btn btn-block gradientBtn mb-2">Continue</button>
                <button type="button" className="btn btn-block darkBtn">Get Back</button>
              </div>              
            </div>            
         </Modal>

      </>
    );
};

export default SettingsOffers;