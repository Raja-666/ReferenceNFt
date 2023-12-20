import React, { useState } from 'react';
import logoImg from '../../assets/images/logoImg.png';
import coverImg from '../../assets/images/coverImg.png';
import ethIconSm from '../../assets/images/ethIconSm.png';
import bnbIconSm from '../../assets/images/bnbIconSm.png';
import maticIconSm from '../../assets/images/maticIconSm.png';
import angleDown from '../../assets/images/angleDown.svg';
import discord from '../../assets/images/discord.svg';
import telegramPlane from '../../assets/images/telegram-plane.svg';
import twitter from '../../assets/images/twitterNew.svg';
import instagram from '../../assets/images/instagram.svg';
import youtube from '../../assets/images/youtube.svg';
import infoIcon from '../../assets/images/infoIcon.svg';
import Pencil from '../../assets/images/Pencil.svg';
import { DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, TabContent, TabPane, UncontrolledDropdown, UncontrolledPopover, PopoverBody } from 'reactstrap';
import classnames from 'classnames';
import MyCollectionData from './MyCollectionData';
//import './myCollection.scss';
import '../../assets/scss/mycollecion_mint.scss';
import { useNavigate } from 'react-router-dom';




export const ChooseCollection = () => {
  const navigate = useNavigate()

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const CheckTick = () => {
    return (
      <>
        <svg class="ml-auto" width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.1953 0.46875C10.3125 0.351562 10.5 0.351562 10.5938 0.46875L11.2734 1.125C11.3672 1.24219 11.3672 1.42969 11.2734 1.52344L4.24219 8.55469C4.125 8.67188 3.96094 8.67188 3.84375 8.55469L0.703125 5.4375C0.609375 5.32031 0.609375 5.13281 0.703125 5.03906L1.38281 4.35938C1.47656 4.26562 1.66406 4.26562 1.78125 4.35938L4.03125 6.63281L10.1953 0.46875Z" fill="#55f764" />
        </svg>
      </>
    )
  }

  return (
    <>
      <div className="row">
        <div className="col-lg-2 mb-3">
          <button className="backIcon"
            onClick={() => navigate(-1)}
          ><i className="fas fa-angle-left"></i></button>
        </div>
        <div className="col-lg-3 mb-3">
          <h3 className="collectionSecHeading text-left">Edit <br />Collection</h3>
        </div>
        <div className="col-lg-6">
          <div className="createCollectionCard">
            <form>
              <div className="walletCnt mb-3">
                <h3>92fwr424...0394</h3>
                <span className="walletLabel successLabel ml-auto">Wallet Connected</span>
              </div>
              <div className="form-row">
                <div className="col-12 mb-4 d-flex align-items-center flex-wrap">
                  <div className="imgContainer mr-4">
                    <span className="formLabel">Logo Image</span>
                    <div className="d-flex align-items-center flex-wrap">
                      <div className="imgCnt">
                        <img className="logoImg" src={logoImg} />
                        <div className="justify-content-center align-items-center editIcon">
                          <a href="#"><img src={Pencil} /></a>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="coverContainer">
                    <span className="formLabel">Cover Image</span>
                    <div className="coverCnt d-flex flex-column">
                      <img className="coverImg" src={coverImg} />
                      <div className="justify-content-center align-items-center editIcon">
                        <a href="#"><img src={Pencil} /></a>
                      </div>
                      {/* <div className="d-flex flex-column align-items-center">
                          <p>PNG, GIF, WEBP, MP4 or MP3.</p>
                          <p className="fs-12 greyTxt">Max 100mb. At least 1400*360 pixels.</p>
                          <div className="chooseFileBtn mt-2">
                            <input type="file" id="chooseBtn" />
                            <label for="chooseBtn">Choose File</label>
                          </div>
                        </div>*/}
                    </div>
                  </div>
                </div>

                <div className="col-12 mb-3">
                  <div className="d-flex align-items-center flex-wrap">
                    <span className="formLabel">Collection Name</span>
                    {/* <label className="text-danger errLabel ml-auto">This collection name already exist</label> */}
                  </div>
                  <input type="text" placeholder="Name your collection" className="form-control" />
                </div>

                <div className="col-12 mb-3">
                  <span className="formLabel">Description (Optional)</span>
                  <textarea className="form-control" placeholder="Enter Description"></textarea>
                </div>

                <div className="col-12 mb-3 urlFieldCnt">
                  <div className="d-flex align-items-center flex-wrap">
                    <span className="formLabel">Collection URL</span>
                    {/* <label className="text-danger errLabel ml-auto">This URL already exists</label> */}
                  </div>
                  <div class="input-group mb-2">
                    <div class="input-group-prepend">
                      <div class="input-group-text">wornft.com/</div>
                    </div>
                    <input type="text" class="form-control" placeholder="Enter URL" />
                  </div>
                  <hr />
                </div>

                <div className="col-12 mb-3">
                  <div className="d-flex align-items-center flex-wrap">
                    <span className="formLabel mr-2">Blockchain</span>
                    <UncontrolledDropdown className="ml-auto">
                      <DropdownToggle caret className="d-flex align-items-center">
                        <img src={ethIconSm} className="mr-2" />
                        Ethereum
                        <img src={angleDown} className="ml-auto" />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem tag="a">
                          <div className="d-flex align-items-center">
                            <img src={bnbIconSm} className="mr-2" />
                            Binance
                          </div>
                        </DropdownItem>
                        <DropdownItem tag="a">
                          <div className="d-flex align-items-center">
                            <img src={ethIconSm} className="mr-2" />
                            Ethereum
                            <CheckTick />
                          </div>
                        </DropdownItem>
                        <DropdownItem tag="a">
                          <div className="d-flex align-items-center">
                            <img src={maticIconSm} className="mr-2" />
                            Polygon
                          </div>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                  <hr />
                </div>

                <div className="col-12 mb-3">
                  <div className="d-flex align-items-center flex-wrap">
                    <span className="formLabel mr-2">Category</span>
                    <UncontrolledDropdown className="ml-auto">
                      <DropdownToggle caret className="d-flex align-items-center">
                        Select Category
                        <img src={angleDown} className="ml-auto" />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem tag="a">
                          Art
                        </DropdownItem>
                        <DropdownItem tag="a">
                          Music
                        </DropdownItem>
                        <DropdownItem tag="a">
                          Photography
                        </DropdownItem>
                        <DropdownItem tag="a">
                          Sports
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                  <hr />
                </div>

                <div className="col-12 mb-3">
                  <div className="d-flex align-items-center flex-wrap">
                    <span className="formLabel">Social Media</span>
                  </div>
                  <div className="d-flex urlFieldCnt">
                    <div className="socilaMediaIconCnt mr-2"><img src={discord} /></div>
                    <div class="input-group mb-2">
                      <div class="input-group-prepend">
                        <div class="input-group-text">discord.com/</div>
                      </div>
                      <input type="text" class="form-control" placeholder="Enter URL" />
                    </div>
                  </div>
                  <div className="d-flex urlFieldCnt">
                    <div className="socilaMediaIconCnt mr-2"><img src={telegramPlane} /></div>
                    <div class="input-group mb-2">
                      <div class="input-group-prepend">
                        <div class="input-group-text">telegram.com/</div>
                      </div>
                      <input type="text" class="form-control" placeholder="Enter URL" />
                    </div>
                  </div>
                  <div className="d-flex urlFieldCnt">
                    <div className="socilaMediaIconCnt mr-2"><img src={twitter} /></div>
                    <div class="input-group mb-2">
                      <div class="input-group-prepend">
                        <div class="input-group-text">twitter.com/</div>
                      </div>
                      <input type="text" class="form-control" placeholder="Enter URL" />
                    </div>
                  </div>
                  <div className="d-flex urlFieldCnt">
                    <div className="socilaMediaIconCnt mr-2"><img src={instagram} /></div>
                    <div class="input-group mb-2">
                      <div class="input-group-prepend">
                        <div class="input-group-text">instagram.com/</div>
                      </div>
                      <input type="text" class="form-control" placeholder="Enter URL" />
                    </div>
                  </div>
                  <div className="d-flex urlFieldCnt">
                    <div className="socilaMediaIconCnt mr-2"><img src={youtube} /></div>
                    <div class="input-group mb-2">
                      <div class="input-group-prepend">
                        <div class="input-group-text">youtube.com/</div>
                      </div>
                      <input type="text" class="form-control" placeholder="Enter URL" />
                    </div>
                  </div>
                  <hr />
                </div>

                <div className="col-12 mb-3">
                  <div className="d-flex align-items-center flex-wrap">
                    <span className="formLabel">Verification</span>
                    <div className="dark-primary ml-auto">
                      Requirements <img src={infoIcon} id="popoverLegacy" />
                    </div>
                    <UncontrolledPopover trigger="legacy" placement="bottom" target="popoverLegacy" className="verifyPopOver">
                      <PopoverBody>
                        <div>
                          <label class="custCheck">Logo Image.
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                          </label>
                        </div>
                        <div>
                          <label class="custCheck">Title.
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                          </label>
                        </div>
                        <div>
                          <label class="custCheck">Verified email.
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                          </label>
                        </div>
                        <div>
                          <label class="custCheck">Connected Twitter account.
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                          </label>
                        </div>
                        <div>
                          <label class="custCheck">Minimum 5 ETH of Volume.
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                          </label>
                        </div>
                      </PopoverBody>
                    </UncontrolledPopover>
                    {/* <div className="getVerified">Get Verified</div> */}
                  </div>
                </div>

                <div className="col-12 d-flex align-items-center mb-3">
                  <button type="button" className="btn btn-block blackBtn mx-2 my-2">Cancel</button>
                  <button type="button" className="btn btn-block gradientBtn mx-2 my-2">Save Changes</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseCollection;