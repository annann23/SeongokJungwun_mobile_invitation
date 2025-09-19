'use client';

import { memo, useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';

const AccountSection = memo(() => {
  const [groomExpanded, setGroomExpanded] = useState(false);
  const [brideExpanded, setBrideExpanded] = useState(false);

  const groomAccounts = [
    {
      name: "채성옥",
      bank: "농협",
      account: "351-0010-7862-13",
      relation: "신랑"
    },
    {
      name: "채종재",
      bank: "토스뱅크", 
      account: "1000-1234-5679",
      relation: "신랑 아버지"
    },
    {
      name: "강외숙",
      bank: "토스뱅크",
      account: "1000-1234-5680", 
      relation: "신랑 어머니"
    }
  ];

  const brideAccounts = [
    {
      name: "김정운",
      bank: "카카오뱅크",
      account: "3333-03-1650728",
      relation: "신부"
    }
  ];

  const copyAccount = (account: string) => {
    navigator.clipboard.writeText(account);
    alert('계좌번호가 복사되었습니다!');
  };

  const openPay = (account: string) => {
    // 간편송금 앱 열기 (토스, 카카오페이 등)
    const payUrl = `toss://transfer?accountNumber=${account}`;
    window.location.href = payUrl;
  };

  const AccountCard = ({ account, isExpanded }: { account: any, isExpanded: boolean }) => (
    <m.div
      className="bg-gray-50 rounded-xl p-4 mb-3"
      initial={false}
      animate={{ 
        height: isExpanded ? "auto" : 0,
        opacity: isExpanded ? 1 : 0
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{ overflow: "hidden" }}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="text-sm font-medium text-gray-800 mb-1">{account.name}</div>
          <div className="text-xs text-gray-600 mb-2">{account.relation}</div>
          <div className="text-sm text-gray-700 mb-1">{account.bank}</div>
          <div className="text-sm font-mono text-gray-800">{account.account}</div>
        </div>
        <div className="flex gap-2 ml-4">
          <button
            onClick={() => copyAccount(account.account)}
            className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center active:bg-gray-300 transition-colors"
          >
            <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
              <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
            </svg>
          </button>
          <button
            onClick={() => openPay(account.account)}
            className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center active:bg-blue-600 transition-colors"
          >
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.759 8.07 16 9.006 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.44a1 1 0 00-1.414-1.414l-.705.705a2 2 0 000 2.828l.705-.705zm2.828-2.828l.705.705a2 2 0 000-2.828l-.705-.705a1 1 0 00-1.414 1.414zm.705.705l3.536-3.536a1 1 0 00-1.414-1.414l-3.536 3.536a1 1 0 001.414 1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </m.div>
  );

  return (
    <div className="space-y-4">
      {/* 신랑측 */}
      <m.div
        className="bg-white rounded-xl border border-gray-200 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <button
          onClick={() => setGroomExpanded(!groomExpanded)}
          className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
        >
          <span className="font-medium text-gray-800">신랑측에게</span>
          <m.div
            animate={{ rotate: groomExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </m.div>
        </button>
        
        <AnimatePresence>
          {groomExpanded && (
            <m.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="px-4 pb-4"
            >
              {groomAccounts.map((account, index) => (
                <AccountCard key={index} account={account} isExpanded={true} />
              ))}
            </m.div>
          )}
        </AnimatePresence>
      </m.div>

      {/* 신부측 */}
      <m.div
        className="bg-white rounded-xl border border-gray-200 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <button
          onClick={() => setBrideExpanded(!brideExpanded)}
          className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
        >
          <span className="font-medium text-gray-800">신부측에게</span>
          <m.div
            animate={{ rotate: brideExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </m.div>
        </button>
        
        <AnimatePresence>
          {brideExpanded && (
            <m.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="px-4 pb-4"
            >
              {brideAccounts.map((account, index) => (
                <AccountCard key={index} account={account} isExpanded={true} />
              ))}
            </m.div>
          )}
        </AnimatePresence>
      </m.div>
    </div>
  );
});

AccountSection.displayName = 'AccountSection';

export default AccountSection;
