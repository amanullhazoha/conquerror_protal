/* eslint-disable react/prop-types */
import { Button } from '@/components/ui/button';
import { downloadImage } from '@/utils/downloadImage';
import { RotateCcw, Download, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

export function ImagePreview({ imageUrl, onReset }) {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div className="space-y-4">
            {isVisible && (
                <img
                    src={imageUrl}
                    alt="Preview"
                    className="w-full h-auto rounded-lg aspect-square object-contain"
                />
            )}
            <div className="flex justify-center gap-2">
                <Button
                    variant="primary-outline"
                    size="sm2"
                    onClick={onReset}
                    title="Reset"
                >
                    <RotateCcw className="h-4 w-4" />
                </Button>
                <Button
                    variant="primary-outline"
                    size="sm2"
                    onClick={() => setIsVisible(!isVisible)}
                    title={isVisible ? "Hide" : "Show"}
                >
                    {isVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
                <Button
                    variant="primary-outline"
                    size="sm2"
                    onClick={() => downloadImage(imageUrl)}
                    title="Download"
                >
                    <Download className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}