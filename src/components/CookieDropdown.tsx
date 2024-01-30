// CookieDropdown.tsx

import React, { useState } from 'react';

const CookieDropdown: React.FC<{ options: string[] }> = ({ options }) => {
    const [selectedCookie, setSelectedCookie] = useState<string | null>(null);

    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCookie(event.target.value);
    };

    return (
        <div >
            <select
                id="cookieDropdown"
                name="cookie"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={selectedCookie || ''}
                onChange={handleSelect}
            >
                <option value="" disabled>
                    my pokemon
                </option>
                {options.map((cookie, index) => (
                    <option key={index} value={cookie}>
                        {cookie}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CookieDropdown;
