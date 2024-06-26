import Anthropic from '@anthropic-ai/sdk';

const CLAUDE_API_KEY = process.env.CLAUDE_API_KEY;

if (!CLAUDE_API_KEY) {
  throw new Error('CLAUDE_API_KEY is not set in the environment variables');
}

const anthropic = new Anthropic({
  apiKey: CLAUDE_API_KEY,
});

export async function generateInstagramPost(
    businessName: string,
    businessDescription: string,
    productsSold: string,
    websiteLink: string,
    promotions: string
) {
  try {
    const message = await anthropic.messages.create({
      model: 'claude-3-sonnet-20240229',
      max_tokens: 1024,
      temperature: 0.5,
      messages: [
        {
          role: 'user',
          content: `You are tasked with creating an engaging and catchy Instagram post for a business. Your goal is to highlight the unique aspects of the business and encourage users to check it out. Here's the information about the business:

                    <businessName>
                    ${businessName}
                    </businessName>

                    <businessDescription>
                    ${businessDescription}
                    </businessDescription>

                    <productsSold>
                    ${productsSold}
                    </productsSold>

                    <websiteLink>
                    ${websiteLink}
                    </websiteLink>

                    <promotions>
                    ${promotions}
                    </promotions>

                    To create an effective Instagram post, keep the following elements in mind:
                    1. Attention-grabbing opening line
                    2. Highlight of a unique selling point or interesting fact about the business
                    3. Call-to-action (CTA) to encourage user engagement

                    Follow these steps to craft your Instagram post:

                    1. Start with a hook: Use the business name or a key aspect of the description or products to create an attention-grabbing first line.
                    2. Highlight uniqueness: Identify and showcase what makes this business special or different from others.
                    3. Add value: Briefly mention a benefit or interesting fact that would appeal to potential customers.
                    4. Include a CTA: Encourage users to visit the business, try a product, or engage with the post.

                    Remember to keep your post concise and suitable for Instagram. Aim for around 125-150 characters for the main content, not including hashtags.

                    After the main content, include 3-5 relevant hashtags that could help increase the post's visibility.

                    The post should consist of the main content followed by hashtags on a new line.`
        }
      ]
    });

    const generatedText = message.content[0].type === 'text' 
    ? message.content[0].text 
    : 'Unable to generate post content';

    return generatedText;
  } catch (error) {
    console.error('Error calling Claude API:', error);
    throw new Error('Failed to generate Instagram post');
  }
}
