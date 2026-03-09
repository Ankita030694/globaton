import HomeClient from './HomeClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Expert Management Advisors & Startup Registration",
  description: "Globaton is a leading management advisory firm in India, specializing in company registration, legal compliance, and tax services for startups and entrepreneurs.",
};

export default function Home() {
  return <HomeClient />;
}
