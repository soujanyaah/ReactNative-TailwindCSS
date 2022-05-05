import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useTailwind } from 'tailwind-rn';

export default function Button() {
    const tailwind = useTailwind();

    return (
       
        <TouchableOpacity
            style={tailwind(' border-solid border border-indigo-600 flex flex-row justify-center h-12 p-2 w-full items-center rounded-md mt-6 rounded-xl')}
            activeOpacity={0.5}>
            <Text style={tailwind('text-red')}>TEST</Text>
        </TouchableOpacity>
    );
}