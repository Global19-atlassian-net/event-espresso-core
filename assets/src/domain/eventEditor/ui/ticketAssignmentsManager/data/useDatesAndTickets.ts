import { useDatetimeItem, useTicketItem } from '@edtrServices/apollo/queries';
import { DatesAndTickets } from '../types';
import { useTAMContext } from '../context';
import useFilteredDatetimes from './useFilteredDatetimes';
import useFilteredTickets from './useFilteredTickets';

const useDatesAndTickets = (): DatesAndTickets => {
	const { assignmentType, entity } = useTAMContext();

	const filteredDatetimes = useFilteredDatetimes();
	const filteredTickets = useFilteredTickets();

	const singleDatetime = useDatetimeItem({ id: entity?.id });
	const singleTicket = useTicketItem({ id: entity?.id });

	switch (assignmentType) {
		case 'forAll':
			return {
				datetimes: filteredDatetimes,
				tickets: filteredTickets,
			};
		case 'forDate':
			return {
				datetimes: [singleDatetime],
				tickets: filteredTickets,
			};
		case 'forTicket':
			return {
				datetimes: filteredDatetimes,
				tickets: [singleTicket],
			};
	}
};

export default useDatesAndTickets;