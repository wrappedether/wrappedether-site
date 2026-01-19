'use client';

import { WETC_CONTRACT, CHAINS, CONTRACT_LINKS } from '@/lib/constants';

export function ContractTable() {
  const networks = [
    {
      key: 'mainnet',
      label: 'Mainnet',
      name: CHAINS.mainnet.name,
      chainId: CHAINS.mainnet.id,
      consensus: 'Proof of Work',
      addressLink: CONTRACT_LINKS.mainnet.address,
      txLink: CONTRACT_LINKS.mainnet.tx,
      txShort: '0x9bb...2259e',
    },
    {
      key: 'mordor',
      label: 'Testnet',
      name: CHAINS.mordor.name,
      chainId: CHAINS.mordor.id,
      consensus: 'Proof of Work',
      addressLink: CONTRACT_LINKS.mordor.address,
      txLink: CONTRACT_LINKS.mordor.tx,
      txShort: '0x895...a212d',
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-etc-gray text-etc-green text-left text-sm uppercase tracking-wide">
            <th className="p-4 rounded-tl-lg">Network</th>
            <th className="p-4">Chain ID</th>
            <th className="p-4">Consensus</th>
            <th className="p-4">Contract Address</th>
            <th className="p-4 rounded-tr-lg">Tx Hash</th>
          </tr>
        </thead>
        <tbody>
          {networks.map((network, index) => (
            <tr
              key={network.key}
              className={`
                border-b border-etc-gray-light
                ${index === networks.length - 1 ? 'border-b-0' : ''}
              `}
            >
              <td className="p-4">
                <span className="font-bold text-white">{network.label}:</span>{' '}
                <span className="text-text-secondary">{network.name}</span>
              </td>
              <td className="p-4 text-text-secondary">{network.chainId}</td>
              <td className="p-4 text-text-secondary">{network.consensus}</td>
              <td className="p-4">
                <a
                  href={network.addressLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-etc-green-light hover:text-etc-green break-all"
                >
                  {WETC_CONTRACT}
                </a>
              </td>
              <td className="p-4">
                <a
                  href={network.txLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-etc-green-light hover:text-etc-green"
                >
                  {network.txShort}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
