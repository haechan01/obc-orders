import React, { useEffect } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';

import { currentUserState } from '../../models/users';
import { orderListState } from '../../models/cart';
import { db } from '../../models/firebase';
import { query, collection, getDocs, where } from 'firebase/firestore';

const MyOrder = () => {
  const currentUser = useRecoilValue(currentUserState);
  const [orderList, setOrderList] = useRecoilState(orderListState);

  const fetchOrderList = async () => {
    try {
      const q = query(
        collection(db, 'Orders'),
        where('userID', '==', currentUser.uid)
      );
      const doc = await getDocs(q);
      let ordersList = [];
      doc.forEach(doc => {
        ordersList.push({
          orderNumber: doc.data().orderNumber,
          paymentType: doc.data().paymentType,
          orderPeriod: doc.data().orderPeriod,
        });
      });
      setOrderList(ordersList);
    } catch (err) {
      console.error(err);
      alert('An error occured while fetching order data');
    }
  };
  useEffect(() => {
    fetchOrderList();
  }, []);

  return (
    <div className="flex flex-col bg-white">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <div className="pl-10 py-4 text-xl font-bold">Order History</div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    송장번호
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    결제 방식
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    배송 기간
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {orderList.map(product => (
                  <tr key={product.orderNumber}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {product.orderNumber}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {product.paymentType}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {product.orderPeriod}
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
