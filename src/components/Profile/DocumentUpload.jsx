/* eslint-disable react/prop-types */
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { ImagePreview } from './ImagePreview';
import { UploadPlaceholder } from './UploadPlaceholder';

export function DocumentPreview({ title = 'Documents Preview' }) {
    const [images, setImages] = useState([]);
    const [multipleMode, setMultipleMode] = useState(false);

    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files || []);

        files.forEach(file => {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImages(prev => [...prev, reader.result]);
            };
            reader.readAsDataURL(file);
        });
    };

    const handleReset = (index) => {
        setImages(prev => prev.filter((_, i) => i !== index));
    };

    const toggleUploadMode = () => {
        setMultipleMode(prev => !prev);
        setImages([]); // Reset images when switching modes
    };

    return (
        <Card className="w-[400px] mx-auto">
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>{title}</CardTitle>
                <Button
                    variant="primary-outline"
                    size="sm"
                    onClick={toggleUploadMode}
                    className="flex items-center gap-2"
                >
                    <Plus className="h-4 w-4" />
                    {multipleMode ? 'Single Upload' : 'Multiple Upload'}
                </Button>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="text-sm font-medium">
                    Transaction Receipt{multipleMode ? 's' : ''}*
                </div>

                <div className="border-2 border-dashed border-gray-200 rounded-lg p-4">
                    {images.length > 0 ? (
                        <div className="space-y-6">
                            {images.map((image, index) => (
                                <ImagePreview
                                    key={index}
                                    imageUrl={image}
                                    onReset={() => handleReset(index)}
                                />
                            ))}
                            {multipleMode && (
                                <div className="flex justify-center">
                                    <Button variant="primary-outline" className="flex items-center gap-2" asChild>
                                        <label htmlFor="multi-upload" className="cursor-pointer">
                                            <Plus className="h-4 w-4" />
                                            Add More
                                        </label>
                                    </Button>
                                    <input
                                        id="multi-upload"
                                        type="file"
                                        className="hidden"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        multiple
                                    />
                                </div>
                            )}
                        </div>
                    ) : (
                        <UploadPlaceholder
                            onUpload={handleImageUpload}
                            multiple={multipleMode}
                        />
                    )}
                </div>
            </CardContent>
        </Card>
    );
}