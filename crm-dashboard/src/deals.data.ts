export interface Deal {
  id: string;
  title: string;
  closingDate: string;
  value: number;
  assignedTo: string;
  priority: 'High' | 'Medium' | 'Low';
  status: string;
  stage: 'Prospecting' | 'Qualified' | 'Proposal Sent' | 'In Negotiation' | 'Closed Won';
  pipeline: string; 
}

export const INITIAL_DEALS: Deal[] = [
  // Prospecting
  { id: '1', title: 'Digital Upgrade', closingDate: '2026-08-22', value: 125000, assignedTo: 'J. Perera', priority: 'High', status: 'On Track', stage: 'Prospecting', pipeline: 'Sales Pipeline' },
  { id: '2', title: 'E-Commerce Portal', closingDate: '2026-08-30', value: 450000, assignedTo: 'N. Fernando', priority: 'Medium', status: 'On Track', stage: 'Prospecting', pipeline: 'SMB Pipeline' },
  { id: '3', title: 'Mobile App Redesign', closingDate: '2026-09-05', value: 280000, assignedTo: 'A. Silva', priority: 'High', status: 'Initial Contact', stage: 'Prospecting', pipeline: 'Partner Network' },
  { id: '4', title: 'Cloud Storage Setup', closingDate: '2026-09-10', value: 95000, assignedTo: 'J. Perera', priority: 'Low', status: 'On Track', stage: 'Prospecting', pipeline: 'Sales Pipeline' },

  // Qualified
  { id: '5', title: 'Cloud Migration Consulting', closingDate: '2026-08-25', value: 310000, assignedTo: 'A. Silva', priority: 'Medium', status: 'On Track', stage: 'Qualified', pipeline: 'Sales Pipeline' },
  { id: '6', title: 'Cyber Security Audit', closingDate: '2026-09-01', value: 620000, assignedTo: 'J. Perera', priority: 'High', status: 'In Review', stage: 'Qualified', pipeline: 'Enterprise Deals' },
  { id: '7', title: 'Infrastructure Expansion', closingDate: '2026-09-15', value: 850000, assignedTo: 'N. Fernando', priority: 'Medium', status: 'On Track', stage: 'Qualified', pipeline: 'Enterprise Deals' },

  // Proposal Sent
  { id: '8', title: 'Manufacturing Proposal', closingDate: '2026-09-02', value: 500000, assignedTo: 'N. Fernando', priority: 'High', status: 'Awaiting Reply', stage: 'Proposal Sent', pipeline: 'Enterprise Deals' },
  { id: '9', title: 'Enterprise ERP System', closingDate: '2026-09-18', value: 1200000, assignedTo: 'A. Silva', priority: 'High', status: 'Awaiting Reply', stage: 'Proposal Sent', pipeline: 'Enterprise Deals' },
  { id: '10', title: 'Data Analytics Suite', closingDate: '2026-09-22', value: 340000, assignedTo: 'J. Perera', priority: 'Medium', status: 'Under Review', stage: 'Proposal Sent', pipeline: 'SMB Pipeline' },

  // In Negotiation
  { id: '11', title: 'Software Upgrade', closingDate: '2026-09-09', value: 150000, assignedTo: 'A. Silva', priority: 'High', status: 'Negotiating', stage: 'In Negotiation', pipeline: 'Sales Pipeline' },
  { id: '12', title: 'Annual AMC Contract', closingDate: '2026-09-25', value: 220000, assignedTo: 'J. Perera', priority: 'Medium', status: 'Final Terms', stage: 'In Negotiation', pipeline: 'SMB Pipeline' },
  { id: '13', title: 'AI Chatbot Integration', closingDate: '2026-09-28', value: 550000, assignedTo: 'N. Fernando', priority: 'High', status: 'Legal Review', stage: 'In Negotiation', pipeline: 'Enterprise Deals' },

  // Closed Won
  { id: '14', title: 'Consulting Project', closingDate: '2026-09-12', value: 150000, assignedTo: 'N. Fernando', priority: 'Low', status: 'On Track', stage: 'Closed Won', pipeline: 'Partner Network' },
  { id: '15', title: 'Custom CRM Development', closingDate: '2026-08-10', value: 400000, assignedTo: 'A. Silva', priority: 'Low', status: 'Completed', stage: 'Closed Won', pipeline: 'Enterprise Deals' }
];