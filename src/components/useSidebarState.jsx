import { useState } from 'react';

function useSidebarState() {
    const [Xvalue, setXvalue] = useState('active');

    const toggleXvalue = () => {
        setXvalue(prevValue => prevValue === 'active' ? 'active d-none' : 'active');
    };

    return {
        Xvalue,
        toggleXvalue
    };
}

export default useSidebarState;
