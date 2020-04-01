import updateTicketCache from './updateTicketCache';
import useUpdateDatetimeCache from './useUpdateDatetimeCache';
import { DatetimeMutationCallbackFn, DatetimeMutationCallbackFnArgs, CacheUpdaterFn } from '../types';
import { useRelations } from '@appServices/apollo/relations';
import { getGuids } from '@appServices/predicates';

const useOnDeleteDatetime = (): DatetimeMutationCallbackFn => {
	const { dropRelations, removeRelation } = useRelations();

	const updateDatetimeCache: CacheUpdaterFn = useUpdateDatetimeCache();

	const onDeleteDatetime = ({ proxy, datetimes, datetime }: DatetimeMutationCallbackFnArgs): void => {
		if (datetime.id) {
			const { nodes = [] } = datetimes;
			const datetimeIn = getGuids(nodes).sort();
			const { id: datetimeId } = datetime;

			// Update tickets cache for the changed datetimes,
			// to avoid refetching of tickets.
			updateTicketCache({ proxy, datetimeIn, datetimeId, action: 'remove' });

			// Remove the datetime from all ticket relations
			removeRelation({
				entity: 'datetimes',
				entityId: datetime.id,
				relation: 'tickets',
			});
			// Drop all the relations for the datetime
			dropRelations({
				entity: 'datetimes',
				entityId: datetime.id,
			});
		}
		// Update datetime cache after tickets cache is updated.
		updateDatetimeCache({ proxy, datetimes, datetime, action: 'remove' });
	};

	return onDeleteDatetime;
};

export default useOnDeleteDatetime;
