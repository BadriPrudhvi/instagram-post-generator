"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Building2, FileText, ShoppingBag, Globe, Tag } from 'lucide-react';

interface FormProps {
  onPostGenerate: (post: string) => void;
}

export default function Form({ onPostGenerate }: FormProps) {
  const [businessName, setBusinessName] = useState('');
  const [businessDescription, setBusinessDescription] = useState('');
  const [productsSold, setProductsSold] = useState('');
  const [websiteLink, setWebsiteLink] = useState('');
  const [promotions, setPromotions] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/generate-post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ businessName, businessDescription, productsSold, websiteLink, promotions }),
      });
      
      if (!response.ok) throw new Error('Failed to generate post');
      
      const data = await response.json();
      onPostGenerate(data.post);
    } catch (error) {
      console.error('Error generating post:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="businessName" className="flex items-center text-lg font-medium text-gray-700">
          <Building2 className="mr-2 text-pink-500" size={20} />
          Business Name
        </Label>
        <Input
          id="businessName"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          placeholder="Enter your business name"
          required
          className="border-pink-300 focus:border-pink-500 focus:ring-pink-500"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="businessDescription" className="flex items-center text-lg font-medium text-gray-700">
          <FileText className="mr-2 text-pink-500" size={20} />
          Business Description
        </Label>
        <Textarea
          id="businessDescription"
          value={businessDescription}
          onChange={(e) => setBusinessDescription(e.target.value)}
          placeholder="Describe your business"
          required
          className="border-pink-300 focus:border-pink-500 focus:ring-pink-500"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="productsSold" className="flex items-center text-lg font-medium text-gray-700">
          <ShoppingBag className="mr-2 text-pink-500" size={20} />
          Products or Services Offered
        </Label>
        <Input
          id="productsSold"
          value={productsSold}
          onChange={(e) => setProductsSold(e.target.value)}
          placeholder="List main products or services"
          required
          className="border-pink-300 focus:border-pink-500 focus:ring-pink-500"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="websiteLink" className="flex items-center text-lg font-medium text-gray-700">
          <Globe className="mr-2 text-pink-500" size={20} />
          Business Website Link
        </Label>
        <Input
          id="websiteLink"
          type="url"
          value={websiteLink}
          onChange={(e) => setWebsiteLink(e.target.value)}
          placeholder="https://www.yourbusiness.com"
          required
          className="border-pink-300 focus:border-pink-500 focus:ring-pink-500"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="promotions" className="flex items-center text-lg font-medium text-gray-700">
          <Tag className="mr-2 text-pink-500" size={20} />
          Current Promotions or Offers
        </Label>
        <Input
          id="promotions"
          value={promotions}
          onChange={(e) => setPromotions(e.target.value)}
          placeholder="Enter any current promotions or special offers"
          className="border-pink-300 focus:border-pink-500 focus:ring-pink-500"
        />
      </div>
      <Button 
        type="submit" 
        disabled={loading}
        className="w-full bg-gradient-to-r from-pink-400 to-red-400 hover:from-pink-400 hover:to-red-500 text-white font-bold py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
      >
        {loading ? 'Generating...' : 'Generate Instagram Post'}
      </Button>
    </form>
  );
}