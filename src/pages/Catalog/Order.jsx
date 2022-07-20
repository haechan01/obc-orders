import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { currentUserState } from '../../models/users';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../models/firebase';
import { useNavigate } from 'react-router-dom';

const Order = () => {
  const [clientName, setClientName] = useState('');
  const [salesName, setSalesName] = useState('');
  const [salesContact, setSalesContact] = useState('');
  const [beerType, setBeerType] = useState('cosmos');
  const [beerQuantity, setBeerQuantity] = useState('');
  const [paymentType, setPaymentType] = useState('');
  const [orderPeriod, setOrderPeriod] = useState('');

  const currentUser = useRecoilValue(currentUserState);
  const navigate = useNavigate();
  console.log(currentUser);
  // 랜덤 송장번호
  const generateRandomCode = n => {
    let str = '';
    for (let i = 0; i < n; i++) {
      str += Math.floor(Math.random() * 10);
    }
    return str;
  };

  // 주문 양식 접수
  const submitOrder = async () => {
    try {
      await addDoc(collection(db, 'Orders'), {
        userName: currentUser.name,
        userID: currentUser.uid,
        orderNumber: generateRandomCode(10),
        clientName: clientName,
        salesName: salesName,
        salesContact: salesContact,
        beerType: beerType,
        beerQuantity: beerQuantity,
        paymentType: paymentType,
        orderPeriod: orderPeriod,
      });
      navigate('/cart');
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const testJandiMsg = e => {
    // let jsonString = e.postData.getDataAsString();
    // let jsonData = JSON.parse(jsonString);
    // let requestString = jsonData.data;

    // 전체공지를 전송할 대화방의 리스트
    // 잔디 커넥트 Incoming Webhook url 리스트. url은 큰따옴표("")로 감싸고 컴마(,) 구분으로 작성해주세요.
    // 관리를 위해 주석에 어느 대화방의 url인지 정보 적어두시기 바랍니다.
    let jandi_incoming_url_list = [
      '<https://wh.jandi.com/connect-api/webhook/24484792/05e44350d4d6e8bcce9f9c844ed91983>', // <팀, 대화방 정보>
    ];

    // JANDI MESSAGE
    let jandi_headers = {
      Accept: 'application/vnd.tosslab.jandi-v2+json',
      'Content-type': 'application/json',
    };
    let jandi_formData = {
      body: '전체공지 전달드립니다.',
      connectColor: '#00C473',
      connectInfo: [{ description: e }],
    };
    let jandi_options = {
      method: 'POST',
      payload: JSON.stringify(jandi_formData),
      headers: jandi_headers,
    };

    for (let jandi_incoming_url of jandi_incoming_url_list) {
      response = UrlFetchApp.fetch(jandi_incoming_url, jandi_options);
      Logger.log(response);
    }
  };

  return (
    <div className="bg-gray-100">
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Page content */}
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row lg:space-x-8 xl:space-x-16">
          {/* Content */}
          <div>
            <header className="mb-4">
              {/* Title */}
              <h1 className="text-2xl text-center md:text-3xl text-slate-800 font-bold mb-10">
                - OBC Year Round Beers -
              </h1>
              <div className="text-lg font-medium pl-6">
                <p>차별화된 맥주 문화와</p>
                <p> 경험을 통해 행복을 전달합니다.</p>
                <p>소중한 사람과 보내는 당신의 특별한 순간이</p>
                <p>우리의 맥주로 더욱 빛나길 바라며,</p>
                <p>애정을 담아 만든 우리의 맥주가 당신에게 </p>
                <p>또 다른 행복을 전할 수 있기를 바랍니다.</p>
              </div>
            </header>
            {/* Cosmos Ale */}
            {/* Image */}
            <figure className="mb-6">
              <img
                className="w-full rounded-sm"
                src={
                  'https://contents.sixshop.com/thumbnails/uploadedFiles/132878/default/image_1640764877122_750.jpg'
                }
                width="640"
                height="360"
                alt="Product"
              />
            </figure>

            {/* Product content */}
            <div>
              <h2 className="leading-snug text-amber-800 font-bold mb-2 text-center">
                <p className="text-2xl">Cosmos Ale</p>
                <p className="text-xl"> 코스모스 에일</p>
              </h2>
              <ul className="list-disc list-inside space-y-1 mb-6">
                <li>Bière de Champagne</li>
                <li>ABV 4.5%</li>
                <li>IBU 15</li>
                <li>750ml</li>
              </ul>
              <div className="mb-6">
                <p>
                  투명한 황금빛을 띠는 코스모스 에일은 은은한 청포도 향과
                  신선하고 상큼한 유자,
                </p>
                <p> 제피의 풍미가 조화로운 스파클링 에일입니다.</p>
              </div>
              <div className="mb-6">
                <p>샴페인 효모를 사용하여 부드럽고 섬세한 탄산감이 느껴지며,</p>
                <p>프루티함과 시트러스함을 지닌 것이 특징입니다.</p>
              </div>
              <div className="mb-6">
                <p>입안 가득 느껴지는 향긋한 풍미와 청량감,</p>
                <p>
                  깔끔한 피니시는 마치 샴페인을 마시는 듯한 경험을
                  선사해드립니다.
                </p>
              </div>
            </div>
            <hr className="my-6 border-t border-slate-200" />
            {/* Wollong Blanc */}
            {/* Image */}
            <figure className="mb-6">
              <img
                className="w-full rounded-sm"
                src={
                  'https://contents.sixshop.com/thumbnails/uploadedFiles/132878/default/image_1640665218711_750.jpg'
                }
                width="640"
                height="360"
                alt="Product"
              />
            </figure>
            {/* Product content */}
            <div>
              <h2 className="leading-snug text-amber-800 font-bold mb-2 text-center">
                <p className="text-2xl">Wollong Blanc</p>
                <p className="text-xl"> 월롱 블랑</p>
              </h2>
              <ul className="list-disc list-inside space-y-1 mb-6">
                <li>Belgian White</li>
                <li>ABV 4.5%</li>
                <li>IBU 15</li>
                <li>750ml</li>
              </ul>
              <div className="mb-6">
                <p>
                  밝은 노란빛을 띠는 월롱 블랑은 벨지안 위트 효모의 향긋한
                  풍미와 가벼운 바디감,
                </p>
                <p>부드럽고 깔끔한 피니시가 인상적인 벨기에식 밀 맥주입니다.</p>
              </div>
              <div className="mb-6">
                <p>
                  밝고 상쾌한 느낌의 오렌지 필과 고수 씨앗인 코리앤더 씨드에서
                </p>
                <p>은은하게 느껴지는 시트러스의 풍미에</p>
                <p>밀 맥주 특유의 우아하고 부드러운 마무리감이 더해져</p>
                <p>누구나 부담없이 즐기기 좋습니다.</p>
              </div>
            </div>
            <hr className="my-6 border-t border-slate-200" />
            {/* Fedora Kolsch */}
            {/* Image */}
            <figure className="mb-6">
              <img
                className="w-full rounded-sm"
                src={
                  'https://contents.sixshop.com/thumbnails/uploadedFiles/132878/default/image_1640766478244_750.jpg'
                }
                width="640"
                height="360"
                alt="Product"
              />
            </figure>
            {/* Product content */}
            <div>
              <h2 className="leading-snug text-amber-800 font-bold mb-2 text-center">
                <p className="text-2xl">Fedora Kölsch</p>
                <p className="text-xl">페도라 쾰시</p>
              </h2>
              <ul className="list-disc list-inside space-y-1 mb-6">
                <li>Kölsch</li>
                <li>ABV 5.5%</li>
                <li>IBU 23</li>
                <li>750ml</li>
              </ul>
              <div className="mb-6">
                <p>투명한 금빛을 띠는 페도라 쾰시는 맥주의 본고장으로 통하는</p>
                <p> 독일의 쾰른 지방에서 유래한 쾰시 맥주입니다.</p>
              </div>
              <div className="mb-6">
                <p>
                  보리 100% 맥주의 특징을 고스란히 담아내 고소하고 달콤한 꿀
                  향을 머금고 있으며,
                </p>
                <p>잔당감이 매우 적고 섬세함과 균형감이 느껴집니다.</p>
              </div>
              <div className="mb-6">
                <p>
                  부드러운 목 넘김과 함께 느껴지는 청량감, 깔끔하게 떨어지는
                  피니시는
                </p>
                <p>순수한 맥주의 매력을 온전히 느낄 수 있도록 합니다.</p>
              </div>
            </div>
            <hr className="my-6 border-t border-slate-200" />
            {/* Moonlight */}
            {/* Image */}
            <figure className="mb-6">
              <img
                className="w-full rounded-sm"
                src={
                  'https://contents.sixshop.com/thumbnails/uploadedFiles/132878/default/image_1640765315366_750.jpg'
                }
                width="640"
                height="360"
                alt="Product"
              />
            </figure>
            {/* Product content */}
            <div>
              <h2 className="leading-snug text-amber-800 font-bold mb-2 text-center">
                <p className="text-2xl">Moonlight</p>
                <p className="text-xl">문라이트</p>
              </h2>
              <ul className="list-disc list-inside space-y-1 mb-6">
                <li>Barrel Aged Scotch Ale</li>
                <li>ABV 9.5%</li>
                <li>IBU 22</li>
                <li>750ml</li>
              </ul>
              <div className="mb-6">
                <p>
                  짙은 흑갈색을 띠는 문라이트는 강한 몰트 향과 캐러멜의 단맛,{' '}
                </p>
                <p> 깊은 바디감을 지닌 스카치 에일입니다.</p>
              </div>
              <div className="mb-6">
                <p>
                  건포도, 건자두 같은 말린 과일이 주는 프루티함과 견과류의
                  고소함,
                </p>
                <p>
                  캐러멜의 달콤함까지 조화로운 밸런스가 매력적인 맥주입니다.
                </p>
              </div>
              <div className="mb-6">
                <p>
                  높은 도수와 장기간의 배럴 숙성으로 나타나는 독보적이고도
                  그윽한 향은
                </p>
                <p>마치 깊은 밤 위스키 한 잔을 마시는 듯한 느낌을 줍니다.</p>
              </div>
            </div>
            <hr className="my-6 border-t border-slate-200" />
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-white p-5 shadow-lg rounded-sm border border-slate-200 lg:w-72 xl:w-80">
              <div className="text-sm text-slate-800 font-semibold mb-3">
                상품 주문
              </div>
              <div className="space-y-2 sm:flex sm:space-y-0 sm:space-x-2 lg:space-y-2 lg:space-x-0 lg:flex-col mb-4">
                <div className="">
                  {/* <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="email"
                >
                  Email Address
                </label> */}
                  <input
                    id="clientname"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="회사명"
                    value={clientName}
                    onChange={e => setClientName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    id="salesName"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="담당자 이름/부서"
                    value={salesName}
                    onChange={e => setSalesName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    id="salesContact"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="담당자 연락처/이메일"
                    value={salesContact}
                    onChange={e => setSalesContact(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    제품 명
                  </label>
                  <div className="relative">
                    <select
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="beerType"
                      value={beerType}
                      onChange={e => setBeerType(e.target.value)}
                    >
                      <option value="cosmos">코스모스 에일</option>
                      <option value="wollong">월롱 블랑</option>
                      <option value="pedora">페도라 쾰시</option>
                      <option value="moon">문라이트</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <input
                    id="quantity"
                    type="number"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="제품 수량"
                    value={beerQuantity}
                    onChange={e => setBeerQuantity(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    id="orderperiod"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="배송 기간 (Ex. 2022/07/31)"
                    value={orderPeriod}
                    onChange={e => setOrderPeriod(e.target.value)}
                  />
                </div>
                {/* Checkbox */}
                <div className="flex flex-wrap items-center -m-3">
                  <div className="m-3">
                    {/* Start */}
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        value={'bank'}
                        onChange={e => setPaymentType(e.target.value)}
                      />
                      <span className="text-sm ml-2">무통장 입금</span>
                    </label>
                    {/* End */}
                  </div>
                  <div className="m-3">
                    {/* Start */}
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        value={'card'}
                        onChange={e => setPaymentType(e.target.value)}
                      />
                      <span className="text-sm ml-2">수령시 결제</span>
                    </label>
                    {/* End */}
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="mx-auto rounded-md text-white py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => submitOrder()}
                // onClick={() => testJandiMsg('testing jandi msg')}
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                Submit Order
              </button>
              <div className="text-xs text-slate-500 italic text-center">
                주문 양식 샘플(추후 변경 가능)
                {/* <a className="underline hover:no-underline" href="#0">
                  Terms
                </a> */}
                .
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
