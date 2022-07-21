import React from 'react';
import DaumPostcode from "react-daum-postcode";
import { useRecoilState } from 'recoil';
import { RecoilRoot } from "recoil";
import {userAddressState} from '../models/addressAtom';


const PopupPostCode = (props) => {

  const [userAddress, setUserAddress] = useRecoilState(userAddressState)


	// 우편번호 검색 후 주소 클릭 시 실행될 함수, for data callback
    const handlePostCode = (data) => {
        let fullAddress = data.address;
        let extraAddress = ''; 
        
        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname;
          }
          if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
          }
          fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        // console.log(data)
        // console.log(fullAddress)
        // console.log(data.zonecode)
        
        setUserAddress({address:fullAddress,postcode:data.zonecode})
        // console.log(userAddress)
        props.onClose()
    }
 
    const postCodeStyle = {
        display: "block",
        position: "absolute",
        top: "37%",
        width: "600px",
        height: "800px",
        margin: "-100px",
      };
 
    return(
      <div className="bg-red-100 p-5 rounded-sm ml-3 lg:w-72 xl:w-200  mb-3">
        <div style={postCodeStyle}>
            <DaumPostcode  onComplete={handlePostCode} />
          
            <button type='button' onClick={() => {props.onClose()}} className='postCode_btn'>닫기</button>
        </div>
      </div>
    )
}
 
export default PopupPostCode;