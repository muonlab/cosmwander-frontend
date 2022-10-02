import { ICode, IContract } from '../types/db-schemas'

import querySchema from '../../resources/schema/query_msg.json'
import executeSchema from '../../resources/schema/execute_msg.json'
import instantiateSchema from '../../resources/schema/instantiate_msg.json'
import axios from 'axios'

const BASE_URL = 'http://localhost:3001'
const CODE_METADATA_ENDPOINT = (chainId: string, codeId: string) =>
  `${BASE_URL}/api/code/${chainId}/${codeId}/metadata`
const CODE_SCHEMA_ENDPOINT = (chainId: string, codeId: string) =>
  `${BASE_URL}/api/code/${chainId}/${codeId}/schema`
// /api/contract/osmo-test-4/osmo1nkanykc4506zynh379gm3w7zqg305x23je6halr25ydtlspv8uzsg82unl/schema
const CONTRACT_SCHEMA_ENDPOINT = (chainId: string, contractAddress: string) =>
  `${BASE_URL}/api/contract/${chainId}/${contractAddress}/schema`

async function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export async function sendRequest (url, method, body) {
  try {
    const response = await axios[method](url, body)
    return response.data
  } catch (e) {
    return e.message
  }
}

export async function fetchCode (
  chainId: string,
  codeId: string
): Promise<ICode> {
  if (!chainId || !codeId) throw new Error('Missing chainId or codeId')
  const codeResponse = await axios.get(CODE_METADATA_ENDPOINT(chainId, codeId))
  const codeSchemaResponse = await axios.get(
    CODE_SCHEMA_ENDPOINT(chainId, codeId)
  )
  return { ...codeResponse.data, schemas: codeSchemaResponse.data?.definition }
  // let code: ICode = {
  //   code_id: 100,
  //   creator: 'ya mom',
  //   checksum: 'balbdaofbei',
  //   contracts: ['osmo1233'],
  //   schema: {
  //     executeSchema: {
  //         "$schema": "http://json-schema.org/draft-07/schema#",
  //         "title": "ExecuteMsg",
  //         "oneOf": [
  //             {
  //                 "type": "object",
  //                 "required": [
  //                     "exec"
  //                 ],
  //                 "properties": {}
  //             }
  //         ]
  //     },
  //     querySchema: {
  //         "$schema": "http://json-schema.org/draft-07/schema#",
  //         "title": "ExecuteMsg",
  //         "oneOf": [
  //             {
  //                 "type": "object",
  //                 "required": [
  //                     "query"
  //                 ],
  //                 "properties": {}
  //             }
  //         ]
  //     },
  //     instantiateSchema: null
  //   },
  //   repository: 'github.com/ya/mom',
  //   verified: true,
  //   last_verified: new Date()
  // }
  //   return code
}

export async function fetchContract (
  chainId: string,
  address: string
): Promise<IContract> {
  if (!chainId || !address) throw new Error('Missing chainId or address')
  const contractResponse = await axios.get(
    CONTRACT_SCHEMA_ENDPOINT(chainId, address)
  )
  return contractResponse.data
  // let contract: IContract = {
  //   address: 'osmo1233',
  //   code_id: 100,
  //   creator: 'yamom',
  //   label: 'lol',
  //   ibcPortId: 'port-2',
  //   migrations: {
  //     '2': 'osmo1234'
  //   }
  // }
  // return contract
}
