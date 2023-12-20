import React, { useState } from 'react';
//import '../MyCollection/myCollection.scss';
import '../../assets/scss/mycollecion_mint.scss';
import './Settings.scss';

export const SettingsNotification = () => {

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  
  const [modal1, setModal1] = useState(false);
  const toggle1 = () => setModal1(!modal1);

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
          <h3 className="settingsHeading mb-0">Notifications</h3>
          </div>
          <div className="createCollectionCard mb-3">
            <form className="w-100">
              <p className="greyTxt mb-3">Select which notifications you would like to receive.</p>
              <div className="form-row">
                <div className="col-12 mb-3">
                  <div className="freezeCnt">
                    <div>
                      <span className="formLabel">Item Sold</span>
                      <p>When someone purchased one of your items</p>
                    </div>
                    <div className="ml-auto">
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="col-12 mb-3">
                  <div className="freezeCnt">
                    <div>
                      <span className="formLabel">Bid Activity</span>
                      <p>When someone bids on one of your items</p>
                    </div>
                    <div className="ml-auto">
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="col-12 mb-3">
                  <div className="freezeCnt">
                    <div>
                      <span className="formLabel">Price Change</span>
                      <p>When an item you made an offer on changes in price</p>
                    </div>
                    <div className="ml-auto">
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="col-12 mb-3">
                  <div className="freezeCnt">
                    <div>
                      <span className="formLabel">Auction Expiration</span>
                      <p>When a timed auction you created ends</p>
                    </div>
                    <div className="ml-auto">
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="col-12 mb-3">
                  <div className="freezeCnt">
                    <div>
                      <span className="formLabel">Outbid</span>
                      <p>When an offer you placed is exceeded by another user</p>
                    </div>
                    <div className="ml-auto">
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="col-12 mb-3">
                  <div className="freezeCnt">
                    <div>
                      <span className="formLabel">Owned Item Updates</span>
                      <p>When a significant update occurs for one of the items you have purchased on WARRIOR</p>
                    </div>
                    <div className="ml-auto">
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="col-12 mb-3">
                  <div className="freezeCnt">
                    <div>
                      <span className="formLabel">Successful Purchase</span>
                      <p>When you successfully buy an item</p>
                    </div>
                    <div className="ml-auto">
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="col-12 mb-3">
                  <div className="freezeCnt">
                    <div>
                      <span className="formLabel">Successful Mint</span>
                      <p>When you successfully mint an item</p>
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
                  <span className="formLabel">Minimum Bid Threshold</span>
                  <p className="greyTxt">Receive notifications only when you receive offers with a value greater than or equal to this amount of ETH.</p>
                  <div className="input-group verified">
                    <input type="text" value="0.5" className="form-control" />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="greyTxt">ETH</span>
                      </div>
                    </div>
                    <button className="btn gradientBtn ml-2">Save</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
      </>
    );
};

export default SettingsNotification;