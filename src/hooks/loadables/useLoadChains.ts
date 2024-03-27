import { useEffect } from 'react';
import { getChainsConfig, type ChainInfo } from '@safe-global/safe-gateway-typescript-sdk';
import useAsync, { type AsyncResult } from '../useAsync';
import { logError, Errors } from '@/services/exceptions';

const getConfigs = async (): Promise<ChainInfo[]> => {
  const data = {
    "count": 4,
    "next": null,
    "previous": null,
    "results": [
      {
        "chainId": "1",
        "chainName": "Ethereum",
        "description": "",
        "chainLogoUri": "https://safe-transaction-assets.staging.5afe.dev/chains/1/chain_logo.png",
        "l2": false,
        "isTestnet": false,
        "nativeCurrency": {
          "name": "Ether",
          "symbol": "ETH",
          "decimals": 18,
          "logoUri": "https://safe-transaction-assets.staging.5afe.dev/chains/1/currency_logo.png"
        },
        "transactionService": "https://safe-transaction-mainnet.staging.5afe.dev/",
        "blockExplorerUriTemplate": {
          "address": "https://etherscan.io/address/{{address}}",
          "txHash": "https://etherscan.io/tx/{{txHash}}",
          "api": "https://api.etherscan.io/api?module={{module}}&action={{action}}&address={{address}}&apiKey={{apiKey}}"
        },
        "disabledWallets": [
          "socialSigner"
        ],
        "ensRegistryAddress": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
        "features": [
          "CONTRACT_INTERACTION",
          "DEFAULT_TOKENLIST",
          "DOMAIN_LOOKUP",
          "EIP1271",
          "EIP1559",
          "ERC721",
          "NATIVE_WALLETCONNECT",
          "PUSH_NOTIFICATIONS",
          "RECOVERY",
          "RISK_MITIGATION",
          "SAFE_APPS",
          "SAFE_TX_GAS_OPTIONAL",
          "SPENDING_LIMIT",
          "TX_SIMULATION"
        ],
        "gasPrice": [
          {
            "type": "oracle",
            "uri": "https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=JNFAU892RF9TJWBU3EV7DJCPIWZY8KEMY1",
            "gasParameter": "FastGasPrice",
            "gweiFactor": "1000000000.000000000"
          }
        ],
        "publicRpcUri": {
          "authentication": "API_KEY_PATH",
          "value": "https://mainnet.infura.io/v3/"
        },
        "rpcUri": {
          "authentication": "API_KEY_PATH",
          "value": "https://mainnet.infura.io/v3/"
        },
        "safeAppsRpcUri": {
          "authentication": "API_KEY_PATH",
          "value": "https://mainnet.infura.io/v3/"
        },
        "shortName": "eth",
        "theme": {
          "textColor": "#001428",
          "backgroundColor": "#DDDDDD"
        }
      },
      {
        "chainId": "8453",
        "chainName": "Base",
        "description": "",
        "chainLogoUri": "https://safe-transaction-assets.staging.5afe.dev/chains/1/chain_logo.png",
        "l2": true,
        "isTestnet": false,
        "nativeCurrency": {
          "name": "Ether",
          "symbol": "ETH",
          "decimals": 18,
          "logoUri": "https://safe-transaction-assets.staging.5afe.dev/chains/1/currency_logo.png"
        },
        "transactionService": "https://safe-transaction-mainnet.staging.5afe.dev/",
        "blockExplorerUriTemplate": {
          "address": "https://basescan.io/address/{{address}}",
          "txHash": "https://basescan.io/tx/{{txHash}}",
          "api": "https://api.basescan.io/api?module={{module}}&action={{action}}&address={{address}}&apiKey={{apiKey}}"
        },
        "disabledWallets": [
          "socialSigner"
        ],
        "ensRegistryAddress": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
        "features": [
          "CONTRACT_INTERACTION",
          "DEFAULT_TOKENLIST",
          "DOMAIN_LOOKUP",
          "EIP1271",
          "EIP1559",
          "ERC721",
          "NATIVE_WALLETCONNECT",
          "PUSH_NOTIFICATIONS",
          "RECOVERY",
          "RISK_MITIGATION",
          "SAFE_APPS",
          "SAFE_TX_GAS_OPTIONAL",
          "SPENDING_LIMIT",
          "TX_SIMULATION"
        ],
        "gasPrice": [],
        "publicRpcUri": {
          "authentication": "NO_AUTHENTICATION",
          "value": "https://base-mainnet.g.alchemy.com/v2/ljtWziOqoXFlTPlCZNzAdCo_UhDyXmDz"
        },
        "rpcUri": {
          "authentication": "NO_AUTHENTICATION",
          "value": "https://base-mainnet.g.alchemy.com/v2/ljtWziOqoXFlTPlCZNzAdCo_UhDyXmDz"
        },
        "shortName": "base",
        "theme": {
          "textColor": "#001428",
          "backgroundColor": "#DDDDDD"
        }
      },
      {
        "chainId": "137",
        "chainName": "Polygon",
        "description": "Polygon",
        "chainLogoUri": "https://safe-transaction-assets.staging.5afe.dev/chains/137/chain_logo.png",
        "l2": true,
        "isTestnet": false,
        "nativeCurrency": {
          "name": "Matic",
          "symbol": "MATIC",
          "decimals": 18,
          "logoUri": "https://safe-transaction-assets.staging.5afe.dev/chains/137/currency_logo.png"
        },
        "transactionService": "https://safe-transaction-polygon.staging.5afe.dev/",
        "blockExplorerUriTemplate": {
          "address": "https://polygonscan.com/address/{{address}}",
          "txHash": "https://polygonscan.com/tx/{{txHash}}",
          "api": "https://api.polygonscan.com/api?module={{module}}&action={{action}}&address={{address}}&apiKey={{apiKey}}"
        },
        "disabledWallets": [
          "coinbase",
          "socialSigner"
        ],
        "ensRegistryAddress": null,
        "features": [
          "CONTRACT_INTERACTION",
          "COUNTERFACTUAL",
          "DEFAULT_TOKENLIST",
          "EIP1271",
          "EIP1559",
          "ERC721",
          "NATIVE_WALLETCONNECT",
          "PUSH_NOTIFICATIONS",
          "RECOVERY",
          "RISK_MITIGATION",
          "SAFE_APPS",
          "SAFE_TX_GAS_OPTIONAL",
          "SPENDING_LIMIT",
          "TX_SIMULATION"
        ],
        "gasPrice": [],
        "publicRpcUri": {
          "authentication": "NO_AUTHENTICATION",
          "value": "https://polygon-rpc.com/"
        },
        "rpcUri": {
          "authentication": "API_KEY_PATH",
          "value": "https://polygon-mainnet.infura.io/v3/"
        },
        "safeAppsRpcUri": {
          "authentication": "API_KEY_PATH",
          "value": "https://polygon-mainnet.infura.io/v3/"
        },
        "shortName": "matic",
        "theme": {
          "textColor": "#ffffff",
          "backgroundColor": "#8248E5"
        }
      },
      {
        "chainId": "10",
        "chainName": "Optimism",
        "description": "",
        "chainLogoUri": "https://safe-transaction-assets.staging.5afe.dev/chains/10/chain_logo.png",
        "l2": true,
        "isTestnet": false,
        "nativeCurrency": {
          "name": "Ether",
          "symbol": "OETH",
          "decimals": 18,
          "logoUri": "https://safe-transaction-assets.staging.5afe.dev/chains/10/currency_logo.png"
        },
        "transactionService": "https://safe-transaction-optimism.safe.global",
        "blockExplorerUriTemplate": {
          "address": "https://optimistic.etherscan.io/address/{{address}}",
          "txHash": "https://optimistic.etherscan.io/tx/{{txHash}}",
          "api": "https://api-optimistic.etherscan.io/api?module={{module}}&action={{action}}&address={{address}}&apiKey={{apiKey}}"
        },
        "disabledWallets": [
          "coinbase",
          "keystone",
          "socialSigner"
        ],
        "ensRegistryAddress": null,
        "features": [
          "CONTRACT_INTERACTION",
          "DEFAULT_TOKENLIST",
          "EIP1271",
          "EIP1559",
          "ERC721",
          "NATIVE_WALLETCONNECT",
          "PUSH_NOTIFICATIONS",
          "RISK_MITIGATION",
          "SAFE_APPS",
          "SAFE_TX_GAS_OPTIONAL",
          "TX_SIMULATION"
        ],
        "gasPrice": [],
        "publicRpcUri": {
          "authentication": "NO_AUTHENTICATION",
          "value": "https://mainnet.optimism.io/"
        },
        "rpcUri": {
          "authentication": "API_KEY_PATH",
          "value": "https://optimism-mainnet.infura.io/v3/"
        },
        "safeAppsRpcUri": {
          "authentication": "API_KEY_PATH",
          "value": "https://optimism-mainnet.infura.io/v3/"
        },
        "shortName": "oeth",
        "theme": {
          "textColor": "#ffffff",
          "backgroundColor": "#F01A37"
        }
      },
      {
        "chainId": "11155111",
        "chainName": "Sepolia",
        "description": "Ethereum Testnet Sepolia",
        "chainLogoUri": "https://safe-transaction-assets.staging.5afe.dev/chains/11155111/chain_logo.png",
        "l2": true,
        "isTestnet": true,
        "nativeCurrency": {
          "name": "Sepolia Ether",
          "symbol": "ETH",
          "decimals": 18,
          "logoUri": "https://safe-transaction-assets.staging.5afe.dev/chains/11155111/currency_logo.png"
        },
        "transactionService": "https://safe-transaction-sepolia.staging.5afe.dev/",
        "blockExplorerUriTemplate": {
          "address": "https://sepolia.etherscan.io/address/{{address}}",
          "txHash": "https://sepolia.etherscan.io/tx/{{txHash}}",
          "api": "https://api-sepolia.etherscan.io/api?module={{module}}&action={{action}}&address={{address}}&apiKey={{apiKey}}"
        },
        "disabledWallets": [
          "coinbase"
        ],
        "ensRegistryAddress": "0x8FADE66B79cC9f707aB26799354482EB93a5B7dD",
        "features": [
          "CONTRACT_INTERACTION",
          "COUNTERFACTUAL",
          "DEFAULT_TOKENLIST",
          "DOMAIN_LOOKUP",
          "EIP1271",
          "EIP1559",
          "ERC721",
          "NATIVE_WALLETCONNECT",
          "PUSH_NOTIFICATIONS",
          "RECOVERY",
          "RELAYING",
          "RELAYING_MOBILE",
          "SAFE_APPS",
          "SAFE_TX_GAS_OPTIONAL",
          "SPENDING_LIMIT",
          "TX_SIMULATION"
        ],
        "gasPrice": [],
        "publicRpcUri": {
          "authentication": "NO_AUTHENTICATION",
          "value": "https://rpc.sepolia.org"
        },
        "rpcUri": {
          "authentication": "API_KEY_PATH",
          "value": "https://sepolia.infura.io/v3/"
        },
        "safeAppsRpcUri": {
          "authentication": "API_KEY_PATH",
          "value": "https://goerli.infura.io/v3/"
        },
        "shortName": "sep",
        "theme": {
          "textColor": "#ffffff",
          "backgroundColor": "#B8AAD5"
        }
      }
    ]
  };
  return data.results || [];
};

export const useLoadChains = (): AsyncResult<ChainInfo[]> => {
  const [data, error, loading] = useAsync<ChainInfo[]>(getConfigs, []);

  // Log errors
  useEffect(() => {
    if (error) {
      logError(Errors._620, error.message);
    }
  }, [error]);

  return [data, error, loading];
};

export default useLoadChains;
