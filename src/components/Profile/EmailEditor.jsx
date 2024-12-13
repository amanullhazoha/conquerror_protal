import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Bold, Image as ImageIcon, Italic, Link as LinkIcon, Underline } from 'lucide-react'
import { Button } from '../ui/button'


const EmailEditor = () => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Link,
            Image
        ],
        content: '',
        editorProps: {
            attributes: {
                class: 'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none min-h-[200px]',
            },
        },
    })

    if (!editor) {
        return null
    }

    return (
        <div className="border rounded-lg overflow-hidden">
            <div className="border-b bg-gray-50 p-2 flex gap-2">
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={editor.isActive('bold') ? 'bg-gray-200' : ''}
                >
                    <Bold className="h-4 w-4" />
                </Button>
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={editor.isActive('italic') ? 'bg-gray-200' : ''}
                >
                    <Italic className="h-4 w-4" />
                </Button>
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    className={editor.isActive('underline') ? 'bg-gray-200' : ''}
                >
                    <Underline className="h-4 w-4" />
                </Button>
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                        const url = window.prompt('Enter the URL')
                        if (url) {
                            editor.chain().focus().setLink({ href: url }).run()
                        }
                    }}
                    className={editor.isActive('link') ? 'bg-gray-200' : ''}
                >
                    <LinkIcon className="h-4 w-4" />
                </Button>
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                        const url = window.prompt('Enter the image URL')
                        if (url) {
                            editor.chain().focus().setImage({ src: url }).run()
                        }
                    }}
                >
                    <ImageIcon className="h-4 w-4" />
                </Button>
            </div>
            <EditorContent editor={editor} />
        </div>
    )
}

export default EmailEditor