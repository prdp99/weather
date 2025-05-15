'use client';

import { searchPlace } from '@/actions/weather';
import { Search } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const SearchBar = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const query = searchParams.get('q') || '';

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const place = formData.get('place')?.toString().trim();
        if(!place) return
        searchPlace(place)
        console.log('data', place)
        const params = new URLSearchParams(searchParams.toString())
        params.set('q', place || '');
        router.push(`?${params.toString()}`);
    };


    return (
        <div className="p-5">
            <form className="flex items-center gap-2" onSubmit={handleSubmit}>
                <div className="relative flex-1">
                    <Input
                        type="text"
                        placeholder="Search location"
                        name="place"
                        defaultValue={query}
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/70 pr-10"
                    />
                </div>
                <Button
                    type="submit"
                    size="icon"
                    variant="ghost"
                    className="text-white hover:bg-white/20 transition-all"
                >
                    <Search className="h-5 w-5" />
                </Button>
            </form>
        </div>
    );
};

export default SearchBar;
