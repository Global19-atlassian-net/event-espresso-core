import { QueryHookOptions } from '@apollo/react-hooks';
import { DocumentNode } from 'graphql';
import { OperationVariables } from 'apollo-client';

export interface EntityQueryArgs<WhereArgs> {
	after?: string;
	before?: string;
	first?: number;
	last?: number;
	where?: WhereArgs;
}

export interface ReadQueryOptions<TData = any, TVariables = OperationVariables>
	extends QueryHookOptions<TData, TVariables> {
	query: DocumentNode;
}

export type Order = 'ASC' | 'DESC';

type EntityQueryOrderByItem<Field> = {
	field: Field;
	order: Order;
};

export type EntityQueryOrderBy<Field> = Array<EntityQueryOrderByItem<Field>>;