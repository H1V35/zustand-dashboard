import { useWeddingBoundStore } from '@/stores/wedding';

export function useWeddingInvitation() {
  const firstName = useWeddingBoundStore((state) => state.firstName);
  const lastName = useWeddingBoundStore((state) => state.lastName);
  const setFirstName = useWeddingBoundStore((state) => state.setFirstName);
  const setLastName = useWeddingBoundStore((state) => state.setLastName);

  const guestsCount = useWeddingBoundStore((state) => state.guestsCount);
  const setGuestsCount = useWeddingBoundStore((state) => state.setGuestsCount);

  const eventDate = useWeddingBoundStore((state) => state.eventDate);
  const eventYYYYMMDD = useWeddingBoundStore((state) => state.eventYYYYMMDD());
  const eventHHMM = useWeddingBoundStore((state) => state.eventHHMM());
  const setEventDate = useWeddingBoundStore((state) => state.setEventDate);
  const setEventTime = useWeddingBoundStore((state) => state.setEventTime);

  const isConfirmed = useWeddingBoundStore((state) => state.isConfirmed);
  const setIsConfirmed = useWeddingBoundStore((state) => state.setIsConfirmed);

  return {
    firstName,
    lastName,
    guestsCount,
    eventDate,
    eventYYYYMMDD,
    eventHHMM,
    isConfirmed,

    setFirstName,
    setLastName,
    setGuestsCount,
    setEventDate,
    setEventTime,
    setIsConfirmed,
  };
}
