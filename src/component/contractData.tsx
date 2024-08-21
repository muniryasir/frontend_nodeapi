import React, { useState } from 'react';
import { Button, CircularProgress } from '@mui/material';
import { getBlockchainInfo } from '../services/api';
import { invokeSmartContract } from '../services/mint_api';

interface NodeInfo {
  version: string;
  // Add other relevant fields
}

const BlockchainInfo: React.FC = () => {
  const [nodeInfo, setNodeInfo] = useState<NodeInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleFetchData = async (mode:any) => {
    setLoading(true);
    let data;
    console.log(mode);
    try {
      if(mode == 1) {
          data = await getBlockchainInfo();
        }
      else if(mode == 2) {

        let mintparameter = {
          "owner": {
          
           "Account": ["3SfHLNkmy61ZUQkAhMvAwKj47EYDBiUPbn3wHghFD6qGr8WDGc"]
          
         },
      "tokens": [
          [
              "07",
              {
                  "metadata_url": [
                      {
                          
                          "hash": {
                              "None": [
                                  
                              ]
                          },
                          "url": "https://silver-tough-swordtail-947.mypinata.cloud/ipfs/QmWHeES4Yt8TaQrbLNgkVzddNwkwV4SDA8CT3bkCGKnhsW"
                      }
                  ],
                  "token_amount": "1"
              }
          ]
          ]
      }

        const params = {
          contractAddress: '9583',
          entrypoint: 'mint',
          parameter: mintparameter // Replace with your static JSON object
        };
        data = await invokeSmartContract(params);

      } else if(mode == 3) {

      } else if(mode == 4) {

      }
      setNodeInfo(data);
    } catch (error) {
      console.error('Error fetching blockchain info:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Blockchain Info</h1>
      <Button variant="contained" color="primary" onClick={()=>handleFetchData(1)}>
        Fetch Blockchain Info
      </Button> <br/><br/>
      <Button variant="contained" color="primary" onClick={()=>handleFetchData(2)}>
        Mint
      </Button><br/><br/>
      <Button variant="contained" color="primary" onClick={()=>handleFetchData(3)}>
        Update
      </Button><br/><br/>
      <Button variant="contained" color="primary" onClick={()=>handleFetchData(4)}>
        Transfer
      </Button><br/><br/>
      {loading && <CircularProgress />}
      {nodeInfo ? (
        <div>
          <p>Version: {nodeInfo.version}</p>
          {/* Display other relevant fields */}
        </div>
      ) : (
        !loading && <p>No data available</p>
      )}
    </div>
  );
};

export default BlockchainInfo;
