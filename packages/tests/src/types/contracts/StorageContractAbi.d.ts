/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.79.0
  Forc version: 0.49.3
  Fuel-Core version: 0.22.1
*/

import type {
  BigNumberish,
  BN,
  Bytes,
  BytesLike,
  Contract,
  DecodedValue,
  FunctionFragment,
  Interface,
  InvokeFunction,
  StdString,
} from 'fuels';

import type { Option, Enum } from "./common";

export type IdentityInput = Enum<{ Address: AddressInput, ContractId: ContractIdInput }>;
export type IdentityOutput = Enum<{ Address: AddressOutput, ContractId: ContractIdOutput }>;
export type PermissionInput = Enum<{ Authorized: IdentityInput, Unauthorized: [], NotFound: [] }>;
export type PermissionOutput = Enum<{ Authorized: IdentityOutput, Unauthorized: [], NotFound: [] }>;
export enum StorageContractErrorInput { AlreadyInitialized = 'AlreadyInitialized' };
export enum StorageContractErrorOutput { AlreadyInitialized = 'AlreadyInitialized' };

export type AddressInput = { value: string };
export type AddressOutput = AddressInput;
export type ContractIdInput = { value: string };
export type ContractIdOutput = ContractIdInput;
export type RawBytesInput = { ptr: BigNumberish, cap: BigNumberish };
export type RawBytesOutput = { ptr: BN, cap: BN };

interface StorageContractAbiInterface extends Interface {
  functions: {
    constructor: FunctionFragment;
    get: FunctionFragment;
    get_implementation: FunctionFragment;
    get_owner: FunctionFragment;
    reverse_get: FunctionFragment;
    reverse_set: FunctionFragment;
    set: FunctionFragment;
    set_implementation: FunctionFragment;
    set_owner: FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'constructor', values: [AddressInput, ContractIdInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'get', values: [string]): Uint8Array;
  encodeFunctionData(functionFragment: 'get_implementation', values: []): Uint8Array;
  encodeFunctionData(functionFragment: 'get_owner', values: []): Uint8Array;
  encodeFunctionData(functionFragment: 'reverse_get', values: [string]): Uint8Array;
  encodeFunctionData(functionFragment: 'reverse_set', values: [string, StdString]): Uint8Array;
  encodeFunctionData(functionFragment: 'set', values: [string, Bytes]): Uint8Array;
  encodeFunctionData(functionFragment: 'set_implementation', values: [ContractIdInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'set_owner', values: [AddressInput]): Uint8Array;

  decodeFunctionData(functionFragment: 'constructor', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_implementation', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_owner', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'reverse_get', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'reverse_set', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'set', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'set_implementation', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'set_owner', data: BytesLike): DecodedValue;
}

export class StorageContractAbi extends Contract {
  interface: StorageContractAbiInterface;
  functions: {
    constructor: InvokeFunction<[owner: AddressInput, registry_id: ContractIdInput], void>;
    get: InvokeFunction<[key: string], Option<Bytes>>;
    get_implementation: InvokeFunction<[], Option<ContractIdOutput>>;
    get_owner: InvokeFunction<[], Option<AddressOutput>>;
    reverse_get: InvokeFunction<[resolver: string], StdString>;
    reverse_set: InvokeFunction<[key: string, value: StdString], void>;
    set: InvokeFunction<[key: string, bytes_domain: Bytes], void>;
    set_implementation: InvokeFunction<[registry_id: ContractIdInput], void>;
    set_owner: InvokeFunction<[owner: AddressInput], void>;
  };
}
