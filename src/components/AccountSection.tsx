"use client";

import { memo, useState } from "react";
import { motion as m, AnimatePresence } from "motion/react";
import copy from "copy-to-clipboard";

const AccountSection = memo(() => {
  const [groomExpanded, setGroomExpanded] = useState(false);
  const [brideExpanded, setBrideExpanded] = useState(false);

  interface accountType {
    name: string;
    bank: string;
    account: string;
    relation: string;
  }

  const groomAccounts = [
    {
      name: "채성옥",
      bank: "농협",
      account: "351-0010-7862-13",
      relation: "신랑",
    },
    {
      name: "채종재",
      bank: "농협",
      account: "725067-51-013836",
      relation: "신랑 아버지",
    },
    {
      name: "강외숙",
      bank: "농협",
      account: "302-4102-8878-01",
      relation: "신랑 어머니",
    },
  ];

  const brideAccounts = [
    {
      name: "김정운",
      bank: "카카오뱅크",
      account: "3333-03-1650728",
      relation: "신부",
    },
  ];

  const copyAccount = (account: string) => {
    copy(account);
  };

  const AccountCard = ({
    account,
    isExpanded,
  }: {
    account: accountType;
    isExpanded: boolean;
  }) => (
    <m.div
      className="bg-gray-50 rounded-xl p-4 mb-3"
      initial={false}
      animate={{
        height: isExpanded ? "auto" : 0,
        opacity: isExpanded ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{ overflow: "hidden" }}
    >
      <div className="flex flex-col items-start justify-between">
        <div className="flex-1">
          <div className="text-sm font-medium text-gray-800 mb-1">
            {account.name}
          </div>
          <div className="text-xs text-gray-600 mb-2">{account.relation}</div>
        </div>
        <div className="flex w-full items-end justify-between gap-2">
          <div className="flex-1">
            <div className="text-sm text-gray-700 mb-1">{account.bank}</div>
            <div className="text-sm font-mono text-gray-800">
              {account.account}
            </div>
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <button
              onClick={() => copyAccount(account.account)}
              className="w-16 h-8 bg-gray-200 rounded-md flex items-center justify-center"
            >
              <span className="text-[12px] text-gray-600">복사하기</span>
            </button>
          </div>
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
          className="w-full p-4 flex items-center justify-between text-left"
        >
          <span className="font-medium text-gray-800">신랑측에게</span>
          <m.div
            animate={{ rotate: groomExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
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
          className="w-full p-4 flex items-center justify-between text-left"
        >
          <span className="font-medium text-gray-800">신부측에게</span>
          <m.div
            animate={{ rotate: brideExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
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

AccountSection.displayName = "AccountSection";

export default AccountSection;
