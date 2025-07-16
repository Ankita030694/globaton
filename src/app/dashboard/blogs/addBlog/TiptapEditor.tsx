'use client'

import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import Highlight from '@tiptap/extension-highlight';
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';

interface TiptapEditorProps {
  content: string;
  onChange: (content: string) => void;
  className?: string;
}

// MenuBar component for editor controls
const MenuBar = ({ editor }: { editor: any }) => {
  if (!editor) {
    return null;
  }

  const colors = [
    { name: 'Black', value: '#000000' },
    { name: 'Gray', value: '#4B5563' },
    { name: 'Red', value: '#EF4444' },
    { name: 'Green', value: '#22C55E' },
    { name: 'Blue', value: '#3B82F6' },
    { name: 'Yellow', value: '#EAB308' },
  ];

  return (
    <div className="border-b border-gray-300 p-2 flex flex-wrap gap-1 bg-gray-50">
      {/* Text Formatting */}
      <div className="flex gap-1 mr-2">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-1 px-2 rounded hover:bg-gray-200 ${editor.isActive('bold') ? 'bg-gray-200' : ''}`}
          title="Bold"
        >
          <strong>B</strong>
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-1 px-2 rounded hover:bg-gray-200 ${editor.isActive('italic') ? 'bg-gray-200' : ''}`}
          title="Italic"
        >
          <em>I</em>
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`p-1 px-2 rounded hover:bg-gray-200 ${editor.isActive('underline') ? 'bg-gray-200' : ''}`}
          title="Underline"
        >
          <u>U</u>
        </button>
      </div>

      <span className="border-r border-gray-300 mx-1"></span>
      
      {/* Headings */}
      <div className="flex gap-1 mr-2">
        <button
          type="button"
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={`p-1 px-2 rounded hover:bg-gray-200 ${editor.isActive('paragraph') ? 'bg-gray-200' : ''}`}
          title="Paragraph"
        >
          P
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`p-1 px-2 rounded hover:bg-gray-200 ${editor.isActive('heading', { level: 1 }) ? 'bg-gray-200' : ''}`}
          title="Heading 1"
        >
          H1
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`p-1 px-2 rounded hover:bg-gray-200 ${editor.isActive('heading', { level: 2 }) ? 'bg-gray-200' : ''}`}
          title="Heading 2"
        >
          H2
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={`p-1 px-2 rounded hover:bg-gray-200 ${editor.isActive('heading', { level: 3 }) ? 'bg-gray-200' : ''}`}
          title="Heading 3"
        >
          H3
        </button>
      </div>

      <span className="border-r border-gray-300 mx-1"></span>
      
      {/* Lists */}
      <div className="flex gap-1 mr-2">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-1 px-2 rounded hover:bg-gray-200 ${editor.isActive('bulletList') ? 'bg-gray-200' : ''}`}
          title="Bullet List"
        >
          • List
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-1 px-2 rounded hover:bg-gray-200 ${editor.isActive('orderedList') ? 'bg-gray-200' : ''}`}
          title="Ordered List"
        >
          1. List
        </button>
      </div>

      <span className="border-r border-gray-300 mx-1"></span>
      
      {/* Alignment */}
      <div className="flex gap-1 mr-2">
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          className={`p-1 px-2 rounded hover:bg-gray-200 ${editor.isActive({ textAlign: 'left' }) ? 'bg-gray-200' : ''}`}
          title="Align Left"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className={`p-1 px-2 rounded hover:bg-gray-200 ${editor.isActive({ textAlign: 'center' }) ? 'bg-gray-200' : ''}`}
          title="Align Center"
        >
          ↔
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={`p-1 px-2 rounded hover:bg-gray-200 ${editor.isActive({ textAlign: 'right' }) ? 'bg-gray-200' : ''}`}
          title="Align Right"
        >
          →
        </button>
      </div>

      <span className="border-r border-gray-300 mx-1"></span>
      
      {/* Special Elements */}
      <div className="flex gap-1 mr-2">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`p-1 px-2 rounded hover:bg-gray-200 ${editor.isActive('blockquote') ? 'bg-gray-200' : ''}`}
          title="Blockquote"
        >
          "Quote"
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          className="p-1 px-2 rounded hover:bg-gray-200"
          title="Horizontal Rule"
        >
          —
        </button>
      </div>

      <span className="border-r border-gray-300 mx-1"></span>
      
      {/* Color */}
      <div className="flex gap-1 mr-2">
        <select
          className="p-1 rounded border border-gray-300"
          onChange={(e) => editor.chain().focus().setColor(e.target.value).run()}
          title="Text Color"
        >
          <option value="">Text Color</option>
          {colors.map((color) => (
            <option key={color.value} value={color.value}>
              {color.name}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          className={`p-1 px-2 rounded hover:bg-gray-200 ${editor.isActive('highlight') ? 'bg-gray-200' : ''}`}
          title="Highlight"
        >
          <span className="bg-yellow-200 px-1">H</span>
        </button>
      </div>

      <span className="border-r border-gray-300 mx-1"></span>
      
      {/* Links and Media */}
      <div className="flex gap-1 mr-2">
        <button
          type="button"
          onClick={() => {
            const url = window.prompt('Enter the URL');
            if (url) {
              editor.chain().focus().setLink({ href: url }).run();
            }
          }}
          className={`p-1 px-2 rounded hover:bg-gray-200 ${editor.isActive('link') ? 'bg-gray-200' : ''}`}
          title="Link"
        >
          🔗
        </button>
        <button
          type="button"
          onClick={() => {
            const url = window.prompt('Enter the image URL');
            if (url) {
              editor.chain().focus().setImage({ src: url, alt: 'Image' }).run();
            }
          }}
          className="p-1 px-2 rounded hover:bg-gray-200"
          title="Image"
        >
          🖼️
        </button>
      </div>

      <span className="border-r border-gray-300 mx-1"></span>
      
      {/* Table */}
      <div className="flex gap-1 mr-2">
        <button
          type="button"
          onClick={() => {
            editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
          }}
          className="p-1 px-2 rounded hover:bg-gray-200"
          title="Insert Table"
        >
          Table
        </button>
      </div>
    </div>
  );
};

const TiptapEditor: React.FC<TiptapEditorProps> = ({ content, onChange, className = '' }) => {
  // Define the editor
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4, 5, 6],
        },
      }),
      Image.configure({
        allowBase64: true,
        inline: true,
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-500 underline',
        },
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
        alignments: ['left', 'center', 'right', 'justify'],
      }),
      Underline,
      TextStyle,
      Color,
      Highlight.configure({
        multicolor: true,
      }),
      Subscript,
      Superscript,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: content || '<p>Start writing your blog...</p>',
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose max-w-none p-4 min-h-[300px] focus:outline-none',
      },
    },
  });

  // Return the editor content with the MenuBar
  return (
    <div className={className}>
      {editor && (
        <>
          <MenuBar editor={editor} />
          <EditorContent editor={editor} />
        </>
      )}
    </div>
  );
};

export default TiptapEditor; 