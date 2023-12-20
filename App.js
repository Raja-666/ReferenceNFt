import React, { Component, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/style.scss';
import {
   BrowserRouter, Navigate, Route, Routes
} from 'react-router-dom';

import Home from './views/Home/Home';
import Bridge from './views/Bridge/Bridge';
import BridgeHistory from './views/Bridge/BridgeHistroy';
import HomeCollection from './views/HomeCollection/HomeCollection';
import HomeActive from './views/HomeActive/HomeActive';
import CollectionPage from './views/collection/CollectionPage';
import CollectionLayout from './components/collectionLayout';
import ProfilePage from './views/Profile/ProfilePage';
import ProfileLayout from './components/profileLayout';
import NftDetails from './views/NftDetails/NftDetails';
import MyCollectionLayout from './components/mycollectionLayout';
import MyCollection from './views/MyCollection/MyCollection';
import ChooseCollection from './views/MyCollection/ChooseCollection';
import CreateCollection from './views/MyCollection/CreateCollection';
import EditCollection from './views/MyCollection/EditCollection';
import MintLayout from './components/mintLayout';
import CreateNFT from './views/Mint/CreateNft';
import ListforsaleLayout from './components/listforsaleLayout';
import ListforsaleSingle from './views/ListforsaleSingle/Listforsale';
import SettingsLayout from './components/Settings';
import Profile from './views/Settings/Profile';
import HelpCenterLayout from './components/helpCenterLayout';
import HelpCenterMainPage from './views/helpcenter/helpcenterMain';
import HelpCenterCategoryActive from './views/helpcenter/categoryActive';
import Notification from './views/Settings/Notification';
import Offers from './views/Settings/Offers';
import Earnings from './views/Settings/Earnings';
import AccountSupport from './views/Settings/AccountSupport';
import Error from './views/Error/Error';
import HelpCenterCategorySearch from './views/helpcenter/searchResult';
import CMSPagesLayout from './components/CMSLayout';
import LegalNotice from './views/cmsPages/legal';
import PrivacyPage from './views/cmsPages/privacy';
import TermsPage from './views/cmsPages/terms';
import HomeExplorerLayout from './components/homeExplorerLayout';
import HomeExplorerMain from './views/homeExplorer';
import AboutUs from './views/cmsPages/about';
import Register from './views/User/Register';
import Login from './views/User/Login';
import ForgotPassword from './views/User/ForgotPassword';
import Kyc from './views/Settings/Kyc';
import ChangePassword from './views/Settings/ChangePassword';
import FaqPage from './views/cmsPages/faq';


const App = (props) => {
   return (
      <React.Fragment>
         <BrowserRouter>
            <Routes history={props.history}>

               {/* Home */}
               <Route path='/' element={<Home />} />


               { /* Create Collection with ETH Network*/ }
               <Route path='/' element={<MyCollectionLayout />}>
                  <Route path="/mycollection" element={<MyCollection />} />
                  <Route path='/choosecollection' element={<ChooseCollection />} />
                  <Route path='/createcollection' element={<CreateCollection />} />
                  <Route path='/editcollection' element={<EditCollection />} />
               </Route>

               { /* Create NFT with ETH Network */ }
               <Route path='/' element={<MintLayout />}>
                  <Route path='/createmint' element={<CreateNFT />} />
               </Route>


               { /* verify Collection from Admin & Verify Users from Admin */ }
               <Route path='/collection' element={<CollectionLayout />}>
                  <Route index element={<CollectionPage />} />
               </Route>

               { /* Sell NFT via Dutch Auction */ }
               <Route path='/' element={<ListforsaleLayout />}>
                  <Route path='/listforsale' element={<ListforsaleSingle />} />
               </Route>

               {/* BUY  NFT */}
               <Route path='/nftdetails' element={<NftDetails />} />               


               {/* Profile (User Profile Details ) */}
               <Route path='/' element={<SettingsLayout />}>
                  <Route path='/settingsprofile' element={<Profile />} />

                  {/* change password */}
                  <Route path='/settingschangepassword' element={<ChangePassword />} />

                  {/* KYC */}
                  <Route path='/settingskyc' element={<Kyc />} />

                  <Route path='/settingsnotification' element={<Notification />} />
                  <Route path='/settingsoffers' element={<Offers />} />
                  <Route path='/settingsearnings' element={<Earnings />} />
                  <Route path='/settingsaccountsupport' element={<AccountSupport />} />
               </Route>

               {/* Profile ( NFT Details ) */}
               <Route path='/profile' element={<ProfileLayout />}>
                  <Route index element={<ProfilePage />} />
               </Route>               

               {/* Privacy Policy */}
               <Route path='/' element={<CMSPagesLayout HeadPrimeTxt="Privacy" headFirstTxt="Policy" />}>
                  <Route path='/privacy' element={<PrivacyPage />} />
               </Route>

               {/* Terms and Conditions */}
               <Route path='/' element={<CMSPagesLayout HeadPrimeTxt="Terms" headFirstTxt="of Service" />}>
                  <Route path='/terms' element={<TermsPage />} />
               </Route>

               {/* About Us */}
               <Route path='/' element={<CMSPagesLayout HeadPrimeTxt="About" headFirstTxt="Us" />}>
                  <Route path='/about-us' element={<AboutUs />} />
               </Route>

               {/* Faq */}
               <Route path='/' element={<CMSPagesLayout HeadPrimeTxt="FAQ" headFirstTxt="" />}>
                  <Route path='/faq' element={<FaqPage />} />
               </Route>


               



               
               {/* Register */}
               <Route path='/register' element={<Register />} />

               {/* Login */}
               <Route path='/login' element={<Login />} />

               {/* Forgot Password */}
               <Route path='/forgot-password' element={<ForgotPassword />} />


               <Route path='/bridge' element={<Bridge />} />
               <Route path='/bridgehistory' element={<BridgeHistory />} />
               <Route path='/homecollection' element={<HomeCollection />} />
               <Route path='/homeactive' element={<HomeActive />} />               

               <Route path='/' element={<HelpCenterLayout />}>
                  <Route path='/helpcenter' element={<HelpCenterMainPage />} />
                  <Route path='/categoryactive' element={<HelpCenterCategoryActive />} />
                  <Route path='/searchResult' element={<HelpCenterCategorySearch />} />
               </Route>
               
               <Route path='/' element={<CMSPagesLayout HeadPrimeTxt="Legal" headFirstTxt="Notice" />}>
                  <Route path='/Legalnotice' element={<LegalNotice />} />
               </Route>
               <Route path='/' element={<HomeExplorerLayout />}>
                  <Route path='explorer' element={<HomeExplorerMain />} />
               </Route>

              

               <Route path='/404' element={<Error />} />

            </Routes>
         </BrowserRouter>
      </React.Fragment>
   );
}

export default App;