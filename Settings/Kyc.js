import React, { useEffect, useState } from 'react';
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

import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useSubmitKYCMutation } from '../../store/Endpoint';
import axios from 'axios';
import Base64 from '../../utils/Base64'
import { useAccount } from 'wagmi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Kyc = () => {

  const { address } = useAccount()

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

  
  const [frontSideImg, setFrontSideImg] = useState(null);
  const [backSideImg, setBackSideImg] = useState(null);
  const [kycSelfieImg, setKycSelfieImg] = useState(null);

  const [proofType, setProofType] = useState('license');

  const { toBase64 } = Base64()

  const handleFileChange = async (event, setImgSrc , hkName) => {
    console.log('event.target0,',hkName, event.target.files[0])
    const file = event.target.files[0];
    const size = Math.round((file.size / 1024));
    if(size >= 100){
      toast.error('Image file size too large!', {
        position: toast.POSITION.TOP_CENTER,
      });
      return
    }
    if(!file?.type?.includes('image')){
      toast.error('Please select valid image file', {
        position: toast.POSITION.TOP_CENTER,
      });
      return
    }
    if (file) {
      
      const img64 = await toBase64(file);
      console.log('event.target0000000000,',typeof img64)
      setImgSrc(img64);
      setValue(hkName , img64)
      
      return

    }
  };

  function doSomethingWithTheResult(result) {
    console.log(result);
    console.log('iamge as blob: ', new Blob([result]))

    var blobObj = new Blob([result], { type: "text/plain" });
    var url = window.URL.createObjectURL(blobObj);
    console.log(url, blobObj, 'blobObjblobObjblobObj')
  }

  const validationSchema = Yup.object().shape({

    number: Yup.string()
      .required('License/PAN number is required')
      .matches(
        /^[0-9\b]+$/,
        'License/PAN number be Number'
      ),
    // .min(15, 'Licence/Pan must have 15 characters')
    // .max(15, 'Licence/Pan must have 15 characters'),
    // PANNumber: Yup.string()
    // .required('PAN number is required')
    // .matches(
    //   /^[0-9\b]+$/,
    //   'PAN number be Number'
    // )
    // .min(8, 'PAN number must have 8 characters')
    // .max(8, 'PAN number must have 8 characters'),
    frontSideImg: Yup.mixed().required('require frontside idproof'),
    backSideImg: Yup.mixed().required('require backside idproof'),
    kycSelfieImg: Yup.mixed().required('required kycselfie'),
  });

  /**
   * .test("file", "You need to provide a file", (value) => {

      console.log('valuevalueImg', value)

      if (value?.length > 0) {
        return true;
      }
      return false;
    }),
   */

  const {
    register,
    handleSubmit,
    reset,
    control,
    getValues,
    setValue,
    formState: { errors, isDirty, isValid }
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      number: "",
      PANNumber: "",
      frontSideImg: null,
      backSideImg: null,
      kycSelfieImg: null,
    },
    mode: 'onChange'
  });

  const [submitKyc, { isLoading, isError }] = useSubmitKYCMutation();

  let obj = {
    number: getValues('number'),
    proofType: proofType,
    frontSideProof: frontSideImg,
    backSideProof: backSideImg,
    selfieProof: kycSelfieImg,
    address: address
  }

  console.log('objobjobjobjobj', obj)

  const handleSelect = (val) => {
    console.log('valvalval', val)
    setProofType(val)

  }
  console.error('Errorddsd:', errors);


  const onSubmit = async (data) => {
    try {
      let obj = {
        number: getValues('number') || getValues('PANNumber'),
        proofType: proofType,
        frontSideProof: frontSideImg,
        backSideProof: backSideImg,
        selfieProof: kycSelfieImg,
        address: address
      };
  
      const response = await submitKyc(obj).unwrap();
  
      // Check if the KYC was created or updated
      const successMessage = response.updated ? 'KYC updated successfully' : 'KYC submitted successfully';
  
      // Reset form and image previews
      reset();
      setFrontSideImg(null);
      setBackSideImg(null);
      setKycSelfieImg(null);
  
      // Display a success toast
      toast.success(successMessage, {
        autoClose: 2000,
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      console.error('Error:', error);
  
      // Handle errors or display a toast/message
      const errorMessage = error.status === 409 ? 'KYC already exists. Updated instead.' : 'Failed to submit KYC';
      
      toast.error(errorMessage, {
        autoClose: 2000,
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <>
      <div className="d-flex align-items-center mb-3">
        <h3 className="settingsHeading mb-0">KYC</h3>
      </div>
      <div className="createCollectionCard mb-3">
        {/* <form className="w-100" onSubmit={handleSubmit(onSubmit)}> */}
        <form className="w-100" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">

          <div className='form-row'>

            <div className="col-12 mb-3">
              <div className="d-flex align-items-center flex-wrap">
                <span className="formLabel">Select Proof</span>
                {/* <label className="text-danger errLabel ml-auto">This collection name already exist</label> */}
              </div>

              <select className="form-control" onChange={(e) => handleSelect(e.target.value)} >
                <option value={'license'}>License</option>
                <option value="pan">PAN</option>
              </select>
            </div>

            <div className="col-12 mb-3">
              <div className="d-flex align-items-center flex-wrap">
                <span className="formLabel">License / PAN Number </span>
                {/* <label className="text-danger errLabel ml-auto">This collection name already exist</label> */}
              </div>

              <Controller
                control={control}
                name='number'
                render={({ field }) => (
                  <input
                    {...field}
                  />
                )}
              />
              <div style={{ color: 'red', fontSize: '14px' }}>{errors?.number?.message}</div>


            </div>



            {/* <input type="text" placeholder="Enter Number"
                {...register('LicenseNumber')}
                className={`form-control ${errors.LicenseNumber ? 'is-invalid' : ''}`}
                value={LicenseNumber}
                onChange={(e) => setLicenseNumber(e.target.value)}
              />
              <div className="invalid-feedback">{errors.LicenseNumber?.message}</div> */}




            <Controller
              control={control}
              name='frontSideImg'
              render={({ field }) => (
                <div className="col-12 mb-3 d-flex align-items-center flex-wrap">
                  <div className="coverContainer">
                    <span className="formLabel">Front Side ID Proof</span>
                    <div className="coverCnt d-flex flex-column">
                      <img className="coverImg" src={frontSideImg ? frontSideImg : coverImg} alt="Front Side ID Proof" />

                      <div className="justify-content-center align-items-center editIcon">
                        <input
                          type="file"
                          accept='image/*'
                          id="frontSideImg"
                          name="frontSideImg"  // Make sure the name attribute matches the expected key in req.files
                          style={{ position: "absolute", opacity: "0", width: "100%" }}
                          role="button"
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            handleFileChange(e, setFrontSideImg ,'frontSideImg' )}}
                          value={''}
                        />
                        <label role="button" htmlFor="frontSideImg">
                          <img src={Pencil} alt="Edit Icon" />
                        </label>
                      </div>
                    </div>
                    <div style={{ color: 'red', fontSize: '14px' }}>{errors?.frontSideImg?.message}</div>
                  </div>
                </div>
              )}
            />

            <div className="col-12 mb-3 d-flex align-items-center flex-wrap">
              <div className="coverContainer">
                <span className="formLabel">Back Side ID Proof</span>
                <div className="coverCnt d-flex flex-column">
                  <img className="coverImg" src={backSideImg ? backSideImg : coverImg} alt="Back Side ID Proof" />
                  <div className="justify-content-center align-items-center editIcon">
                    <input
                      type="file"
                      accept="image/*"
                      id="backSideImg"
                      name="backSideImg"
                      style={{ position: "absolute", opacity: "0", width: "100%" }}
                      role="button"
                      onChange={(e) => handleFileChange(e, setBackSideImg,'backSideImg')} value={""}
                    />
                    <label role="button" htmlFor="backSideImg">
                      <img src={Pencil} alt="Edit Icon" />
                    </label>
                  </div>
                </div>
                <div style={{ color: 'red', fontSize: '14px' }}>{errors?.backSideImg?.message}</div>
              </div>
            </div>

            <div className="col-12 mb-3 d-flex align-items-center flex-wrap">
              <div className="coverContainer">
                <span className="formLabel">KYC Selfie with ID Proof</span>

                <div className="coverCnt d-flex flex-column">
                  <img className="coverImg" src={kycSelfieImg ? kycSelfieImg : coverImg} alt="KYC Selfie with ID Proof" />
                  <div className="justify-content-center align-items-center editIcon">
                    <input
                      type="file"
                      id="kycSelfieImg"
                      accept='image/*'
                      name="kycSelfieImg"
                      style={{ position: "absolute", opacity: "0", width: "100%" }}
                      role="button"
                      onChange={(e) => handleFileChange(e, setKycSelfieImg,'kycSelfieImg')}
                    />
                    <label role="button" htmlFor="kycSelfieImg">
                      <img src={Pencil} alt="Edit Icon" />
                    </label>
                  </div>
                </div>

                <div style={{ color: 'red', fontSize: '14px' }}>{errors?.kycSelfieImg?.message}</div>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="btn gradientBtn mt-2" >Submit</button>
            </div>
          </div>

        </form>
      </div>


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
      <ToastContainer />
    </>
  );
};

export default Kyc;