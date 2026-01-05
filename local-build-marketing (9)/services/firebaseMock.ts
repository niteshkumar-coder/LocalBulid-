
import { Service, BlogPost, Lead } from '../types';

// Fixed: Removed Firebase imports as they were causing module resolution errors.
// The FirestoreService now operates as a pure mock using static data and LocalStorage, consistent with its filename.

class FirestoreService {
  private mockLeads: Lead[] = JSON.parse(localStorage.getItem('lb_mock_leads') || '[]');

  // Fixed: Return static services directly to avoid failing Firestore calls
  async getServices(): Promise<Service[]> {
    return this.getStaticServices();
  }

  private getStaticServices(): Service[] {
    return [
      { id: '3', title: 'Website Design', description: 'Modern, high-converting websites built for speed and SEO dominance.', icon: '🌐', category: 'Design' },
      { id: '4', title: 'Google Ads Management', description: 'Hyper-targeted search campaigns that drive immediate qualified leads.', icon: '🎯', category: 'Marketing' },
      { id: '5', title: 'Meta Ads Management', description: 'Dominating Instagram and Facebook feeds with high-impact video creative.', icon: '📱', category: 'Marketing' },
      { id: '6', title: 'Application Design', description: 'User-centric UI/UX for high-performance mobile and web applications.', icon: '🎨', category: 'Design' },
      { id: '7', title: 'Google Digital Profile Build', description: 'Expert GMB optimization to make your local business rank #1.', icon: '🏢', category: 'Business' },
      { id: '8', title: 'Digital Profile Ads', description: 'Specialized local ads to boost your profile visibility instantly.', icon: '🔝', category: 'Marketing' },
      { id: '9', title: 'Ecommerce Management', description: 'Full-stack store management, conversion optimization, and scaling.', icon: '🛒', category: 'E-commerce' },
      { id: '10', title: 'Dropshipping Systems', description: 'Automated high-margin retail systems with zero inventory stress.', icon: '📦', category: 'E-commerce' },
      { id: '11', title: 'Affiliate Marketing', description: 'Scaling reach through high-performance partner networks.', icon: '🤝', category: 'Marketing' },
      { id: '1', title: 'YouTube Growth', description: 'Scale your personal or business brand with AI-optimized content.', icon: '📺', category: 'Marketing' },
      { id: '2', title: 'AI Solutions', description: 'Custom intelligence for automated lead gen and support.', icon: '🤖', category: 'AI' },
      { id: '12', title: 'Network Marketing', description: 'Strategic digital funnels for MLM and network growth.', icon: '🚀', category: 'Marketing' }
    ];
  }

  // Fixed: Return static blog post content
  async getPosts(): Promise<BlogPost[]> {
    return [
      {
        id: '1',
        title: 'The Future of Local AI',
        excerpt: 'How local businesses are using Gemini to automate customer service.',
        content: 'AI is no longer a luxury for big corporations. Local businesses in Delhi and beyond are now using automated feedback loops to dominate their niche.',
        author: 'Rishabh Singh',
        date: 'June 15, 2024',
        thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
        slug: 'future-of-local-ai'
      }
    ];
  }

  // Fixed: Return leads from local state (synced with LocalStorage)
  async getLeads(): Promise<Lead[]> {
    return this.mockLeads;
  }

  // Fixed: Simplified lead addition to use local storage only
  async addLead(leadData: Omit<Lead, 'id' | 'createdAt' | 'responded'>): Promise<void> {
    this.saveLocalLead(leadData);
  }

  private saveLocalLead(leadData: any) {
    const newLead: Lead = {
      ...leadData,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString(),
      responded: false
    };
    this.mockLeads.unshift(newLead);
    localStorage.setItem('lb_mock_leads', JSON.stringify(this.mockLeads));
  }

  // Fixed: Update local mock state directly
  async markLeadResponded(id: string): Promise<void> {
    this.mockLeads = this.mockLeads.map(l => l.id === id ? { ...l, responded: true } : l);
    localStorage.setItem('lb_mock_leads', JSON.stringify(this.mockLeads));
  }

  // Fixed: Filter and update local mock state
  async deleteLead(id: string): Promise<void> {
    this.mockLeads = this.mockLeads.filter(l => l.id !== id);
    localStorage.setItem('lb_mock_leads', JSON.stringify(this.mockLeads));
  }
}

export const db = new FirestoreService();
