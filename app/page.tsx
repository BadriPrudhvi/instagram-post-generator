"use client";

import { useState } from 'react';
import Layout from '@/components/Layout';
import Form from '@/components/Form';
import GeneratedPost from '@/components/GeneratedPost';

export default function Home() {
  const [generatedPost, setGeneratedPost] = useState<string | null>(null);

  const handlePostGeneration = (post: string) => {
    setGeneratedPost(post);
  };

  return (
    <Layout>
      <Form onPostGenerate={handlePostGeneration} />
      {generatedPost && <GeneratedPost post={generatedPost} />}
    </Layout>
  );
}
