import { useState, useMemo } from 'react';

export const useROI = (initialLeads = 100, initialTicket = 500, initialLoss = 40) => {
  const [leads, setLeads] = useState(initialLeads);
  const [ticket, setTicket] = useState(initialTicket);
  const [loss, setLoss] = useState(initialLoss);

  const results = useMemo(() => {
    const lostMonthly = leads * (loss / 100) * ticket;
    const lostYearly = lostMonthly * 12;
    return { lostMonthly, lostYearly };
  }, [leads, ticket, loss]);

  return {
    leads,
    setLeads,
    ticket,
    setTicket,
    loss,
    setLoss,
    ...results
  };
};
