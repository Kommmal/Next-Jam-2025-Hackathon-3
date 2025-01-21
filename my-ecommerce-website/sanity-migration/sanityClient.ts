// sanityClient.ts
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Replace with your project ID
  dataset: 'production',       
  apiVersion: '2024-01-04',    
  useCdn: false,                
  token: process.env.SANITY_TOKEN,
});