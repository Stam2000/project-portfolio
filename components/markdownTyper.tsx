// Types and interfaces
interface MarkdownTypewriterProps {
    content: string;
    typeSpeed?: number;
    initialDelay?: number;
    onComplete?: () => void;
    className?: string;
  }
  
  interface ProcessedContentSegment {
    type: 'text' | 'tag';
    content: string;
  }
  
  interface TypewriterState {
    processedContent: string;
    displayContent: string;
    currentIndex: number;
    isStarted: boolean;
    showCursor: boolean;
  }
  
  // Utility functions for markdown processing
  type MarkdownRule = {
    pattern: RegExp;
    replacement: string | ((match: string, ...args: string[]) => string);
  };
  
  const markdownRules: MarkdownRule[] = [
    {
      // Headers
      pattern: /^(#{1,6})\s(.+)$/gm,
      replacement: (match: string, hashes: string, content: string) => {
        const level = hashes.length;
        const size = {
          1: 'text-4xl',
          2: 'text-3xl',
          3: 'text-2xl',
          4: 'text-xl',
          5: 'text-lg',
          6: 'text-base'
        }[level as 1|2|3|4|5|6] || 'text-base';
        return `<h${level} class="font-bold ${size} mb-4">${content}</h${level}>`;
      }
    },
    {
      // Bold
      pattern: /\*\*(.*?)\*\*/g,
      replacement: '<strong>$1</strong>'
    },
    {
      // Italic
      pattern: /\*(.*?)\*/g,
      replacement: '<em>$1</em>'
    },
    {
      // Code blocks
      pattern: /```([\s\S]*?)```/g,
      replacement: (match: string, code: string) => 
        `<pre class="bg-gray-100 p-4 rounded-lg my-4 font-mono text-sm overflow-x-auto">${code.trim()}</pre>`
    },
    {
      // Inline code
      pattern: /`([^`]+)`/g,
      replacement: '<code class="bg-gray-100 px-1 rounded text-sm font-mono">$1</code>'
    },
    {
      // Blockquotes
      pattern: /^>\s(.+)$/gm,
      replacement: '<blockquote class="border-l-4 border-gray-300 pl-4 py-2 my-4 italic">$1</blockquote>'
    },
    {
      // Unordered lists
      pattern: /^[-*]\s(.+)$/gm,
      replacement: '<li class="ml-4">$1</li>'
    },
    {
      // Ordered lists
      pattern: /^(\d+)\.\s(.+)$/gm,
      replacement: '<li class="ml-4">$2</li>'
    },
    {
      // Links
      pattern: /\[(.*?)\]\((.*?)\)/g,
      replacement: '<a href="$2" class="text-blue-600 hover:underline">$1</a>'
    },
    {
      // Line breaks
      pattern: /\n/g,
      replacement: '<br>'
    }
  ];
  
  import React, { useState, useEffect, useCallback, useMemo } from 'react';
  
  const MarkdownTypewriter: React.FC<MarkdownTypewriterProps> = ({ 
    content,
    typeSpeed = 50,
    initialDelay = 500,
    onComplete,
    className = ''
  }) => {
    const [state, setState] = useState<TypewriterState>({
      processedContent: '',
      displayContent: '',
      currentIndex: 0,
      isStarted: false,
      showCursor: true
    });
  
    // Process markdown to HTML with styling
    const processMarkdown = useCallback((text: string): string => {
      let processed = text;
      
      markdownRules.forEach(rule => {
        processed = processed.replace(rule.pattern, rule.replacement as string);
      });
  
      return processed;
    }, []);
  
    // Initialize processed content
    useEffect(() => {
      const processed = processMarkdown(content);
      setState(prev => ({
        ...prev,
        processedContent: processed
      }));
    }, [content, processMarkdown]);
  
    // Handle initial delay
    useEffect(() => {
      if (!state.processedContent) return;
  
      const startTimeout = setTimeout(() => {
        setState(prev => ({
          ...prev,
          isStarted: true
        }));
      }, initialDelay);
  
      return () => clearTimeout(startTimeout);
    }, [state.processedContent, initialDelay]);
  
    // Handle typing effect
    useEffect(() => {
      if (!state.isStarted || !state.processedContent) return;
  
      if (state.currentIndex < state.processedContent.length) {
        const timeout = setTimeout(() => {
          setState(prev => ({
            ...prev,
            displayContent: prev.processedContent.slice(0, prev.currentIndex + 1),
            currentIndex: prev.currentIndex + 1
          }));
        }, typeSpeed);
  
        return () => clearTimeout(timeout);
      } else if (onComplete) {
        onComplete();
      }
    }, [state.currentIndex, state.processedContent, state.isStarted, typeSpeed, onComplete]);
  
    // Handle cursor blinking
    useEffect(() => {
      const cursorInterval = setInterval(() => {
        setState(prev => ({
          ...prev,
          showCursor: !prev.showCursor
        }));
      }, 530);
  
      return () => clearInterval(cursorInterval);
    }, []);
  
    // Memoize the cursor visibility calculation
    const cursorVisibility = useMemo(() => {
      return state.showCursor && state.currentIndex < state.processedContent.length
        ? 'opacity-100'
        : 'opacity-0';
    }, [state.showCursor, state.currentIndex, state.processedContent.length]);
  
    return (
      <div className={`markdown-typewriter max-w-3xl mx-auto p-6 ${className}`}>
        <div 
          dangerouslySetInnerHTML={{ __html: state.displayContent }} 
          className="inline"
        />
        <span 
          className={`inline-block w-2 h-4 ml-1 bg-black ${cursorVisibility}`}
          aria-hidden="true"
        />
      </div>
    );
  };
  
  export default MarkdownTypewriter