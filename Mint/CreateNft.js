import React, { useEffect, useState } from 'react';
import alertDanger from '../../assets/images/alertDanger.svg';
import aiPfpClub from '../../assets/images/itemIcons/aiPfpClub.png';
import IconModal from '../../assets/images/IconModal.png';
import walletLoaderCnt from "../../assets/images/walletLoader.png";
import walletLoader from "../../assets/images/loaderCircle.png";
import angleDown from "../../assets/images/angleDown.svg";
import coverImg from '../../assets/images/coverImg.png';
import Pencil from '../../assets/images/Pencil.svg';
import plus from '../../assets/images/plus.svg';
import userImage from '../../assets/images/collection/userImage.png';
import deGods from '../../assets/images/itemIcons/deGods.png';
import tick from '../../assets/images/collection/yellow-tick_20px.svg';
import mintBanner from '../../assets/images/mintBanner.png';
import { DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, TabContent, TabPane, UncontrolledDropdown, Modal } from 'reactstrap';
import classnames from 'classnames';
//import './mint.scss';
import * as Yup from 'yup';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { navigate, useLocation, useNavigate } from 'react-router-dom'
import '../../assets/scss/mycollecion_mint.scss';
import { useCollectionListMutation } from '../../store/Endpoint';
import { useCreateNFTMutation } from '../../store/Endpoint';
import { useTokencreateMutation } from '../../store/NftEndpoint';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAccount } from 'wagmi';
import Base64 from '../../utils/Base64';

const validationSchema = Yup.object().shape({

  // uploadfile: Yup.mixed()
  // .required("File is required")
  //   .test("fileSize", "File size is too large", (value) => {
  //     return value.length && value[0].size <= 1024000;
  //   }),
  nftName: Yup.string()
    .required('User Name is required')
    .min(3, 'Please Enter Valid Name')
    .matches(/[A-Za-z]+/, 'nftName should contain only letters')
    .trim(),
  supply: Yup.string()
    .required('supply is required'),
  collection: Yup.string()
    .required('collection is required'),
  description: Yup.string(),
  link: Yup.string().required('Website is required')
    .matches(/^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?\/?$/gm, 'Entered URL in correct format')
    .trim(),


})


