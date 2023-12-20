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
//import '../MyCollection/myCollection.scss';
import '../../assets/scss/mycollecion_mint.scss';
import './Settings.scss';

export const ChangePassword = () => {

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [modal1, setModal1] = useState(false);
  const toggle1 = () => setModal1(!modal1);

  const CheckTick = () => {
    return (
      <>
        <svg className="ml-auto" width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.1953 0.46875C10.3125 0.351562 10.5 0.351562 10.5938 0.46875L11.2734 1.125C11.3672 1.24219 11.3672 1.42969 11.2734 1.52344L4.24219 8.55469C4.125 8.67188 3.96094 8.67188 3.84375 8.55469L0.703125 5.4375C0.609375 5.32031 0.609375 5.13281 0.703125 5.03906L1.38281 4.35938C1.47656 4.26562 1.66406 4.26562 1.78125 4.35938L4.03125 6.63281L10.1953 0.46875Z" fill="#55f764" />
        </svg>
      </>
    )
  }

  return (
    <>
      <div className="d-flex align-items-center mb-3">
        <h3 className="settingsHeading mb-0">Profile</h3>
        <button className="btn gradientBtn ml-auto">Save</button>
      </div>
      <div className="createCollectionCard mb-3">
        <form className="w-100">

          <div className="col-12 mb-3">
            <div className="d-flex align-items-center flex-wrap">
              <span className="formLabel">Old Password</span>
              {/* <label className="text-danger errLabel ml-auto">This collection name already exist</label> */}
            </div>
            <input type="password" placeholder="Enter Old Passwrod" className="form-control" />
          </div>

          <div className="col-12 mb-3">
            <div className="d-flex align-items-center flex-wrap">
              <span className="formLabel">New Password</span>
              {/* <label className="text-danger errLabel ml-auto">This collection name already exist</label> */}
            </div>
            <input type="password" placeholder="Enter New Passwrod" className="form-control" />
          </div>

          <div className="col-12 mb-3">
            <div className="d-flex align-items-center flex-wrap">
              <span className="formLabel">Confirm Password</span>
              {/* <label className="text-danger errLabel ml-auto">This collection name already exist</label> */}
            </div>
            <input type="password" placeholder="Enter Confirm Passwrod" className="form-control" />
          </div>
        
        </form>
      </div>


      {/* <Modal isOpen={modal} toggle={toggle} centered="true" className="curMdl createScsMdl" backdropClassName="selCurBp">
            <div className="createContent">
              <button className="btn closeBtn" onClick={toggle}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.46875 6L10.8438 9.375C11.0312 9.5625 11.0312 9.90625 10.8438 10.0938L10.0625 10.875C9.875 11.0625 9.53125 11.0625 9.34375 10.875L6 7.5L2.625 10.875C2.4375 11.0625 2.09375 11.0625 1.90625 10.875L1.125 10.0938C0.9375 9.90625 0.9375 9.5625 1.125 9.375L4.5 6L1.125 2.65625C0.9375 2.46875 0.9375 2.125 1.125 1.9375L1.90625 1.15625C2.09375 0.96875 2.4375 0.96875 2.625 1.15625L6 4.53125L9.34375 1.15625C9.53125 0.96875 9.875 0.96875 10.0625 1.15625L10.8438 1.9375C11.0312 2.125 11.0312 2.46875 10.8438 2.65625L7.46875 6Z" fill="#595F6A" />
                </svg>
              </button>
              <div className="w-100">
                <div className="d-flex justify-content-center">
                  <svg className='mb12px' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" rx="12" fill="#00B976"/>
                    <path d="M25.5938 14.625C25.75 14.4688 26 14.4688 26.125 14.625L27.0312 15.5C27.1562 15.6562 27.1562 15.9062 27.0312 16.0312L17.6562 25.4062C17.5 25.5625 17.2812 25.5625 17.125 25.4062L12.9375 21.25C12.8125 21.0938 12.8125 20.8438 12.9375 20.7188L13.8438 19.8125C13.9688 19.6875 14.2188 19.6875 14.375 19.8125L17.375 22.8438L25.5938 14.625Z" fill="white"/>
                  </svg>
                </div>
                <h3 className="walletHeading my-2">Email Verified</h3>
                <h3 className="walletSubHeading mb-3">Your email address was successfully verified.</h3>
                <button type="button" className="btn btn-block gradientBtn">My Profile</button>
              </div>

              <div className="w-100">
                <div className="d-flex justify-content-center">
                  <img src={IconModal} />
                </div>
                <h3 className="walletHeading my-2">Oops!</h3>
                <h3 className="walletSubHeading mb-1">Email verification link expired.</h3>
                <h3 className="walletSubHeading mb-3">Don’t worry, we can send the link again.</h3>
                <button type="button" className="btn btn-block gradientBtn">Resend Verification Link</button>
              </div>              
            </div>            
         </Modal> */}

      <Modal isOpen={modal1} toggle={toggle1} centered="true" className="curMdl createScsMdl" backdropClassName="selCurBp">
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
            <h3 className="walletSubHeading mb-3 ">You are about to leave this page. All unsaved changes will be lost. Are you sure?</h3>
            <button type="button" className="btn btn-block gradientBtn mb-2">Continue Editing</button>
            <button type="button" className="btn btn-block darkBtn">Discard Changes</button>
          </div>
        </div>
      </Modal>

    </>
  );
};

export default ChangePassword;