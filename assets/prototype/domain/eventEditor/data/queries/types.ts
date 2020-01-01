import { DataProxy } from 'apollo-cache';
import { OperationVariables } from 'apollo-client';
import { EntityId } from '../types';

export type ReadQueryOptions<TVariables = OperationVariables> = DataProxy.Query<TVariables>;

export type WriteQueryOptions<TData = any, TVariables = OperationVariables> = DataProxy.WriteQueryOptions<
	TData,
	TVariables
>;

export interface EntityItemProps {
	id: EntityId;
}

export interface FetchEntitiesResult {
	data: any;
	error: Error;
	loading: boolean;
}