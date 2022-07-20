import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';

const Orders = () => {
    const [clientName, setClientName] = useState('');
    const [recipientContact, setRecipientContact] = useState('');
    const [postcode, setPostcode] = useState('');
    const [primaryAddress, setPrimaryAddress] = useState('');
    const [detailAddress, setDetailAddress] = useState('');
    const [ordererAddress, setOrdererAddress] = useState(true);
    const [cardPayment, setCardPayment] = useState(false)
    console.log(clientName)
    return(
        <div className="bg-white">
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full">
                <div className="max-w-5xl mx-auto flex flex-col lg:flex-row lg:space-x-8 xl:space-x-16">
                    
                        <header className="mb-4">
                            <h1 className="text-2xl text-start md:text-3xl text-slate-800 font-bold mb-10">
                                법인 및 개인사업자 주문 
                            </h1>
                            <div className= "flex content-start">
                                <div className="text-2xl text-start md:text-2xl font-bold mb-10">
                                    03. 배송 밑 결제 정보
                                
                                </div>
                                <div className="text-mg text-start font-medium pl-6 ml-3">
                                    <p>주문하신 상품들은 동일한 날짜에 출고/배송 시작됩니다.</p>
                                    <p> 등의 주의사항등이 들어갈 예정입니다.</p>
                                </div>
                            </div>
                            
                            
                        </header>
                    
                </div>

            
                <div className= "flex justify-center mr-20">
                    <div className="flex justify-center text-sm font-semibold ml-10">
                        배송 방법 택일
                    </div>
                    <div>
                        <div className="ml-3">
                            <input
                                type="checkbox"
                                className="form-checkbox checkbox-gray"
                                value={ordererAddress}
                                onChange={e => setOrdererAddress(e.target.value)}
                            />
                            
                            <span className="text-sm text-slate-800 ml-2">주문자의 주소 또는 다른 한개의 주소로 일괄 배송</span>
                        
                        </div>
                        <div class="flex-grow border-t border-gray-400 ml-3"></div>
                        <div className="bg-gray-100 p-5 rounded-sm ml-3 lg:w-72 xl:w-300  mb-3">
                    
                            <div className="">
                                <div className="text-sm font-semibold ml-3 mb-3">
                                일괄 배송지 정보 입력
                                </div>
                                <div className="mb-2">
                                <input
                                    id="clientname"
                                    required
                                    className=" border-none mr-10 w-full px-3 py-2 bg-gray-100 placeholder-gray-400  rounded-t-md focus:outline-none sm:text-sm"
                                    placeholder="수령인 이름"
                                    value={clientName}
                                    onChange={e => setClientName(e.target.value)}
                                />
                                </div>
                                <div class="flex-grow border-t border-gray-400 ml-3 mb-3"></div>
                                <div className="mb-2">
                                    <input
                                        id="recipientContact"
                                        required
                                        className=" border-none w-full px-3 py-2 bg-gray-100 placeholder-gray-400  rounded-t-md focus:outline-none sm:text-sm"
                                        placeholder="수령인 모바일 연락처"
                                        value={recipientContact}
                                        onChange={e => setRecipientContact(e.target.value)}
                                    />
                                </div>
                                
                                <div class="flex-grow border-t border-gray-400 ml-3 mb-3"></div>
                                <div className="mb-2">
                                    <input
                                        id="postcode"
                                        required
                                        className=" border-none w-full px-3 py-2 bg-gray-100 placeholder-gray-400  rounded-t-md focus:outline-none sm:text-sm"
                                        placeholder="우편번호"
                                        value={postcode}
                                        onChange={e => setPostcode(e.target.value)}
                                    />
                                </div>
                                <div class="flex-grow border-t border-gray-400 ml-3 mb-3"></div>
                                <div className="mb-2">
                                    <input
                                        id="primaryAddress"
                                        required
                                        className=" border-none w-full px-3 py-2 bg-gray-100 placeholder-gray-400  rounded-t-md focus:outline-none sm:text-sm"
                                        placeholder="기본주소"
                                        value={primaryAddress}
                                        onChange={e => setPrimaryAddress(e.target.value)}
                                    />
                                </div>
                                <div class="flex-grow border-t border-gray-400 ml-3 mb-3"></div>
                                <div className="mb-2">
                                    <input
                                        id="detailAddress"
                                        required
                                        className=" border-none w-full px-3 py-2 bg-gray-100 placeholder-gray-400  rounded-t-md focus:outline-none sm:text-sm"
                                        placeholder="상세주소"
                                        value={detailAddress}
                                        onChange={e => setDetailAddress(e.target.value)}
                                    />
                                </div>
                                <div class="flex-grow border-t border-gray-400 mb-3"></div>
                            </div>
                        </div>
                        <div className="ml-3">
                            <input
                                type="checkbox"
                                className="form-checkbox checkbox-gray"
                                value={ordererAddress}
                                onChange={e => setOrdererAddress(e.target.value)}
                            />
                            
                            <span className="text-sm text-slate-800 ml-2">수령인(들)에게 개별 배송 (배송주소록 추후 입력, 카드결제 불가)</span>
                        
                        </div>
                        <div class="flex-grow border-t border-gray-400 ml-3"></div>
                    </div>
                    
                    
                </div>
                <div className= "flex justify-center mr-20 mt-20">
                    <div className="flex justify-center text-sm font-semibold ml-10">
                        결제 방법 택일
                    </div>
                        <div>
                            <div className="ml-3">
                                <input
                                    type="checkbox"
                                    className="form-checkbox checkbox-gray"
                                    value={ordererAddress}
                                    onChange={e => setOrdererAddress(e.target.value)}
                                />
                                <label class="form-check-label inline-block text-gray-800 opacity-50" for="flexCheckDisabled">
                                <span className="text-sm text-slate-800 ml-2">상품 수령 시 카드 결제 (총 주문액의 10% 계약금 입금 필요)</span>
                                </label>
                                
                            
                            </div>
                            <div className="ml-3">
                                <input
                                    type="checkbox"
                                    className="form-checkbox checkbox-gray"
                                    value={ordererAddress}
                                    onChange={e => setOrdererAddress(e.target.value)}
                                />
                                <label class="form-check-label inline-block text-gray-800 opacity-50" for="flexCheckDisabled">
                                    
                                <span className="text-sm text-slate-800 ml-2">무통장 입급 (국민 1234-0983-9374 (주)오리지널비어컴퍼니)</span>
                                </label>
                            </div>
                        </div>
                </div>
                
                
            </div>
        </div>
        
    )
    
};

export default Orders;