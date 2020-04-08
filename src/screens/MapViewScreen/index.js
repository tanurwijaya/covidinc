import React from 'react';
import BottomMenu from './BottomMenu';
import NewsWidget from './NewsWidget';

export default function MapViewScreen() {
    return <div style={{ display: 'flex', flex: 1, flexDirection: 'column'}}>
        <NewsWidget/>
        <BottomMenu />
    </div>
}