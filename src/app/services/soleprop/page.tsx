import SoleProprietorshipClient from './SolePropClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sole Proprietorship Registration",
  description: "Get your Sole Proprietorship registered in India with expert support. Fast, easy, and affordable registration process for solo entrepreneurs.",
  keywords: "sole proprietorship registration, business registration india, solo entrepreneur, small business setup",
};

export default function SoleProprietorshipPage() {
  return <SoleProprietorshipClient />;
}