export const CreateNft = () => {
  const location = useLocation()
  const colId = location?.state
  const { address } = useAccount()
  const navigate = useNavigate()
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [modal1, setModal1] = useState(false);
  const toggle1 = () => setModal1(!modal1);

  const { toBase64 } = Base64()


  const [NftcreateResponse] = useTokencreateMutation()

  const [uploadfile, setUploadfile] = useState(null);
  const [nftName, setNftName] = useState('');
  const [supply, setSupply] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');

  const [traitName, setTraitName] = useState('');
  const [traitType, setTraitType] = useState('');
  const [traits, setTraits] = useState([]);
  const [traitEdit, setTraitEdit] = useState({
    status: false,
    index: -1
  });

  const { register, handleSubmit,
    control,
    getValues,
    setValue,
    setError,
    formState: { errors }, reset } = useForm({
      resolver: yupResolver(validationSchema),
      mode: 'onChange',
    });

  console.log('traits', typeof traits)

  const handleFileChange = async (e, setter, tag) => {
    const file = e.target.files[0];
    const size = Math.round((file.size / 1024));
    if (size >= 100) {
      toast.error('Image file size too large!', {
        position: toast.POSITION.TOP_CENTER,
      });
      return
    }
    if (!file?.type?.includes('image')) {
      toast.error('Please select valid image file', {
        position: toast.POSITION.TOP_CENTER,
      });
      return
    }

    if (file) {

      const img64 = await toBase64(file);
      console.log('event.target0000000000,', typeof img64)
      setter(img64);
      setValue(tag, img64)

      return

    }

  }

  const handleTraitChange = (e, index, field) => {
    const newTraits = [...traits];
    newTraits[index][field] = e.target.value;
    setTraits(newTraits);
  };


  const onSubmit = async (data) => {

    console.log(data, 'lol');

    // FIXME: validation on hook form...
    if (!getValues('nftName')) {
      setError('userName', "Please enter user name")
      setError('Bio')
      return
    }

    const formData = new FormData();
    formData.append('address', address);
    formData.append('uploadfile', getValues('uploadfile'));
    formData.append('nftName', getValues('nftName'));
    formData.append('supply', getValues('supply'));
    formData.append('description', getValues('description'));
    formData.append('link', getValues('link'));
    formData.append('traits', JSON.stringify(traits))

    // traits.forEach(item => {
    //   formData.append(`traits`, JSON.stringify(item));
    // });

    formData.append('collection', getValues('collection'))




    for (var p of formData) {
      const name = p[0];
      const value = p[1];

      console.log(name, value, 'checkkk')
    }
    try {
      const res = await NftcreateResponse(formData);

      console.log('NftcreateResponse:', res);

      if (res.success) {
        toast.error('Profile creation failed', {
          position: toast.POSITION.TOP_CENTER,
        });

      } else {
        toast.success('NFT created succesfully', {
          position: toast.POSITION.TOP_CENTER,
        });
        toggle();
      }
    } catch (error) {
      console.error('Error during form submission:', error);

      // Log the error details
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error details:', error.message);
      }
    }
    setTimeout(() => {
      navigate("/")
    }, 3000);
  };

  const [collectionList, { isError, isLoading, isSuccess, data }] = useCollectionListMutation()

  console.log('datadata', data)
  const getList = async () => {

    const addr = address

    if (!addr) {
      return
    }

    const result = await collectionList({
      address: addr
    }).unwrap();
    console.log('result', result)
  }
  console.log('colId', colId)
  useEffect(() => {
    getList()
    if (colId) {
      setValue('collection', colId)
    }
  }, [])

  let handleAddTrait = () => {
    if (traitType && traitName) {
      setTraits([...traits, { type: traitType, name: traitName }]);
      setTraitType('');
      setTraitName('');
      toggle1()
    }
  };

  const handleDeleteTraitBtn = (index) => {
    setTraits((prevState) => {
      let arr = prevState.filter((_, i) => i !== index);
      return arr
    });
  };

  const handleEditTraitData = (index) => {
    setTraitName(traits[index]['name'])
    setTraitType(traits[index]['type'])
    toggle1()
    setTraitEdit({
      status: true,
      index
    })
  };

  const handleEditTrait = (index) => {
    setTraits((prevState) => {
      const updatedProducts = prevState.map((product, i) => {
        if (i === index) {
          return {
            name: traitName,
            type: traitType,
          };
        }
        return product;
      });

      console.log('indexxx', updatedProducts, index)

      return updatedProducts;
    });

    setTraitEdit((prevTP) => {
      return {
        ...prevTP,
        status: false,
        index: -1
      }
    })

    toggle1()


  }

  // handleAddTrait = () => {
  // if (traitType && traitName) {
  //   setTraits([...traits, { type: traitType, name: traitName }]);
  //   setTraitType('');
  //   setTraitName('');
  // }
  // };


  return (
    <>
      <div className="row">
        <div className="col-lg-2 mb-3">
          <button className="backIcon"
            onClick={() => navigate(-1)}
          ><i className="fas fa-angle-left"></i></button>
        </div>
        <div className="col-lg-3 mb-3">
          <h3 className="collectionSecHeading text-left">Create Item</h3>
          <h3 className="collectionSecSubHeading text-left">Once your NFT minted, you will no longer able to edit it.</h3>
        </div>
        <div className="col-lg-6">
          <div className="createCollectionCard mb-3">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="walletCnt mb-3">
                <h3>92fwr424...0394</h3>
                <span className="walletLabel successLabel ml-auto">Wallet Connected</span>
              </div>
              <hr />
              <div className="form-row">
                <div className="col-12 mb-3">
                  <div className="d-flex align-items-center flex-wrap">
                    <span className="formLabel mr-2">Collection</span>
                    <UncontrolledDropdown className="ml-auto collectionDD" onChange={(e) => {
                      console.log('e....', e.target.value)
                    }}>
                      <DropdownToggle caret className="d-flex align-items-center">
                        Select Collection
                        <img src={angleDown} className="ml-auto" />
                      </DropdownToggle>
                      <DropdownMenu>

                        <DropdownItem tag="a">
                          <div className="d-flex align-items-center createCollectionrow">
                            <div className="addIconCnt mr-2"><img src={plus} className="plusIcon" /></div>
                            Create Collection
                          </div>
                        </DropdownItem>

                        {
                          data?.data?.map(({ collectionName, collectionUrl, _id, logo }) => (
                            <>
                              <DropdownItem tag="a" key={_id} onClick={() => {
                                console.log(_id)
                                setValue('collection', _id)
                              }}>
                                <div className="d-flex align-items-center">
                                  <img src={logo} className="mr-2" width='40' height="40" />
                                  <div className="d-flex flex-column">
                                    <h3>{collectionName} <img src={tick} className="ml-1" /></h3>
                                    <p>CODE-248298</p>
                                  </div>
                                </div>
                              </DropdownItem>
                            </>
                          ))
                        }
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                  <hr />
                </div>
                <div className="col-12 mb-4">
                  <span className="formLabel">Upload File</span>
                  <div className="coverCnt d-flex flex-column">
                    <img className="coverImg" src={uploadfile ? uploadfile : mintBanner} />
                    <div className="justify-content-center align-items-center editIcon">
                      <div className="editUplCnt" accept='image/*' onChange={(e) => handleFileChange(e, setUploadfile, 'uploadfile')}>
                        <label for="editUplCnt"><img src={Pencil} /></label>
                        <input type="file" id="editUplCnt" />
                      </div>
                    </div>
                    {/* <div className="d-flex flex-column align-items-center">
                        <p>PNG, GIF, WEBP, MP4 or MP3.</p>
                        <p className="fs-12 greyTxt">Max 100mb. At least 1400*360 pixels.</p>
                        <div className="chooseFileBtn mt-2">
                          <input type="file" id="chooseBtn" />
                          <label for="chooseBtn">Choose File</label>
                        </div>
                      </div> */}
                  </div>
                </div>

                <div className="col-12 mb-3">
                  <div className="d-flex align-items-center flex-wrap">
                    <span className="formLabel">Name</span>
                    {/* <label className="text-danger errLabel ml-auto">This collection name already exist</label> */}
                  </div>
                  <input name="nftName"
                    type='text'
                    {...register('nftName')}
                    className={`form-control ${errors.nftName ? 'is-invalid' : ''
                      }`} />
                  <div className="invalid-feedback">{errors.nftName?.message}</div>
                </div>
                <div className="col-12 mb-3">
                  <div className="d-flex align-items-center flex-wrap">
                    <span className="formLabel">Supply</span>
                  </div>
                  <input
                    name="supply"
                    type='text'
                    {...register('supply')}
                    className={`form-control ${errors?.supply ? 'is-invalid' : ''
                      }`} />
                  <div className="invalid-feedback">{errors?.supply?.message}</div>
                </div>

                <div className="col-12 mb-3">
                  <span className="formLabel">Description (Optional)</span>
                  <textarea name="description"
                    type='text'
                    {...register('description')} className={`form-control ${errors?.description ? 'is-invalid' : ''
                      }`} placeholder="Enter Description"></textarea>
                  <hr />
                  <div className="invalid-feedback">{errors?.description?.message}</div>
                </div>
                <div className="col-12 mb-3">
                  <div className="d-flex align-items-center flex-wrap">
                    <span className="formLabel">External Link</span>
                  </div>
                  <input
                    name="link"
                    type="text"
                    {...register('link')}
                    className={`form-control ${errors.link ? 'is-invalid' : ''
                      }`} />
                  <hr />
                </div>
                <div className="col-12 mb-3">
                  <div className="d-flex align-items-center flex-wrap">
                    <span className="formLabel">Traits</span>
                  </div>

                  {
                    traits.map(({ name, type }, index) => (
                      <div className="d-flex urlFieldCnt traitsCnt mb-2">
                        <div class="input-group mb-2">
                          <input type="text" class="form-control" value={name} />
                          <div class="input-group-append">
                            <div class="input-group-text">{type}</div>
                          </div>
                        </div>
                        <div className="socilaMediaIconCnt ml-2" onClick={() => handleEditTraitData(index)}><img src={Pencil} /></div>
                        <div className="socilaMediaIconCnt ml-2" onClick={() => handleDeleteTraitBtn(index)}>-</div>
                      </div>
                    ))
                  }

                  <div className="d-flex align-items-center cursor" onClick={() => {
                    setTraitName('')
                    setTraitType('')
                    toggle1()
                  }}>
                    <div className="addIconCnt mr-2"><img src={plus} /></div>
                    <a href="/">Add Trait</a>

                    <hr />
                  </div>
                  <div className="col-12 mb-3">
                    <div className="freezeCnt">
                      <div>
                        <span className="formLabel">Freeze Metadata</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                      </div>
                      <div className="ml-auto">
                        <label class="switch">
                          <input type="checkbox" />
                          <span class="slider round"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-12 mb-3">
                    <div className="alert alert-danger">
                      <img src={alertDanger} className="mr-2" />Please, fill the missing fields.
                    </div>
                  </div> */}

                  <div className="col-12 mb-3">
                    <button type="submit" className="btn btn-block gradientBtn" >Create Item</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>


      <Modal isOpen={modal} toggle={toggle} centered="true" className="curMdl createScsMdl" backdropClassName="selCurBp">
        <div className="createContent">
          <button className="btn closeBtn" onClick={toggle}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.46875 6L10.8438 9.375C11.0312 9.5625 11.0312 9.90625 10.8438 10.0938L10.0625 10.875C9.875 11.0625 9.53125 11.0625 9.34375 10.875L6 7.5L2.625 10.875C2.4375 11.0625 2.09375 11.0625 1.90625 10.875L1.125 10.0938C0.9375 9.90625 0.9375 9.5625 1.125 9.375L4.5 6L1.125 2.65625C0.9375 2.46875 0.9375 2.125 1.125 1.9375L1.90625 1.15625C2.09375 0.96875 2.4375 0.96875 2.625 1.15625L6 4.53125L9.34375 1.15625C9.53125 0.96875 9.875 0.96875 10.0625 1.15625L10.8438 1.9375C11.0312 2.125 11.0312 2.46875 10.8438 2.65625L7.46875 6Z" fill="#595F6A" />
            </svg>
          </button>
          <div className="d-flex justify-content-center">
            <img src={aiPfpClub} />
          </div>
          <h3 className="walletHeading my-3">Item Minted Successfully</h3>
          <button type="button" className="btn btn-block gradientBtn" onClick={() => navigate('/collection')}
          >View Collection</button>
        </div>
        {/* <div className="createContent">
              <button className="btn closeBtn" onClick={toggle}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.46875 6L10.8438 9.375C11.0312 9.5625 11.0312 9.90625 10.8438 10.0938L10.0625 10.875C9.875 11.0625 9.53125 11.0625 9.34375 10.875L6 7.5L2.625 10.875C2.4375 11.0625 2.09375 11.0625 1.90625 10.875L1.125 10.0938C0.9375 9.90625 0.9375 9.5625 1.125 9.375L4.5 6L1.125 2.65625C0.9375 2.46875 0.9375 2.125 1.125 1.9375L1.90625 1.15625C2.09375 0.96875 2.4375 0.96875 2.625 1.15625L6 4.53125L9.34375 1.15625C9.53125 0.96875 9.875 0.96875 10.0625 1.15625L10.8438 1.9375C11.0312 2.125 11.0312 2.46875 10.8438 2.65625L7.46875 6Z" fill="#595F6A" />
                </svg>
              </button>
              <div className="d-flex justify-content-center">
                <img src={IconModal} />
              </div>
              <h3 className="walletHeading my-3">Something went wrong</h3>
              <button type="button" className="btn btn-block darkBtn">Okay</button>
            </div> */}

        {/* <div>
              <h3 className="walletHeading my-3">Loading</h3>
              <h3 className="walletSubHeading">To continue send transaction with your wallet.</h3>
              <div className="d-flex justify-content-center align-items-center loaderCont">
                <img src={walletLoaderCnt} />
                <div className="loaderAnimCnt">
                    <img src={walletLoader} className="loaderAnimation" />
                </div>
              </div>
            </div> */}
      </Modal>

      <Modal isOpen={modal1} toggle={toggle1} centered="true" className="curMdl createScsMdl" backdropClassName="selCurBp">
        <div className="createContent">
          <button className="btn closeBtn" onClick={toggle1}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.46875 6L10.8438 9.375C11.0312 9.5625 11.0312 9.90625 10.8438 10.0938L10.0625 10.875C9.875 11.0625 9.53125 11.0625 9.34375 10.875L6 7.5L2.625 10.875C2.4375 11.0625 2.09375 11.0625 1.90625 10.875L1.125 10.0938C0.9375 9.90625 0.9375 9.5625 1.125 9.375L4.5 6L1.125 2.65625C0.9375 2.46875 0.9375 2.125 1.125 1.9375L1.90625 1.15625C2.09375 0.96875 2.4375 0.96875 2.625 1.15625L6 4.53125L9.34375 1.15625C9.53125 0.96875 9.875 0.96875 10.0625 1.15625L10.8438 1.9375C11.0312 2.125 11.0312 2.46875 10.8438 2.65625L7.46875 6Z" fill="#595F6A" />
            </svg>
          </button>
          <div className="d-flex justify-content-center">
            <img src={aiPfpClub} />
          </div>
          <h3 className="walletHeading my-3">Add Trait</h3>
          <form>
            <div className="row">
              <div className="col-12 mb-3">
                <div className="d-flex align-items-center flex-wrap">
                  <span className="formLabel mb-2">Type</span>
                </div>
                <input type="text" id='name' name='name' value={traitName} onChange={(e) => setTraitName(e.target.value)} placeholder="Enter Name" className="form-control" />
              </div>
              <div className="col-12 mb-3">
                <div className="d-flex align-items-center flex-wrap">
                  <span className="formLabel mb-2">Name</span>
                </div>
                <input type="text" name='type' id='type' value={traitType} onChange={(e) => setTraitType(e.target.value)} placeholder="Enter Type" className="form-control" />
              </div>
            </div>
          </form>
          <button type="submit" className="btn btn-block gradientBtn" onClick={() => traitEdit.status ? handleEditTrait(traitEdit?.index) : handleAddTrait()}>{traitEdit?.status ? 'Edit Trait' : 'Add Trait'}</button>
        </div>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default CreateNft;