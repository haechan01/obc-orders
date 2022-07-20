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
    console.log(ordererAddress)
    return(
        <div className="bg-gray-100">
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full">
                <div className="max-w-5xl mx-auto flex flex-col lg:flex-row lg:space-x-8 xl:space-x-16">
                    <div>
                        <header className="mb-4">
                            <h1 className="text-2xl text-start md:text-3xl text-slate-800 font-bold mb-10">
                                법인 및 개인사업자 주문 
                            </h1>
                            <div className= "flex content-start">
                                <div className="text-2xl text-start md:text-2xl font-bold mb-10">
                                    03. 배송 밑 결제 정보
                                
                                </div>
                                <div className="text-mg text-start font-medium pl-6">
                                    <p>주문하신 상품들은 동일한 날짜에 출고/배송 시작됩니다.</p>
                                    <p> 등의 주의사항등이 들어갈 예정입니다.</p>
                                </div>
                            </div>
                            
                            
                        </header>
                    </div>
                </div>

            </div>
            <div>
                <div className= "flex content-start">
                    <div className="text-sm text-slate-800 font-semibold ml-10">
                        배송 방법 택일
                    </div>
                    <div className="ml-3">
                        <input
                            type="checkbox"
                            className="form-checkbox"
                            value={ordererAddress}
                            onChange={e => setOrdererAddress(e.target.value)}
                        />
                        
                        <span className="text-sm text-slate-800 mr-2">주문자의 주소 또는 다른 한개의 주소로 일괄 배송</span>
                    
                    </div>
                      
                </div>
                
                <div className="bg-white p-5 shadow-lg rounded-sm border border-slate-200 lg:w-72 xl:w-80">
                    
                    <div className="space-y-2 sm:flex sm:space-y-0 sm:space-x-2 lg:space-y-2 lg:space-x-0 lg:flex-col mb-4">
                        <div className="">
                        <input
                            id="clientname"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="수령인 이름"
                            value={clientName}
                            onChange={e => setClientName(e.target.value)}
                        />
                        </div>
                        <div className="mb-4">
                            <input
                                id="recipientContact"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="수령인 모바일 연락처"
                                value={recipientContact}
                                onChange={e => setRecipientContact(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                id="postcode"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="우편번호"
                                value={postcode}
                                onChange={e => setPostcode(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                id="primaryAddress"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="기본주소"
                                value={primaryAddress}
                                onChange={e => setPrimaryAddress(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                id="detailAddress"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="상세주소"
                                value={detailAddress}
                                onChange={e => setDetailAddress(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
    
};

export default Orders;