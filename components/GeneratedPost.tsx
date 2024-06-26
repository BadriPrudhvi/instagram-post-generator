import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram } from 'lucide-react';

interface GeneratedPostProps {
  post: string;
}

export default function GeneratedPost({ post }: GeneratedPostProps) {
  return (
    <Card className="mt-8 bg-white shadow-xl rounded-lg overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 text-white">
        <CardTitle className="flex items-center">
          <Instagram className="mr-2" size={24} />
          Generated Instagram Post
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <p className="text-gray-800 whitespace-pre-wrap">{post}</p>
      </CardContent>
    </Card>
  );
}